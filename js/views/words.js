import { vocabulary } from '../data/vocabulary.js';
import { muscles, muscleRegions, muscleTalk } from '../data/muscles.js';
import { esc, wordRow, wordList, pageHead, phraseList } from '../lib/ui.js';

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
    <div class="word-list">${c.words.map((w) => wordRow(w)).join('')}</div>
  `;
}

export function renderMuscles(region = 'all') {
  const list = region === 'all' ? muscles : muscles.filter((m) => m.region === region);

  const rows = wordList(list, (m) => [
    { en: m.en, ja: m.ja, kana: m.kana, note: `作用：${m.action}${m.note ? `／${m.note}` : ''}` },
    { tag: m.abbr }
  ]);

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

    ${rows}

    <section>
      <h2 class="section-title">施術中に使える説明フレーズ</h2>
      ${phraseList(muscleTalk)}
    </section>
  `;
}
