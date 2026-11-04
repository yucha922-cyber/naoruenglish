import { route, start, resolve, setNotFound, currentPath } from './lib/router.js';
import { favorites, progress, settings } from './lib/storage.js';
import { speak, stopSpeaking, canSpeak, canListen, englishVoices, loadVoices, isRecommended } from './lib/speech.js';
import { isValidScope } from './data/scopes.js';
import { esc } from './lib/ui.js';
import { authEnabled, loginRequired, authState, initAuth, onAuthChange, signIn, signOut, isAdmin, isInAppBrowser } from './lib/auth.js';

import * as home from './views/home.js';
import * as flow from './views/flow.js';
import * as symptomsView from './views/symptoms.js';
import * as words from './views/words.js';
import * as learn from './views/learn.js';
import * as simulation from './views/simulation.js';
import * as phone from './views/phone.js';
import * as searchView from './views/search.js';
import * as meeting from './views/meeting.js';
import * as admin from './views/admin.js';

const app = document.getElementById('app');
const searchInput = document.getElementById('search-input');

/* ---------------- 描画 ---------------- */

let cleanup = null;

function show(html, mount) {
  stopSpeaking();
  // 前の画面の後片付け（管理画面のリアルタイム購読など）
  cleanup?.();
  cleanup = null;

  if (loginRequired && !authState.user) {
    app.innerHTML = authState.ready ? loginPage() : '<p class="empty">読み込み中…</p>';
    window.scrollTo(0, 0);
    return;
  }

  app.innerHTML = html;
  window.scrollTo(0, 0);
  const result = mount?.(app);
  if (typeof result === 'function') cleanup = result;
}

/* ---------------- ログイン ---------------- */

function loginPage() {
  return `
    <div class="login-box">
      <div class="login-icon">🩺</div>
      <h1>セラピストの英会話</h1>
      <p>このサイトは、Google アカウントでログインしてご利用いただけます。</p>
      ${
        isInAppBrowser()
          ? `<div class="callout warn"><h3>⚠️ アプリ内ブラウザでは開けません</h3>
              <p style="margin:0">LINE などのアプリ内では Google ログインができません。右上のメニューから「Safari で開く」「ブラウザで開く」を選んでください。</p></div>`
          : ''
      }
      ${authState.error ? `<p class="login-error">${esc(authState.error)}</p>` : ''}
      <button class="btn btn-primary btn-lg btn-block" data-login>Google でログイン</button>
      <p class="login-note">
        ログインすると、お気に入りがアカウントに保存され、スマホとパソコンなど別の端末でも同じお気に入りを使えます。<br>
        ご利用の確認のため、ログインに使った Gmail アドレスと利用日時が運営者に記録されます。
      </p>
    </div>`;
}

const accountField = document.getElementById('account-field');
const accountBox = document.getElementById('account-box');

function renderAccount() {
  if (!authEnabled) return;
  accountField.hidden = false;
  const u = authState.user;
  accountBox.innerHTML = u
    ? `<p class="account-line">ログイン中：<b>${esc(u.email)}</b></p>
       <p class="field-help" style="margin:0 0 8px">お気に入りはこのアカウントに保存されています。</p>
       <div class="btn-row">
         ${isAdmin() ? '<a class="btn" href="#/admin" data-close>🔒 管理画面</a>' : ''}
         <button class="btn btn-ghost" data-logout>ログアウト</button>
       </div>`
    : `<p class="field-help" style="margin:0 0 8px">ログインすると、お気に入りを別の端末でも使えます。</p>
       <button class="btn btn-primary" data-login>Google でログイン</button>`;
}

onAuthChange(() => {
  renderAccount();
  resolve();
  syncTabs();
});

window.addEventListener('naoru:favorites-synced', refreshFavButtons);

function notFoundPage() {
  show(`
    <div class="empty">
      <p>ページが見つかりませんでした。</p>
      <a class="btn btn-primary" href="#/">ホームへ戻る</a>
    </div>`);
}

/* ---------------- ルート定義 ---------------- */

route(/^\/$/, () => show(home.render()));

route(/^\/flow$/, () => show(flow.renderIndex()));
route(/^\/flow\/([\w-]+)$/, ([id]) => {
  const html = flow.renderDetail(id);
  html ? show(html) : notFoundPage();
});

route(/^\/phone$/, () => show(phone.renderIndex()));
route(/^\/phone\/([\w-]+)$/, ([id]) => {
  const html = phone.renderDetail(id);
  html ? show(html) : notFoundPage();
});

