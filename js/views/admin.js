// 管理者専用画面
// 管理者以外には存在自体を見せない（app.js で「ページが見つかりません」を表示する）。
// データは firestore.rules で管理者だけが読めるよう保護している。

import { watchAdminData, ONLINE_WINDOW_MS } from '../lib/auth.js';
import { esc, pageHead } from '../lib/ui.js';

function fmt(d) {
  if (!d) return '—';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}/${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function ago(d) {
  if (!d) return '—';
  const s = Math.max(0, Math.round((Date.now() - d.getTime()) / 1000));
  if (s < 60) return 'たった今';
  if (s < 3600) return `${Math.floor(s / 60)}分前`;
  if (s < 86400) return `${Math.floor(s / 3600)}時間前`;
  return `${Math.floor(s / 86400)}日前`;
}

function isOnline(u) {
  return u.online !== false && u.lastSeen && Date.now() - u.lastSeen.getTime() < ONLINE_WINDOW_MS;
}

export function render() {
  return `
    ${pageHead('🔒 管理画面', 'この画面は管理者のアカウントでログインしているときだけ表示されます。')}
    <div id="admin-body"><p class="empty">読み込み中…</p></div>
  `;
}

function body({ users, visits }) {
  const online = users.filter(isOnline);
  const now = Date.now();
  const active7 = users.filter((u) => u.lastSeen && now - u.lastSeen.getTime() < 7 * 86400000).length;

  return `
    <div class="stat-row">
      <div class="stat"><strong>${online.length}</strong><span>いまオンライン</span></div>
      <div class="stat"><strong>${active7}</strong><span>7日以内に利用</span></div>
      <div class="stat"><strong>${users.length}</strong><span>登録ユーザー</span></div>
    </div>

    <section>
      <h2 class="section-title">いま閲覧中のユーザー</h2>
      ${
        online.length
          ? `<div class="admin-table-wrap"><table class="admin-table">
              <thead><tr><th>Gmail</th><th>名前</th><th>見ているページ</th><th>端末</th><th>最終反応</th></tr></thead>
              <tbody>${online
                .map(
                  (u) => `<tr>
                    <td><span class="online-dot"></span>${esc(u.email)}</td>
                    <td>${esc(u.name || '')}</td>
                    <td><code>${esc(u.page || '/')}</code></td>
                    <td>${esc(u.device || '')}</td>
                    <td>${esc(ago(u.lastSeen))}</td>
                  </tr>`
                )
                .join('')}</tbody>
            </table></div>`
          : '<p class="muted">いまは誰も閲覧していません。</p>'
      }
    </section>

    <section>
      <h2 class="section-title">ログインしたことのあるユーザー（${users.length}人）</h2>
      <div class="admin-table-wrap"><table class="admin-table">
        <thead><tr><th>Gmail</th><th>名前</th><th>初回</th><th>最終アクセス</th><th>ログイン回数</th></tr></thead>
        <tbody>${users
          .map(
            (u) => `<tr>
              <td>${isOnline(u) ? '<span class="online-dot"></span>' : ''}${esc(u.email)}</td>
              <td>${esc(u.name || '')}</td>
              <td>${esc(fmt(u.firstSeen))}</td>
              <td>${esc(fmt(u.lastSeen))}<br><span class="muted">${esc(ago(u.lastSeen))}</span></td>
              <td style="text-align:right">${esc(u.visitCount ?? 0)}</td>
            </tr>`
          )
          .join('')}</tbody>
      </table></div>
    </section>

    <section>
      <h2 class="section-title">最近のログイン履歴（新しい順・最大200件）</h2>
      <div class="admin-table-wrap"><table class="admin-table">
        <thead><tr><th>日時</th><th>Gmail</th><th>端末</th><th>最初に開いたページ</th></tr></thead>
        <tbody>${visits
          .map(
            (v) => `<tr>
              <td>${esc(fmt(v.at))}</td>
              <td>${esc(v.email)}</td>
              <td>${esc(v.device || '')}</td>
              <td><code>${esc(v.page || '/')}</code></td>
            </tr>`
          )
          .join('')}</tbody>
      </table></div>
    </section>

    <p class="disclaimer">
      「いまオンライン」は、直近${Math.round(ONLINE_WINDOW_MS / 60000)}分以内にサイトを開いていた人です。
      ログインせずに閲覧している人は、この一覧には表示されません（ログインは任意のため）。
      見覚えのないアカウントが続けて使っている場合は、URLが共有されている可能性があります。
    </p>
  `;
}

/** @returns {() => void} 画面を離れるときの後片付け */
export function mount(root) {
  const el = root.querySelector('#admin-body');
  let latest = null;

  const stop = watchAdminData(
    (data) => {
      latest = data;
      el.innerHTML = body(data);
    },
    (e) => {
      console.error(e);
      el.innerHTML = `<p class="empty">データを読み込めませんでした。<br>firestore.rules の管理者アドレスが正しいか確認してください。</p>`;
    }
  );

  // 「〇分前」の表示とオンライン判定を定期的に更新する
  const timer = setInterval(() => {
    if (latest) el.innerHTML = body(latest);
  }, 30000);

  return () => {
    stop();
    clearInterval(timer);
  };
}
