import { allPhrases } from '../data/phrases.js';
import { allSymptomPhrases } from '../data/symptoms.js';
import { allPhonePhrases } from '../data/phone.js';
import { allMeetingPhrases, meetingScript } from '../data/meeting.js';
import { allWords } from '../data/vocabulary.js';
import { muscles, muscleTalk } from '../data/muscles.js';
import { favorites } from '../lib/storage.js';
import { isAdmin } from '../lib/auth.js';
import { esc, phraseList, pageHead } from '../lib/ui.js';

/** 検索対象をひとつの配列にまとめる */
function corpus() {
  const items = [];

  for (const p of allPhrases()) {
    items.push({ en: p.en, ja: p.ja, note: p.note, alts: p.alts, meta: `施術の流れ ／ ${p.source} ／ ${p.group}`, patient: p.kind === 'patient' });
  }
  for (const p of allSymptomPhrases()) {
    items.push({ en: p.en, ja: p.ja, note: p.note, meta: `症状別 ／ ${p.source} ／ ${p.group}`, patient: p.kind === 'patient' });
  }
  for (const p of allPhonePhrases()) {
    items.push({ en: p.en, ja: p.ja, note: p.note, meta: `お電話対応 ／ ${p.source} ／ ${p.group}`, patient: p.kind === 'caller' });
  }
  // オンライン英会話は管理者専用なので、管理者以外の検索・お気に入りには出さない
  if (isAdmin()) {
    for (const p of allMeetingPhrases()) {
      items.push({ en: p.en, ja: p.ja, note: p.note, alts: p.alts, meta: `オンライン英会話 ／ ${p.source} ／ ${p.group}`, patient: p.kind === 'partner' });
    }
    for (const l of meetingScript) {
      items.push({ en: l.en, ja: l.ja, meta: `オンライン英会話 ／ 通しの台本 ／ ${l.step}`, patient: l.who === 'B' });
    }
  }
  for (const w of allWords()) {
    items.push({ en: w.en, ja: w.ja, note: w.note, meta: `単語集 ／ ${w.source}` });
  }
  for (const m of muscles) {
    items.push({
      en: m.en,
      ja: `${m.ja}（${m.kana}）`,
      note: `作用：${m.action}${m.note ? `／${m.note}` : ''}`,
      meta: '筋肉の英語名'
    });
  }
  for (const p of muscleTalk) {
    items.push({ en: p.en, ja: p.ja, note: p.note, meta: '筋肉の説明フレーズ' });
  }

  return items;
}

// ログイン状態で中身が変わるため、管理者かどうかごとに作り直す
let cached = null;
let cachedForAdmin = null;
function getCorpus() {
  const admin = isAdmin();
  if (!cached || cachedForAdmin !== admin) {
    cached = corpus();
    cachedForAdmin = admin;
  }
  return cached;
}

export function search(q) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return getCorpus().filter(
    (it) =>
      it.en.toLowerCase().includes(needle) ||
      (it.ja || '').toLowerCase().includes(needle) ||
      (it.note || '').toLowerCase().includes(needle) ||
      (it.alts || []).some((a) => a.toLowerCase().includes(needle))
  );
}

export function renderResults(q) {
  const hits = search(q);

  if (!q.trim()) {
    return `
      ${pageHead('検索', '日本語でも英語でも検索できます。')}
      <p class="empty">上の検索窓にキーワードを入力してください。<br>例：「痛み」「肩」「pressure」「stretch」</p>`;
  }

  return `
    ${pageHead('検索結果', `「${q}」に一致：${hits.length}件`)}
    ${hits
      .slice(0, 200)
      .map((it) => phraseList([it], { patient: it.patient, meta: it.meta }))
      .join('')}
    ${hits.length > 200 ? '<p class="muted" style="text-align:center;margin-top:14px">上位200件を表示しています。</p>' : ''}
  `;
}

export function renderFavorites() {
  const saved = new Set(favorites.list());
  // 同じ英文が複数の場所に載っている場合は1件にまとめる
  const seen = new Set();
  const items = getCorpus().filter((it) => saved.has(it.en) && !seen.has(it.en) && seen.add(it.en));

  if (!items.length) {
    return `
      ${pageHead('★ お気に入り', '')}
      <p class="empty">まだお気に入りはありません。<br>各フレーズの ☆ を押すと、ここに集まります。</p>`;
  }

  return `
    ${pageHead('★ お気に入り', `${items.length}件を保存しています。`)}
    ${items.map((it) => phraseList([it], { patient: it.patient, meta: it.meta })).join('')}
  `;
}
