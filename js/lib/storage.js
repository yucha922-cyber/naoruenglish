// localStorage のラッパー。お気に入り・学習記録・設定を保存する。

import { renamed } from '../data/renamed.js';

const PREFIX = 'naoruenglish:';

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* プライベートモードなどでは保存を諦める */
  }
}

/* ---------- お気に入り ---------- */

// お気に入りは英文そのものをキーに保存している。
// フレーズの英文を言い換えたときは renamed.js に「旧 → 新」を登録しておけば、
// 端末内・クラウドどちらの保存分も自動で新しい英文に付け替わり、お気に入りが消えない。
export function migrateFavorites(list) {
  const out = new Set();
  for (const en of list || []) {
    if (typeof en !== 'string' || !en) continue;
    let cur = en;
    // 何度か言い換えた場合に備えて、たどれるところまでたどる（循環は打ち切る）
    for (let i = 0; i < 5 && renamed[cur]; i++) cur = renamed[cur];
    out.add(cur);
  }
  return [...out];
}

let favSet = new Set(migrateFavorites(read('favorites', [])));
write('favorites', [...favSet]);

const favListeners = new Set();
function emitFav() {
  favListeners.forEach((fn) => {
    try {
      fn([...favSet]);
    } catch {
      /* noop */
    }
  });
}

export const favorites = {
  has: (en) => favSet.has(en),
  toggle(en) {
    if (favSet.has(en)) favSet.delete(en);
    else favSet.add(en);
    write('favorites', [...favSet]);
    emitFav();
    return favSet.has(en);
  },
  list: () => [...favSet],
  get size() {
    return favSet.size;
  },
  /** クラウド同期などで丸ごと置き換える。変更通知は出さない（同期のループを防ぐ） */
  replaceAll(list) {
    favSet = new Set(migrateFavorites(list));
    write('favorites', [...favSet]);
  },
  /** お気に入りが変わったときに呼ばれる関数を登録する */
  onChange(fn) {
    favListeners.add(fn);
    return () => favListeners.delete(fn);
  },
  clear() {
    favSet = new Set();
    write('favorites', []);
    emitFav();
  }
};

/** 任意のキーの読み書き（ログイン同期の記録などに使う） */
export const local = { read, write };

/* ---------- 学習記録 ---------- */

export const progress = {
  /** クイズ1問分の結果を記録する */
  recordQuiz(correct) {
    const s = read('quiz', { total: 0, correct: 0 });
    s.total += 1;
    if (correct) s.correct += 1;
    write('quiz', s);
    this.touchToday();
  },
  quizStats: () => read('quiz', { total: 0, correct: 0 }),

  /** シナリオの完了を記録する */
  completeScenario(id, score) {
    const s = read('scenarios', {});
    const prev = s[id];
    if (!prev || score > prev) s[id] = score;
    write('scenarios', s);
    this.touchToday();
  },
  scenarioScores: () => read('scenarios', {}),

  /** 発音練習の記録 */
  recordPronunciation(score) {
    const s = read('pron', { count: 0, best: 0, sum: 0 });
    s.count += 1;
    s.sum += score;
    if (score > s.best) s.best = score;
    write('pron', s);
    this.touchToday();
  },
  pronStats: () => read('pron', { count: 0, best: 0, sum: 0 }),

  /** 学習した日を記録して連続日数を数える */
  touchToday() {
    const today = new Date().toISOString().slice(0, 10);
    const days = read('days', []);
    if (!days.includes(today)) {
      days.push(today);
      write('days', days.slice(-400));
    }
  },
  streak() {
    const days = new Set(read('days', []));
    let n = 0;
    const d = new Date();
    // 今日がまだなら昨日から数え始める
    if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (days.has(d.toISOString().slice(0, 10))) {
      n += 1;
      d.setDate(d.getDate() - 1);
    }
    return n;
  },

  reset() {
    ['quiz', 'scenarios', 'pron', 'days'].forEach((k) => {
      try {
        localStorage.removeItem(PREFIX + k);
      } catch {
        /* noop */
      }
    });
  }
};

/* ---------- 設定 ---------- */

export const settings = {
  get(key) {
    const s = read('settings', {});
    return s[key];
  },
  set(key, value) {
    const s = read('settings', {});
    s[key] = value;
    write('settings', s);
  }
};
