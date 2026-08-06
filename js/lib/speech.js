// Web Speech API のラッパー
// 読み上げ（SpeechSynthesis）と音声認識（SpeechRecognition）

import { settings } from './storage.js';

const synth = window.speechSynthesis;

export const canSpeak = !!synth;

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const canListen = !!SR;

/* ---------------- 音声の選定 ----------------
 * 端末に入っている音声は品質の差が非常に大きく、放っておくと
 * eSpeak 系の機械的な音声が選ばれてしまいます。
 * ここでは「自然に聞こえる女性の声」を優先して並べ替えます。
 */

// 英語圏の代表的な女性音声の名前
const FEMALE_NAMES = [
  // Apple（macOS / iOS）
  'samantha', 'ava', 'allison', 'susan', 'zoe', 'nicky', 'karen', 'moira',
  'tessa', 'fiona', 'serena', 'kate', 'vicki', 'victoria', 'agnes', 'princess',
  // Google（Chrome / Android）
  'google us english', 'google uk english female', 'google australian',
  // Microsoft（Windows）
  'zira', 'aria', 'jenny', 'michelle', 'hazel', 'eva', 'linda', 'catherine',
  'heera', 'ana', 'sara', 'nancy', 'amber', 'ashley', 'cora', 'elizabeth',
  'monica', 'jane', 'nova', 'emma', 'libby', 'sonia', 'natasha', 'clara',
  'aisha', 'yan', 'molly', 'olivia'
];

// 男性音声（避けたいもの）
const MALE_NAMES = [
  'alex', 'daniel', 'fred', 'tom', 'oliver', 'aaron', 'gordon', 'rishi',
  'lee', 'david', 'mark', 'george', 'james', 'ryan', 'guy', 'eric', 'liam',
  'christopher', 'brandon', 'jason', 'tony', 'davis', 'andrew', 'brian',
  'steffan', 'roger', 'william', 'thomas', 'arthur', 'reed', 'albert', 'junior'
];

/**
 * 音声名に指定の名前が含まれるか調べる。
 * 単語単位で照合する。部分一致にすると "English (America)" の中の
 * "eric"、"Canada" の中の "ana" のような誤判定が起きるため。
 */
function has(name, list) {
  const tokens = new Set(name.split(/[^a-z0-9]+/).filter(Boolean));
  return list.some((n) => (n.includes(' ') ? name.includes(n) : tokens.has(n)));
}

/** 音声の「聞きやすさ」を点数化する。高いほど自然で聞き取りやすい。 */
function scoreVoice(v) {
  const name = (v.name || '').toLowerCase();
  let s = 0;

  // 機械的に聞こえる音声を強く避ける
  if (/espeak|compact|eloquence|pico|festival|flite|mbrola/.test(name)) s -= 200;

  // 高品質を示すキーワード
  if (/natural|neural/.test(name)) s += 60;
  if (/premium|enhanced/.test(name)) s += 45;
  if (/\bsiri\b/.test(name)) s += 35;
  // Google の音声はネットワーク合成で、総じて最も自然に聞こえる
  if (/google/.test(name)) s += 40;
  if (/microsoft/.test(name)) s += 10;

  // 女性の声を優先する
  if (/female/.test(name) || has(name, FEMALE_NAMES)) s += 50;
  if (/\bmale\b/.test(name) || has(name, MALE_NAMES)) s -= 60;

  // 地域は米国英語を基本に、英・豪を次点とする
  if (v.lang === 'en-US') s += 20;
  else if (v.lang === 'en-GB' || v.lang === 'en-AU') s += 12;
  else if (/^en-(CA|IE|NZ)$/i.test(v.lang)) s += 6;

  // 端末が既定にしている音声はわずかに加点
  if (v.default) s += 3;

  return s;
}

let voices = [];

export function loadVoices() {
  if (!canSpeak) return [];
  voices = synth
    .getVoices()
    .filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'))
    .map((v) => ({ voice: v, score: scoreVoice(v) }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.voice);
  return voices;
}

/** 聞きやすい順に並んだ英語音声の一覧 */
export function englishVoices() {
  if (!voices.length) loadVoices();
  return voices;
}

/** その音声が「おすすめ」と呼べる品質かどうか */
export function isRecommended(v) {
  return scoreVoice(v) >= 70;
}

if (canSpeak) {
  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);
}

function pickVoice() {
  const list = englishVoices();
  if (!list.length) return null;

  const saved = settings.get('voiceURI');
  if (saved) {
    const found = list.find((v) => v.voiceURI === saved);
    if (found) return found;
  }
  // 並べ替え済みなので先頭が最も自然に聞こえる音声
  return list[0];
}

let currentBtn = null;

function clearBtn() {
  if (currentBtn) {
    currentBtn.classList.remove('is-speaking');
    currentBtn = null;
  }
}

/**
 * 英文を読み上げる。
 * @param {string} text 読み上げる英文
 * @param {{button?: HTMLElement, rate?: number, onend?: Function}} opts
 */
export function speak(text, opts = {}) {
  if (!canSpeak || !text) return;
  synth.cancel();
  clearBtn();

  const u = new SpeechSynthesisUtterance(text);
  const voice = pickVoice();
  u.lang = voice?.lang || 'en-US';
  try {
    if (voice) u.voice = voice;
  } catch {
    // 音声の割り当てに失敗しても、端末既定の声で読み上げは続ける
  }
  u.rate = opts.rate ?? settings.get('rate') ?? 0.9;
  u.pitch = 1;

  if (opts.button) {
    currentBtn = opts.button;
    opts.button.classList.add('is-speaking');
  }
  u.onend = () => {
    clearBtn();
    opts.onend?.();
  };
  u.onerror = () => {
    clearBtn();
    opts.onend?.();
  };

  synth.speak(u);
}

export function stopSpeaking() {
  if (canSpeak) synth.cancel();
  clearBtn();
}

/**
 * 一度だけ英語を聞き取る。
 * @returns {Promise<string>} 認識されたテキスト
 */
export function listenOnce({ onStart, onEnd } = {}) {
  return new Promise((resolve, reject) => {
    if (!canListen) {
      reject(new Error('unsupported'));
      return;
    }
    const rec = new SR();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    rec.continuous = false;

    let done = false;

    rec.onstart = () => onStart?.();
    rec.onresult = (e) => {
      done = true;
      const alts = Array.from(e.results[0]).map((a) => a.transcript);
      resolve(alts[0] || '');
    };
    rec.onerror = (e) => {
      done = true;
      reject(new Error(e.error || 'error'));
    };
    rec.onend = () => {
      onEnd?.();
      if (!done) resolve('');
    };

    try {
      rec.start();
    } catch (err) {
      reject(err);
    }
  });
}

/** 比較用に正規化する（記号と大文字小文字を無視） */
export function normalize(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * 手本と聞き取り結果を単語単位で比較する。
 * @returns {{score: number, words: {word: string, ok: boolean}[]}}
 */
export function compareSpeech(target, heard) {
  const t = normalize(target).split(' ').filter(Boolean);
  const h = new Set(normalize(heard).split(' ').filter(Boolean));
  if (!t.length) return { score: 0, words: [] };

  const words = t.map((w) => ({ word: w, ok: h.has(w) }));
  const hit = words.filter((w) => w.ok).length;
  return { score: Math.round((hit / t.length) * 100), words };
}
