import { vocabulary } from '../data/vocabulary.js';
import { muscles, muscleRegions, muscleTalk } from '../data/muscles.js';
import { esc, wordRow, pageHead, phraseList } from '../lib/ui.js';

export function renderVocabIndex() {
  return `
    ${pageHead('単語集', '現場で使う言葉をカテゴリ別に。読み上げボタンで発音を確認できます。')}

    <div class="card-grid two">
      ${vocabulary
        .map(
          (c) => `
        <a class="nav-card" href="#/words/${c.id}">
          <span class="nav-icon">${c.icon}</span>
          <span class="nav-body">
            <strong>${esc(c.title)}</strong>
            <span>${c.words.length}語</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>`
        )
        .join('')}
      <a class="nav-card" href="#/muscles">
        <span class="nav-icon">💪</span>
        <span class="nav-body">
          <strong>筋肉の英語名</strong>
          <span>主要${muscles.length}筋</span>
        </span>
        <span class="nav-arrow">›</span>
      </a>
    </div>
  `;
}

export function renderVocabCategory(id) {
  const c = vocabulary.find((x) => x.id === id);
  if (!c) return null;

  return `
    ${pageHead(`${c.icon} ${c.title}`, c.description, '#/words')}
    <div class="word-list">${c.words.map(wordRow).join('')}</div>
  `;
}

export function renderMuscles(region = 'all') {
  const list = region === 'all' ? muscles : muscles.filter((m) => m.region === region);

  const rows = list
    .map(
      (m) => `
    <div class="word-row">
      <span class="word-en">${esc(m.en)}${m.abbr ? ` <span class="tag">${esc(m.abbr)}</span>` : ''}</span>
      <button class="tool-btn" data-speak="${esc(m.en)}" aria-label="読み上げる">🔊</button>
      <span class="word-ja">${esc(m.ja)} <span class="word-kana">${esc(m.kana)}</span></span>
      <span class="word-note">作用：${esc(m.action)}${m.note ? `／${esc(m.note)}` : ''}</span>
    </div>`
    )
    .join('');

  return `
    ${pageHead('💪 筋肉の英語名', '部位で絞り込めます。カタカナは発音の目安です。', '#/words')}

    <div class="chip-row">
      <a class="chip${region === 'all' ? ' is-active' : ''}" href="#/muscles">すべて</a>
      ${muscleRegions
        .map(
          (r) =>
            `<a class="chip${region === r.id ? ' is-active' : ''}" href="#/muscles?region=${r.id}">${esc(r.name)}</a>`
        )
        .join('')}
    </div>

    <div class="word-list">${rows || '<p class="empty">該当する筋肉がありません。</p>'}</div>

    <section>
      <h2 class="section-title">施術中に使える説明フレーズ</h2>
      ${phraseList(muscleTalk)}
    </section>
  `;
}
