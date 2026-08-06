// Web Speech API のラッパー
// 読み上げ（SpeechSynthesis）と音声認識（SpeechRecognition）

import { settings } from './storage.js';

const synth = window.speechSynthesis;

export const canSpeak = !!synth;

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const canListen = !!SR;

let voices = [];

export function loadVoices() {
  if (!canSpeak) return [];
  voices = synth.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
  return voices;
}

export function englishVoices() {
  if (!voices.length) loadVoices();
  return voices;
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
  // 端末標準の米国英語を優先
  return (
    list.find((v) => v.lang === 'en-US' && v.localService) ||
    list.find((v) => v.lang === 'en-US') ||
    list[0]
  );
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
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = 'en-US';
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