route(/^\/symptoms$/, (_, q) => show(symptomsView.renderIndex(q.get('cat') || 'すべて')));
route(/^\/symptoms\/([\w-]+)$/, ([id]) => {
  const html = symptomsView.renderDetail(id);
  html ? show(html) : notFoundPage();
});

route(/^\/words$/, () => show(words.renderVocabIndex()));
route(/^\/words\/([\w-]+)$/, ([id]) => {
  const html = words.renderVocabCategory(id);
  html ? show(html) : notFoundPage();
});
route(/^\/muscles$/, (_, q) => show(words.renderMuscles(q.get('region') || 'all')));

route(/^\/learn$/, () => show(learn.renderHub()));
route(/^\/learn\/quiz$/, (_, q) => {
  const mode = q.get('mode') || 'all';
  const scope = isValidScope(q.get('scope')) ? q.get('scope') || 'all' : 'all';
  show(learn.renderQuiz(mode, scope), (root) => learn.mountQuiz(root, mode, scope));
});
route(/^\/learn\/pronunciation$/, (_, q) => {
  const src = q.get('from') || 'phrase';
  const scope = isValidScope(q.get('scope')) ? q.get('scope') || 'all' : 'all';
  show(learn.renderPronunciation(src, scope), (root) => learn.mountPronunciation(root, src, scope));
});
route(/^\/learn\/simulation$/, (_, q) => {
  const scope = isValidScope(q.get('scope')) ? q.get('scope') || 'all' : 'all';
  show(simulation.renderIndex(scope), (root) => simulation.mountIndex(root));
});
route(/^\/learn\/simulation\/([\w-]+)$/, ([id]) => {
  const html = simulation.renderScenario(id);
  if (!html) return notFoundPage();
  show(html, (root) => simulation.mountScenario(root, id));
});

route(/^\/search$/, (_, q) => {
  const term = q.get('q') || '';
  if (searchInput.value !== term) searchInput.value = term;
  show(searchView.renderResults(term));
});

route(/^\/favorites$/, () => show(searchView.renderFavorites()));

// オンライン英会話：管理者専用。管理者以外には「ページが見つかりません」と表示する
route(/^\/meeting$/, () => (isAdmin() ? show(meeting.renderIndex()) : notFoundPage()));
route(/^\/meeting\/script$/, () => (isAdmin() ? show(meeting.renderScript()) : notFoundPage()));
route(/^\/meeting\/([\w-]+)$/, ([id]) => {
  const html = isAdmin() ? meeting.renderDetail(id) : null;
  html ? show(html) : notFoundPage();
});

// 管理画面：管理者以外には「ページが見つかりません」と表示し、存在を知らせない
route(/^\/admin$/, () => {
  if (!isAdmin()) return notFoundPage();
  show(admin.render(), (root) => admin.mount(root));
});

setNotFound(notFoundPage);

/* ---------------- タブの選択状態 ---------------- */

const TAB_MATCH = [
  ['flow', /^\/(flow|phone)/],
  ['symptoms', /^\/symptoms/],
  ['words', /^\/(words|muscles)/],
  ['learn', /^\/(learn|meeting)/],
  ['home', /^\/$/]
];

function syncTabs() {
  const path = currentPath();
  const active = TAB_MATCH.find(([, re]) => re.test(path))?.[0];
  document.querySelectorAll('.tab-bar a').forEach((a) => {
    a.classList.toggle('is-active', a.dataset.tab === active);
  });
}

window.addEventListener('hashchange', syncTabs);

/* ---------------- 検索 ---------------- */

let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    const q = searchInput.value.trim();
    // 履歴を汚さないよう置き換えで遷移する
    history.replaceState(null, '', q ? `#/search?q=${encodeURIComponent(q)}` : '#/search');
    resolve();
    syncTabs();
  }, 250);
});

document.getElementById('search-form').addEventListener('submit', (e) => {
  e.preventDefault();
  searchInput.blur();
});

/* ---------------- 共通の操作（読み上げ・お気に入り・拡大表示） ---------------- */

const presentModal = document.getElementById('present-modal');
const presentEn = document.getElementById('present-en');
const presentJa = document.getElementById('present-ja');

