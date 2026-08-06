import { route, start, resolve, setNotFound, currentPath } from './lib/router.js';
import { favorites, progress, settings } from './lib/storage.js';
import { speak, stopSpeaking, canSpeak, canListen, englishVoices, loadVoices } from './lib/speech.js';
import { esc } from './lib/ui.js';

import * as home from './views/home.js';
import * as flow from './views/flow.js';
import * as symptomsView from './views/symptoms.js';
import * as words from './views/words.js';
import * as learn from './views/learn.js';
import * as simulation from './views/simulation.js';
import * as searchView from './views/search.js';

const app = document.getElementById('app');
const searchInput = document.getElementById('search-input');

/* ---------------- 描画 ---------------- */

function show(html, mount) {
  stopSpeaking();
  app.innerHTML = html;
  window.scrollTo(0, 0);
  mount?.(app);
}

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
  show(learn.renderQuiz(mode), (root) => learn.mountQuiz(root, mode));
});
route(/^\/learn\/pronunciation$/, (_, q) => {
  const src = q.get('from') || 'phrase';
  show(learn.renderPronunciation(src), (root) => learn.mountPronunciation(root, src));
});
route(/^\/learn\/simulation$/, () => show(simulation.renderIndex()));
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

setNotFound(notFoundPage);

/* ---------------- タブの選択状態 ---------------- */

const TAB_MATCH = [
  ['flow', /^\/flow/],
  ['symptoms', /^\/symptoms/],
  ['words', /^\/(words|muscles)/],
  ['learn', /^\/learn/],
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

  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) {
    const on = favorites.toggle(favBtn.dataset.fav);
    // 同じフレーズのボタンをまとめて更新する
    document.querySelectorAll(`[data-fav="${CSS.escape(favBtn.dataset.fav)}"]`).forEach((b) => {
      b.classList.toggle('is-on', on);
      if (b.classList.contains('tool-btn')) b.textContent = on ? '★' : '☆';
    });
    if (currentPath() === '/favorites') resolve();
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

function fillVoices() {
  loadVoices();
  const list = englishVoices();
  const saved = settings.get('voiceURI');
  voiceSelect.innerHTML = list.length
    ? list
        .map(
          (v) =>
            `<option value="${esc(v.voiceURI)}"${v.voiceURI === saved ? ' selected' : ''}>${esc(v.name)}（${esc(v.lang)}）</option>`
        )
        .join('')
    : '<option value="">利用できる英語音声がありません</option>';
}

voiceSelect.addEventListener('change', () => {
  settings.set('voiceURI', voiceSelect.value);
  speak('Hello. This is how I sound.');
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
