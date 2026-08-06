import { allPhrases } from '../data/phrases.js';
import { allSymptomPhrases } from '../data/symptoms.js';
import { allWords } from '../data/vocabulary.js';
import { muscles } from '../data/muscles.js';
import { scenarios } from '../data/scenarios.js';
import { progress, favorites } from '../lib/storage.js';
import { speak, canListen, listenOnce, compareSpeech, stopSpeaking } from '../lib/speech.js';
import { esc, pageHead, shuffle, sample, callout } from '../lib/ui.js';

/* ============================ 学習ハブ ============================ */

export function renderHub() {
  const quiz = progress.quizStats();
  const pron = progress.pronStats();
  const scores = progress.scenarioScores();
  const done = Object.keys(scores).length;

  return `
    ${pageHead('🎓 学習する', '現場で口から出てくるまで、繰り返し練習しましょう。')}

    <div class="card-grid">
      <a class="nav-card" href="#/learn/quiz">
        <span class="nav-icon">✏️</span>
        <span class="nav-body">
          <strong>クイズ</strong>
          <span>4択でフレーズ・単語・筋肉名を覚える</span>
        </span>
        <span class="nav-arrow">›</span>
      </a>
      <a class="nav-card" href="#/learn/pronunciation">
        <span class="nav-icon">🎤</span>
        <span class="nav-body">
          <strong>発音練習</strong>
          <span>声に出して、聞き取れるか確かめる</span>
        </span>
        <span class="nav-arrow">›</span>
      </a>
      <a class="nav-card" href="#/learn/simulation">
        <span class="nav-icon">💬</span>
        <span class="nav-body">
          <strong>会話シミュレーション</strong>
          <span>患者様との会話を最後まで練習する</span>
        </span>
        <span class="nav-arrow">›</span>
      </a>
    </div>

    <section>
      <h2 class="section-title">これまでの記録</h2>
      <div class="stat-row">
        <div class="stat"><strong>${quiz.total}</strong><span>クイズ問題数</span></div>
        <div class="stat"><strong>${quiz.total ? Math.round((quiz.correct / quiz.total) * 100) : 0}%</strong><span>正答率</span></div>
        <div class="stat"><strong>${pron.count}</strong><span>発音練習回数</span></div>
        <div class="stat"><strong>${done}/${scenarios.length}</strong><span>シナリオ達成</span></div>
      </div>
    </section>

    ${callout('tips', '💡 続けるコツ', [
      '1日5分で十分です。連続日数が伸びるほど、口が英語に慣れていきます。',
      'クイズで間違えたフレーズは ☆ を付けて、お気に入りから発音練習しましょう。',
      '会話シミュレーションは、正解を選ぶだけでなく声に出して読むと効果が倍増します。'
    ])}
  `;
}

/* ============================ クイズ ============================ */

const QUIZ_MODES = {
  all: 'すべて',
  phrase: 'フレーズ',
  word: '単語',
  muscle: '筋肉名'
};

const QUIZ_LENGTH = 10;

function phrasePool() {
  return [...allPhrases(), ...allSymptomPhrases()].filter((p) => p.en && p.ja);
}

function buildPhraseQuestion(pool) {
  const target = pool[Math.floor(Math.random() * pool.length)];
  const others = sample(
    pool.filter((p) => p.en !== target.en),
    3
  );
  return {
    prompt: target.ja,
    sub: '日本語に合う英語はどれですか',
    answer: target.en,
    speakOnReveal: target.en,
    choices: shuffle([target, ...others]).map((p) => ({ label: p.en, value: p.en }))
  };
}

function buildWordQuestion(pool) {
  const target = pool[Math.floor(Math.random() * pool.length)];
  const others = sample(
    pool.filter((w) => w.en !== target.en && w.ja !== target.ja),
    3
  );
  const jaFirst = Math.random() < 0.5;

  if (jaFirst) {
    return {
      prompt: target.ja,
      sub: '日本語に合う英語はどれですか',
      answer: target.en,
      speakOnReveal: target.en,
      choices: shuffle([target, ...others]).map((w) => ({ label: w.en, value: w.en }))
    };
  }
  return {
    prompt: target.en,
    sub: '英語の意味はどれですか',
    answer: target.ja,
    speakOnReveal: target.en,
    choices: shuffle([target, ...others]).map((w) => ({ label: w.ja, value: w.ja }))
  };
}

function buildMuscleQuestion() {
  const target = muscles[Math.floor(Math.random() * muscles.length)];
  const others = sample(
    muscles.filter((m) => m.en !== target.en && m.ja !== target.ja),
    3
  );
  const jaFirst = Math.random() < 0.5;

  if (jaFirst) {
    return {
      prompt: target.ja,
      sub: 'この筋肉の英語名はどれですか',
      answer: target.en,
      speakOnReveal: target.en,
      extra: `作用：${target.action}`,
      choices: shuffle([target, ...others]).map((m) => ({ label: m.en, value: m.en }))
    };
  }
  return {
    prompt: target.en,
    sub: 'この筋肉の日本語名はどれですか',
    answer: target.ja,
    speakOnReveal: target.en,
    extra: `カタカナ：${target.kana}`,
    choices: shuffle([target, ...others]).map((m) => ({ label: m.ja, value: m.ja }))
  };
}