document.addEventListener('click', (e) => {
  const speakBtn = e.target.closest('[data-speak]');
  if (speakBtn) {
    speak(speakBtn.dataset.speak, { button: speakBtn });
    return;
  }

  const slowBtn = e.target.closest('[data-speak-slow]');
  if (slowBtn) {
    speak(slowBtn.dataset.speakSlow, { button: slowBtn, rate: 0.55 });
    return;
  }

  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    favorites.toggle(favBtn.dataset.fav);
    // 同じフレーズのボタンをまとめて更新する
    refreshFavButtons(favBtn.dataset.fav);
    if (currentPath() === '/favorites') resolve();
    return;
  }

  if (e.target.closest('[data-login]')) {
    signIn();
    return;
  }

  if (e.target.closest('[data-logout]')) {
    if (!confirm('ログアウトしますか。')) return;
    closeModal(settingsModal);
    signOut();
    return;
  }

  const presentBtn = e.target.closest('[data-present-en]');
  if (presentBtn) {
    presentEn.textContent = presentBtn.dataset.presentEn;
    presentJa.textContent = presentBtn.dataset.presentJa || '';
    openModal(presentModal);
    return;
  }

  if (e.target.closest('[data-close]')) {
    closeModal(e.target.closest('.modal'));
  }
});

/** ☆ / ★ の表示をお気に入りの状態に合わせる。en を渡すとそのフレーズだけ更新する */
function refreshFavButtons(en) {
  const sel = typeof en === 'string' ? `[data-fav="${CSS.escape(en)}"]` : '[data-fav]';
  document.querySelectorAll(sel).forEach((b) => {
    const on = favorites.has(b.dataset.fav);
    b.classList.toggle('is-on', on);
    if (b.classList.contains('tool-btn')) b.textContent = on ? '★' : '☆';
    // 文字ラベル付きのボタン（クイズの解説など）
    else if (b.dataset.favOn) b.textContent = on ? b.dataset.favOn : b.dataset.favOff;
  });
}

document.getElementById('present-speak').addEventListener('click', (e) => {
  speak(presentEn.textContent, { button: e.currentTarget });
});

function openModal(m) {
  m.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal(m) {
  if (!m) return;
  m.hidden = true;
  document.body.style.overflow = '';
  stopSpeaking();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal:not([hidden])').forEach(closeModal);
  }
});

/* ---------------- 設定 ---------------- */

const settingsModal = document.getElementById('settings-modal');
const rateRange = document.getElementById('rate-range');
const rateOut = document.getElementById('rate-out');
const voiceSelect = document.getElementById('voice-select');

rateRange.value = settings.get('rate') ?? 0.9;
rateOut.textContent = Number(rateRange.value).toFixed(2);

rateRange.addEventListener('input', () => {
  rateOut.textContent = Number(rateRange.value).toFixed(2);
  settings.set('rate', Number(rateRange.value));
});

const PREVIEW_TEXT = 'Hello, welcome to Naoru Seitai. Where does it hurt?';

function fillVoices() {
  loadVoices();
  const list = englishVoices();
  const saved = settings.get('voiceURI');

  if (!list.length) {
    voiceSelect.innerHTML = '<option value="">利用できる英語音声がありません</option>';
    return;
  }

  // englishVoices() は聞きやすい順に並んでいる
  voiceSelect.innerHTML = list
    .map((v) => {
      const label = `${isRecommended(v) ? '★おすすめ ' : ''}${v.name}（${v.lang}）`;
      return `<option value="${esc(v.voiceURI)}"${v.voiceURI === saved ? ' selected' : ''}>${esc(label)}</option>`;
    })
    .join('');

  // 未設定なら、最も自然に聞こえる音声を選んだ状態で表示する
  if (!saved) voiceSelect.value = list[0].voiceURI;
}

voiceSelect.addEventListener('change', () => {
  settings.set('voiceURI', voiceSelect.value);
  speak(PREVIEW_TEXT);
});

document.getElementById('voice-preview').addEventListener('click', (e) => {
  speak(PREVIEW_TEXT, { button: e.currentTarget });
});

function fillSupport() {
  const rows = [
    ['読み上げ', canSpeak],
    ['音声認識（発音判定）', canListen],
    ['学習記録の保存', (() => {
      try {
        localStorage.setItem('naoruenglish:probe', '1');
        localStorage.removeItem('naoruenglish:probe');
        return true;
      } catch {
        return false;
      }
    })()]
  ];
  document.getElementById('support-list').innerHTML = rows
    .map(([label, ok]) => `<li><span>${ok ? '✅' : '⚠️'}</span><span>${esc(label)}：${ok ? '利用できます' : '利用できません'}</span></li>`)
    .join('');
}

document.getElementById('settings-btn').addEventListener('click', () => {
  renderAccount();
  fillVoices();
  fillSupport();
  openModal(settingsModal);
});

document.getElementById('reset-progress').addEventListener('click', () => {
  if (!confirm('クイズ・発音・シナリオの記録をすべて消去します。よろしいですか。')) return;
  progress.reset();
  closeModal(settingsModal);
  resolve();
});

/* ---------------- 起動 ---------------- */

start();
syncTabs();
renderAccount();
initAuth();
