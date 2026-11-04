// Google アカウントでのログイン・利用記録・お気に入りのクラウド同期
//
// js/config.js に Firebase の設定が入っているときだけ動きます。
// 空のままなら何も読み込まず、サイトはこれまでどおりログインなしで使えます。

import { firebaseConfig, ADMIN_EMAILS, REQUIRE_LOGIN } from '../config.js';
import { favorites, local } from './storage.js';

const SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';

export const authEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
export const loginRequired = authEnabled && REQUIRE_LOGIN;

const HEARTBEAT_MS = 60 * 1000;
/** この時間以内に反応があった人を「いまオンライン」とみなす */
export const ONLINE_WINDOW_MS = 3 * 60 * 1000;

let fb = null; // 読み込んだ SDK と初期化済みのインスタンス
let user = null;
let ready = !authEnabled; // ログイン状態の確認が終わったか
let lastError = '';
const listeners = new Set();

export const authState = {
  get ready() {
    return ready;
  },
  get user() {
    return user;
  },
  get error() {
    return lastError;
  }
};

export function onAuthChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function emit() {
  listeners.forEach((fn) => {
    try {
      fn(user);
    } catch (e) {
      console.error(e);
    }
  });
}

export function isAdmin() {
  if (!user || !user.email || !user.emailVerified) return false;
  const me = user.email.toLowerCase();
  return ADMIN_EMAILS.some((e) => String(e).toLowerCase() === me);
}

/** LINE・Instagram などのアプリ内ブラウザでは Google ログインが使えないことが多い */
export function isInAppBrowser() {
  return /Line\/|FBAN|FBAV|Instagram|Twitter|MicroMessenger/i.test(navigator.userAgent);
}

/* ---------------- 初期化 ---------------- */

export async function initAuth() {
  if (!authEnabled) return;

  try {
    const [appMod, authMod, fsMod] = await Promise.all([
      import(SDK + 'firebase-app.js'),
      import(SDK + 'firebase-auth.js'),
      import(SDK + 'firebase-firestore.js')
    ]);
    const app = appMod.initializeApp(firebaseConfig);
    fb = { auth: authMod.getAuth(app), db: fsMod.getFirestore(app), A: authMod, F: fsMod };
    fb.auth.languageCode = 'ja';
  } catch (e) {
    console.error(e);
    lastError = 'ログイン機能を読み込めませんでした。通信状況を確認して再読み込みしてください。';
    ready = true;
    emit();
    return;
  }

  // リダイレクト方式でログインした場合の結果を受け取る（エラー表示のため）
  fb.A.getRedirectResult(fb.auth).catch((e) => {
    lastError = describeError(e);
    emit();
  });

  fb.A.onAuthStateChanged(fb.auth, async (u) => {
    stopTracking();
    user = u;
    ready = true;
    if (u) {
      lastError = '';
      // 記録と同期の失敗で画面が止まらないよう、待たずに進める
      recordVisit(u).catch((e) => console.warn('visit', e));
      syncFavorites(u).catch((e) => console.warn('favorites', e));
      startTracking(u);
    }
    emit();
  });
}

/* ---------------- ログイン・ログアウト ---------------- */

export async function signIn() {
  if (!fb) return;
  lastError = '';
  const provider = new fb.A.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    await fb.A.signInWithPopup(fb.auth, provider);
  } catch (e) {
    if (e?.code === 'auth/popup-blocked' || e?.code === 'auth/operation-not-supported-in-this-environment') {
      await fb.A.signInWithRedirect(fb.auth, provider);
      return;
    }
    if (e?.code === 'auth/popup-closed-by-user' || e?.code === 'auth/cancelled-popup-request') return;
    lastError = describeError(e);
    emit();
  }
}

export async function signOut() {
  if (!fb) return;
  await markOffline();
  stopTracking();
  await fb.A.signOut(fb.auth);
}

function describeError(e) {
  const code = e?.code || '';
  if (code === 'auth/unauthorized-domain') return 'このURLはログインが許可されていません（管理者の設定が必要です）。';
  if (code === 'auth/network-request-failed') return '通信に失敗しました。電波の良いところでもう一度お試しください。';
  if (code === 'auth/web-storage-unsupported') return 'このブラウザではログインできません。Safari や Chrome で開いてください。';
  return 'ログインできませんでした。もう一度お試しください。';
}

/* ---------------- 利用記録 ---------------- */

function deviceLabel() {
  const ua = navigator.userAgent;
  const os = /iPhone/.test(ua)
    ? 'iPhone'
    : /iPad/.test(ua)
      ? 'iPad'
      : /Android/.test(ua)
        ? 'Android'
        : /Mac OS X/.test(ua)
          ? 'Mac'
          : /Windows/.test(ua)
            ? 'Windows'
            : 'その他';
  const browser = /Edg\//.test(ua) ? 'Edge' : /CriOS|Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : /Firefox/.test(ua) ? 'Firefox' : '';
  return browser ? `${os} / ${browser}` : os;
}