function buildQuiz(mode) {
  const phrases = phrasePool();
  const words = allWords();
  const questions = [];

  for (let i = 0; i < QUIZ_LENGTH; i++) {
    let kind = mode;
    if (mode === 'all') kind = ['phrase', 'word', 'muscle'][i % 3];

    if (kind === 'phrase') questions.push(buildPhraseQuestion(phrases));
    else if (kind === 'word') questions.push(buildWordQuestion(words));
    else questions.push(buildMuscleQuestion());
  }
  return shuffle(questions);
}

export function renderQuiz(mode = 'all') {
  return `
    ${pageHead('✏️ クイズ', `全${QUIZ_LENGTH}問。${QUIZ_MODES[mode] || 'すべて'}から出題します。`, '#/learn')}
    <div class="chip-row">
      ${Object.entries(QUIZ_MODES)
        .map(
          ([k, label]) =>
            `<a class="chip${k === mode ? ' is-active' : ''}" href="#/learn/quiz?mode=${k}">${esc(label)}</a>`
        )
        .join('')}
    </div>
    <div id="quiz-root"></div>
  `;
}

export function mountQuiz(root, mode = 'all') {
  const host = root.querySelector('#quiz-root');
  if (!host) return;

  let questions = buildQuiz(mode);
  let index = 0;
  let correctCount = 0;

  function drawQuestion() {
    const q = questions[index];
    host.innerHTML = `
      <div class="quiz-progress">
        <span>${index + 1} / ${questions.length}</span>
        <span class="progress-track"><span class="progress-fill" style="width:${(index / questions.length) * 100}%"></span></span>
        <span>正解 ${correctCount}</span>
      </div>
      <div class="card">
        <p class="quiz-question">${esc(q.prompt)}</p>
        <p class="quiz-sub">${esc(q.sub)}${q.extra ? `　/　${esc(q.extra)}` : ''}</p>
        <div class="choice-list">
          ${q.choices
            .map(
              (c, i) => `
            <button class="choice" data-value="${esc(c.value)}">
              <span class="choice-key">${'ABCD'[i]}</span>
              <span>${esc(c.label)}</span>
            </button>`
            )
            .join('')}
        </div>
        <div id="quiz-feedback"></div>
      </div>`;

    host.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => answer(btn, q));
    });
  }

  function answer(btn, q) {
    const chosen = btn.dataset.value;
    const ok = chosen === q.answer;
    if (ok) correctCount += 1;
    progress.recordQuiz(ok);

    host.querySelectorAll('.choice').forEach((b) => {
      b.disabled = true;
      if (b.dataset.value === q.answer) b.classList.add('is-correct');
      else if (b === btn) b.classList.add('is-wrong');
    });

    if (q.speakOnReveal) speak(q.speakOnReveal);

    const isLast = index === questions.length - 1;
    host.querySelector('#quiz-feedback').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'ng'}">
        <strong>${ok ? '正解です' : '惜しい'}</strong>
        正解：${esc(q.answer)}
      </div>
      <div class="btn-row" style="margin-top:14px">
        <button class="btn" data-replay>🔊 もう一度聞く</button>
        <button class="btn btn-primary" data-next>${isLast ? '結果を見る' : '次の問題 →'}</button>
        <button class="btn" data-fav="${esc(q.speakOnReveal || q.answer)}">☆ 復習リストに追加</button>
      </div>`;

    host.querySelector('#quiz-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    host.querySelector('[data-replay]').addEventListener('click', () => speak(q.speakOnReveal || q.answer));
    host.querySelector('[data-next]').addEventListener('click', () => {
      index += 1;
      if (index >= questions.length) drawResult();
      else drawQuestion();
    });
  }

  function drawResult() {
    const pct = Math.round((correctCount / questions.length) * 100);
    const message =
      pct === 100 ? '完璧です。現場でもこの調子で。' :
      pct >= 70 ? 'よくできています。間違えた分だけ復習しましょう。' :
      pct >= 40 ? '半分は身についています。もう1セット行きましょう。' :
      'まずはフレーズ集を眺めるところから。焦らなくて大丈夫です。';

    host.innerHTML = `
      <div class="card" style="text-align:center">
        <p class="muted" style="margin:0">今回の結果</p>
        <p class="score-big">${correctCount} / ${questions.length}</p>
        <p style="margin:4px 0 18px">${esc(message)}</p>
        <div class="btn-row" style="justify-content:center">
          <button class="btn btn-primary" data-again>もう一度</button>
          <a class="btn" href="#/learn">学習メニューへ</a>
        </div>
      </div>`;

    host.querySelector('[data-again]').addEventListener('click', () => {
      questions = buildQuiz(mode);
      index = 0;
      correctCount = 0;
      drawQuestion();
    });
  }

  drawQuestion();
}

/* ============================ 発音練習 ============================ */

function pronPool(source) {
  if (source === 'favorites') {
    const saved = new Set(favorites.list());
    const all = [...allPhrases(), ...allSymptomPhrases(), ...allWords(), ...muscles];
    return all.filter((x) => saved.has(x.en)).map((x) => ({ en: x.en, ja: x.ja }));
  }
  if (source === 'muscle') return muscles.map((m) => ({ en: m.en, ja: `${m.ja}（${m.kana}）` }));
  if (source === 'word') return allWords().map((w) => ({ en: w.en, ja: w.ja }));
  return [...allPhrases(), ...allSymptomPhrases()]
    .filter((p) => p.kind === 'therapist')
    .map((p) => ({ en: p.en, ja: p.ja }));
}

const PRON_SOURCES = {
  phrase: 'フレーズ',
  word: '単語',
  muscle: '筋肉名',
  favorites: 'お気に入り'
};

export function renderPronunciation(source = 'phrase') {
  return `
    ${pageHead('🎤 発音練習', '手本を聞いて、同じように声に出してみましょう。', '#/learn')}
    <div class="chip-row">
      ${Object.entries(PRON_SOURCES)
        .map(
          ([k, label]) =>
            `<a class="chip${k === source ? ' is-active' : ''}" href="#/learn/pronunciation?from=${k}">${esc(label)}</a>`
        )
        .join('')}
    </div>
    <div id="pron-root"></div>
  `;
}

export function mountPronunciation(root, source = 'phrase') {
  const host = root.querySelector('#pron-root');
  if (!host) return;

  const pool = pronPool(source);
  if (!pool.length) {
    host.innerHTML = `<p class="empty">この分類にはまだ項目がありません。<br>フレーズに ☆ を付けると、お気に入りから練習できます。</p>`;
    return;
  }

  let current = pool[Math.floor(Math.random() * pool.length)];
  let listening = false;

  function draw(resultHtml = '') {
    host.innerHTML = `
      <div class="card">
        <p class="pron-target">${esc(current.en)}</p>
        <p class="pron-ja">${esc(current.ja)}</p>

        <div class="btn-row" style="justify-content:center;margin-bottom:22px">
          <button class="btn" data-listen-model>🔊 手本を聞く</button>
          <button class="btn" data-slow>🐢 ゆっくり聞く</button>
        </div>

        ${
          canListen
            ? `<button class="mic-btn${listening ? ' is-listening' : ''}" data-mic aria-label="録音して判定">${listening ? '■' : '🎤'}</button>
               <p class="muted" style="text-align:center;margin-top:10px">${listening ? '聞き取り中です。話してください…' : 'ボタンを押して、声に出してみましょう'}</p>`
            : `<div class="callout warn"><h3>この端末では音声認識が使えません</h3>
               <p style="margin:0">音声認識は Google Chrome か Safari でご利用いただけます。手本を聞いて口に出す練習はこのままできます。</p></div>`
        }

        <div id="pron-result">${resultHtml}</div>

        <div class="btn-row" style="justify-content:center;margin-top:22px">
          <button class="btn btn-primary" data-next>次のお題 →</button>
        </div>
      </div>`;

    host.querySelector('[data-listen-model]').addEventListener('click', () => speak(current.en));
    host.querySelector('[data-slow]').addEventListener('click', () => speak(current.en, { rate: 0.6 }));
    host.querySelector('[data-next]').addEventListener('click', () => {
      stopSpeaking();
      current = pool[Math.floor(Math.random() * pool.length)];
      draw();
    });

    const mic = host.querySelector('[data-mic]');
    if (mic) mic.addEventListener('click', record);
  }

  async function record() {
    if (listening) return;
    stopSpeaking();
    listening = true;
    draw();

    try {
      const heard = await listenOnce();
      listening = false;

      if (!heard) {
        draw(`<div class="feedback ng"><strong>聞き取れませんでした</strong>もう一度、少し大きめの声でお願いします。</div>`);
        return;
      }

      const { score, words } = compareSpeech(current.en, heard);
      progress.recordPronunciation(score);

      const marked = words
        .map((w) => `<span class="${w.ok ? 'word-ok' : 'word-ng'}">${esc(w.word)}</span>`)
        .join(' ');

      const comment =
        score >= 90 ? 'すばらしい発音です。' :
        score >= 70 ? 'よく伝わります。赤い単語をもう一度確認しましょう。' :
        score >= 40 ? '半分伝わっています。ゆっくり区切って練習してみましょう。' :
        '手本をもう一度聞いて、まねをするところから始めましょう。';

      draw(`
        <div class="score-ring">${score}<span style="font-size:16px">点</span></div>
        <p class="heard">認識された内容：<span class="heard-text">${esc(heard)}</span></p>
        <p class="heard" style="margin-top:8px">${marked}</p>
        <p class="muted" style="text-align:center;margin-top:10px">${esc(comment)}</p>
      `);
    } catch (err) {
      listening = false;
      const msg =
        err.message === 'not-allowed'
          ? 'マイクの使用が許可されていません。ブラウザの設定をご確認ください。'
          : 'うまく聞き取れませんでした。もう一度お試しください。';
      draw(`<div class="feedback ng"><strong>エラー</strong>${esc(msg)}</div>`);
    }
  }

  draw();
}
