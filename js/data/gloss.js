// 英文に含まれる重要語を、単語集と筋肉データから拾って意味を付ける。
// クイズの解説で「この文に出てくる語」を出すために使う。

import { vocabulary } from './vocabulary.js';
import { muscles } from './muscles.js';

// 現場での価値が高いカテゴリを先に出す。
// 数字が小さいほど優先度が高い。
const CATEGORY_RANK = {
  safety: 1,
  muscle: 2,
  'pain-words': 3,
  'body-parts': 4,
  treatment: 5,
  movement: 6,
  reception: 7,
  'small-talk': 8,
  'time-frequency': 9
};

// 説明するまでもない語。出しても学習の助けにならない。
const TRIVIAL = new Set(['today', 'yesterday', 'tomorrow', 'sometimes', 'every day', 'all the time']);

let index = null;

function buildIndex() {
  const entries = [];

  for (const category of vocabulary) {
    for (const w of category.words) {
      // 「Raise / Lift」のように複数の言い方が入っている項目に対応する
      for (const alt of w.en.split(' / ')) {
        const label = alt.trim();
        const key = label.toLowerCase();
        if (!key || TRIVIAL.has(key)) continue;
        // 表示は一致した言い方だけにする（"to book / to make an appointment" を丸ごと出さない）
        entries.push({ key, en: label, ja: w.ja, rank: CATEGORY_RANK[category.id] ?? 99 });
      }
    }
  }

  for (const m of muscles) {
    entries.push({
      key: m.en.toLowerCase(),
      en: m.en,
      ja: `${m.ja}（${m.kana}）`,
      rank: CATEGORY_RANK.muscle
    });
  }

  // 長い語句から先に照合したほうが、意味のまとまりで拾える
  entries.sort((a, b) => b.key.length - a.key.length);
  return entries;
}

function tokenize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[^a-z0-9'\s-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * 英文に含まれる登録済みの語を、価値の高い順に返す。
 * @param {string} sentence 対象の英文
 * @param {string} exclude 除外する語（答えそのものなど）
 * @param {number} limit 返す最大件数
 */
export function glossFor(sentence, exclude = '', limit = 4) {
  if (!sentence) return [];
  if (!index) index = buildIndex();

  const lower = sentence.toLowerCase();
  const tokens = new Set(tokenize(sentence));
  const skip = exclude.toLowerCase().trim();

  const hits = [];
  const seen = new Set();
  const acceptedKeys = [];

  // index は長い語句から順に並んでいる
  for (const e of index) {
    if (e.key === skip || seen.has(e.en)) continue;

    // 長い語句がすでに採用されていれば、その一部の語は出さない
    // （to make an appointment を出したうえで appointment も出す、を防ぐ）
    if (acceptedKeys.some((k) => k.includes(e.key))) continue;

    const matched = e.key.includes(' ')
      ? lower.includes(e.key)
      : // 複数形も拾えるようにする
        tokens.has(e.key) || tokens.has(e.key + 's') || tokens.has(e.key + 'es');

    if (matched) {
      seen.add(e.en);
      acceptedKeys.push(e.key);
      hits.push(e);
    }
  }

  return hits
    .sort((a, b) => a.rank - b.rank || b.key.length - a.key.length)
    .slice(0, limit)
    .map(({ en, ja }) => ({ en, ja }));
}