function currentPage() {
  return (location.hash.replace(/^#/, '') || '/').slice(0, 120);
}

async function recordVisit(u) {
  const { F, db } = fb;
  const ref = F.doc(db, 'users', u.uid);
  const snap = await F.getDoc(ref).catch(() => null);
  const base = {
    email: u.email || '',
    name: u.displayName || '',
    photo: u.photoURL || '',
    lastSeen: F.serverTimestamp(),
    online: true,
    page: currentPage(),
    device: deviceLabel()
  };
  if (!snap || !snap.exists()) base.firstSeen = F.serverTimestamp();

  // ログイン回数とログイン履歴は「ブラウザのタブを開いたとき」に1回だけ数える
  const sessionKey = 'naoruenglish:visit:' + u.uid;
  let counted = false;
  try {
    counted = sessionStorage.getItem(sessionKey) === '1';
  } catch {
    /* noop */
  }
  if (!counted) {
    base.visitCount = F.increment(1);
    base.lastLogin = F.serverTimestamp();
  }
  await F.setDoc(ref, base, { merge: true });

  if (!counted) {
    await F.addDoc(F.collection(db, 'visits'), {
      uid: u.uid,
      email: u.email || '',
      name: u.displayName || '',
      at: F.serverTimestamp(),
      device: deviceLabel(),
      page: currentPage()
    });
    try {
      sessionStorage.setItem(sessionKey, '1');
    } catch {
      /* noop */
    }
  }
}

let heartbeat = null;
let pageTimer = null;

function touch(extra = {}) {
  if (!fb || !user) return Promise.resolve();
  const { F, db } = fb;
  return F.updateDoc(F.doc(db, 'users', user.uid), {
    email: user.email || '',
    lastSeen: F.serverTimestamp(),
    online: true,
    page: currentPage(),
    ...extra
  }).catch(() => {});
}

function markOffline() {
  if (!fb || !user) return Promise.resolve();
  const { F, db } = fb;
  return F.updateDoc(F.doc(db, 'users', user.uid), {
    email: user.email || '',
    online: false,
    lastSeen: F.serverTimestamp()
  }).catch(() => {});
}

function onVisibility() {
  if (document.visibilityState === 'visible') touch();
  else markOffline();
}

function onHashChange() {
  // ページ移動のたびに書き込まないよう、少しまとめてから記録する
  clearTimeout(pageTimer);
  pageTimer = setTimeout(() => touch(), 5000);
}

function startTracking() {
  heartbeat = setInterval(() => {
    if (document.visibilityState === 'visible') touch();
  }, HEARTBEAT_MS);
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('hashchange', onHashChange);
  window.addEventListener('pagehide', markOffline);
}

function stopTracking() {
  clearInterval(heartbeat);
  clearTimeout(pageTimer);
  heartbeat = null;
  document.removeEventListener('visibilitychange', onVisibility);
  window.removeEventListener('hashchange', onHashChange);
  window.removeEventListener('pagehide', markOffline);
}

/* ---------------- お気に入りのクラウド同期 ---------------- */

let unsubscribeFav = null;
let favTimer = null;

async function syncFavorites(u) {
  const { F, db } = fb;
  const ref = F.doc(db, 'favorites', u.uid);
  const snap = await F.getDoc(ref);
  const cloud = snap.exists() ? snap.data().items || [] : [];

  // この端末でこのアカウントと初めて同期するとき、または未送信の変更があるときは
  // 端末内とクラウドの両方を残す（どちらのお気に入りも消さない）。
  // それ以外はクラウドを正とする（別の端末で外したお気に入りを反映するため）。
  const syncedWith = local.read('favSyncedUid', '');
  const dirty = local.read('favDirty', false);
  const merged = syncedWith !== u.uid || dirty ? [...new Set([...cloud, ...favorites.list()])] : cloud;

  favorites.replaceAll(merged);
  await F.setDoc(ref, { items: favorites.list(), updatedAt: F.serverTimestamp() });
  local.write('favSyncedUid', u.uid);
  local.write('favDirty', false);

  // いま開いている画面の ☆ / ★ を更新する（app.js が受け取る）
  window.dispatchEvent(new CustomEvent('naoru:favorites-synced'));

  unsubscribeFav?.();
  unsubscribeFav = favorites.onChange((items) => {
    if (!user || user.uid !== u.uid) return;
    local.write('favDirty', true);
    clearTimeout(favTimer);
    favTimer = setTimeout(async () => {
      try {
        await F.setDoc(ref, { items, updatedAt: F.serverTimestamp() });
        local.write('favDirty', false);
      } catch (e) {
        console.warn('favorites save', e);
      }
    }, 800);
  });
}

/* ---------------- 管理画面用の読み取り ---------------- */

/**
 * 利用者一覧とログイン履歴をリアルタイムで受け取る。
 * 実際に読めるのは firestore.rules で管理者と認められた人だけ。
 * @returns {() => void} 購読をやめる関数
 */
export function watchAdminData(onData, onError) {
  if (!fb || !isAdmin()) {
    onError?.(new Error('not-admin'));
    return () => {};
  }
  const { F, db } = fb;
  const state = { users: [], visits: [] };
  const toDate = (v) => (v && typeof v.toDate === 'function' ? v.toDate() : null);

  const unsubUsers = F.onSnapshot(
    F.query(F.collection(db, 'users'), F.orderBy('lastSeen', 'desc'), F.limit(500)),
    (snap) => {
      state.users = snap.docs.map((d) => {
        const x = d.data();
        return { uid: d.id, ...x, lastSeen: toDate(x.lastSeen), firstSeen: toDate(x.firstSeen), lastLogin: toDate(x.lastLogin) };
      });
      onData({ ...state });
    },
    (e) => onError?.(e)
  );

  const unsubVisits = F.onSnapshot(
    F.query(F.collection(db, 'visits'), F.orderBy('at', 'desc'), F.limit(200)),
    (snap) => {
      state.visits = snap.docs.map((d) => {
        const x = d.data();
        return { id: d.id, ...x, at: toDate(x.at) };
      });
      onData({ ...state });
    },
    (e) => onError?.(e)
  );

  return () => {
    unsubUsers();
    unsubVisits();
  };
}
