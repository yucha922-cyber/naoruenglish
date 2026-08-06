// 画面づくりの共通部品

import { favorites } from './storage.js';

export function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * フレーズ1件分のカード。
 * @param {{en: string, ja: string, note?: string}} p
 * @param {{patient?: boolean, meta?: string}} opts
 */
export function phraseCard(p, opts = {}) {
  const fav = favorites.has(p.en);
  return `
    <div class="phrase${opts.patient ? ' is-patient' : ''}">
      <p class="phrase-en">${esc(p.en)}</p>
      <p class="phrase-ja">${esc(p.ja)}</p>
      ${p.note ? `<p class="phrase-note">${esc(p.note)}</p>` : ''}
      ${opts.meta ? `<p class="phrase-meta">${esc(opts.meta)}</p>` : ''}
      <div class="phrase-tools">
        <button class="tool-btn" data-speak="${esc(p.en)}" aria-label="読み上げる" title="読み上げる">🔊</button>
        <button class="tool-btn" data-present-en="${esc(p.en)}" data-present-ja="${esc(p.ja)}" aria-label="拡大して見せる" title="拡大して見せる">🔎</button>
        <button class="tool-btn${fav ? ' is-on' : ''}" data-fav="${esc(p.en)}" aria-label="お気に入り" title="お気に入り">${fav ? '★' : '☆'}</button>
      </div>
    </div>`;
}

export function phraseList(items, opts = {}) {
  if (!items.length) return `<p class="empty">該当するものがありません。</p>`;
  return `<div class="phrase-list">${items.map((p) => phraseCard(p, opts)).join('')}</div>`;
}

/**
 * 単語1件分の行。単語集・筋肉一覧・症状ページの関連筋肉で共通に使う。
 * @param {{en: string, ja?: string, kana?: string, note?: string}} w
 * @param {{tag?: string}} opts tag は略称バッジ（例：Upper traps）
 */
export function wordRow(w, opts = {}) {
  const fav = favorites.has(w.en);
  return `
    <div class="word-row">
      <span class="word-en">${esc(w.en)}${opts.tag ? ` <span class="tag">${esc(opts.tag)}</span>` : ''}</span>
      <span class="word-ja">${esc(w.ja || '')}${w.kana ? ` <span class="word-kana">${esc(w.kana)}</span>` : ''}</span>
      <div class="word-tools">
        <button class="tool-btn" data-speak="${esc(w.en)}" aria-label="読み上げる" title="読み上げる">🔊</button>
        <button class="tool-btn${fav ? ' is-on' : ''}" data-fav="${esc(w.en)}" aria-label="お気に入り" title="お気に入り">${fav ? '★' : '☆'}</button>
      </div>
      ${w.note ? `<span class="word-note">${esc(w.note)}</span>` : ''}
    </div>`;
}

export function wordList(items, mapper = (x) => [x, {}]) {
  if (!items.length) return `<p class="empty">該当するものがありません。</p>`;
  return `<div class="word-list">${items.map((x) => wordRow(...mapper(x))).join('')}</div>`;
}

export function pageHead(title, desc, backHref) {
  return `
    ${backHref ? `<a class="back-link" href="${esc(backHref)}">← 戻る</a>` : ''}
    <div class="page-head">
      <h1>${esc(title)}</h1>
      ${desc ? `<p>${esc(desc)}</p>` : ''}
    </div>`;
}

export function callout(kind, title, items) {
  const list = Array.isArray(items)
    ? `<ul>${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>`
    : `<p style="margin:0">${esc(items)}</p>`;
  return `<div class="callout ${kind}"><h3>${esc(title)}</h3>${list}</div>`;
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
