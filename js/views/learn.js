import { allPhrases } from '../data/phrases.js';
import { allSymptomPhrases } from '../data/symptoms.js';
import { allPhonePhrases } from '../data/phone.js';
import { allWords } from '../data/vocabulary.js';
import { muscles } from '../data/muscles.js';
import { scenarios } from '../data/scenarios.js';
import { scopeOptions, scopeContent, speakingPhrases, scopeLabel, scopeHref } from '../data/scopes.js';
import { progress, favorites } from '../lib/storage.js';
import { speak, canListen, startListening, compareSpeech, stopSpeaking } from '../lib/speech.js';
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

/* ============================ 学習範囲の選択 ============================ */

/**
 * 学習範囲を選ぶプルダウン。
 * @param {string} scope いま選ばれている範囲のID
 * @param {(id: string) => string} hrefFor 選択時の遷移先を返す関数
 */
function scopePicker(scope, hrefFor) {
  const options = scopeOptions()
    .map(
      (g) => `<optgroup label="${esc(g.group)}">${g.items
        .map((o) => `<option value="${esc(o.id)}"${o.id === scope ? ' selected' : ''}>${esc(o.label)}</option>`)
        .join('')}</optgroup>`
    )
    .join('');

  const link = scopeHref(scope);

  return `
    <div class="scope-bar">
      <label class="scope-label" for="scope-select">練習する範囲</label>
      <select id="scope-select" data-scope-href="${esc(hrefFor('__ID__'))}">${options}</select>
      ${link ? `<a class="btn btn-ghost scope-source" href="${esc(link)}">📖 このパートを読む</a>` : ''}
    </div>`;
}

/** scopePicker で作ったプルダウンに遷移処理を付ける */
function bindScopePicker(root) {
  const sel = root.querySelector('#scope-select');
  if (!sel) return;
  sel.addEventListener('change', () => {
    location.hash = sel.dataset.scopeHref.replace('__ID__', encodeURIComponent(sel.value));
  });
}

/* ============================ クイズ ============================ */

const QUIZ_MODES = {
  all: 'すべて',
  phrase: 'フレーズ',
  word: '単語',
  muscle: '筋肉名'
};

const QUIZ_LENGTH = 10;

function phrasePool(scope) {
  return scopeContent(scope).phrases.filter((p) => p.en && p.ja);
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

function buildMuscleQuestion(pool = muscles) {
  const target = pool[Math.floor(Math.random() * pool.length)];
  // 選択肢が足りないときは全体から補う
  const distractorPool = pool.length >= 4 ? pool : muscles;
  const others = sample(
    distractorPool.filter((m) => m.en !== target.en && m.ja !== target.ja),
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

function buildQuiz(mode, scope) {
  const content = scopeContent(scope);
  const phrases = phrasePool(scope);
  const words = content.words;
  const pickMuscles = content.muscles;

  // 範囲を絞ると出せない種類が出てくるので、実際に出題できるものだけ使う
  const available = [];
  if (phrases.length >= 4) available.push('phrase');
  if (words.length >= 4) available.push('word');
  if (pickMuscles.length >= 4) available.push('muscle');
  if (!available.length) return [];

  const kinds = available.includes(mode) ? [mode] : available;
  const questions = [];

  for (let i = 0; i < QUIZ_LENGTH; i++) {
    const kind = kinds[i % kinds.length];
    if (kind === 'phrase') questions.push(buildPhraseQuestion(phrases));
    else if (kind === 'word') questions.push(buildWordQuestion(words));
    else questions.push(buildMuscleQuestion(pickMuscles));
  }
  return shuffle(questions);
}

export function renderQuiz(mode = 'all', scope = 'all') {
  const content = scopeContent(scope);
  const modes = { all: 'すべて' };
  if (content.phrases.length >= 4) modes.phrase = 'フレーズ';
  if (content.words.length >= 4) modes.word = '単語';
  if (content.muscles.length >= 4) modes.muscle = '筋肉名';

  const href = (m) => `#/learn/quiz?mode=${m}&scope=${encodeURIComponent(scope)}`;

  return `
    ${pageHead('✏️ クイズ', `全${QUIZ_LENGTH}問。${scope === 'all' ? 'サイト全体' : scopeLabel(scope)}から出題します。`, '#/learn')}

    ${scopePicker(scope, (id) => `#/learn/quiz?mode=${mode}&scope=${id}`)}

    ${
      Object.keys(modes).length > 2
        ? `<div class="chip-row">
            ${Object.entries(modes)
              .map(([k, label]) => `<a class="chip${k === mode ? ' is-active' : ''}" href="${href(k)}">${esc(label)}</a>`)
              .join('')}
          </div>`
        : ''
    }

    <div id="quiz-root"></div>
  `;
}

export function mountQuiz(root, mode = 'all', scope = 'all') {
  bindScopePicker(root);

  const host = root.querySelector('#quiz-root');
  if (!host) return;

  let questions = buildQuiz(mode, scope);
  let index = 0;
  let correctCount = 0;

  if (!questions.length) {
    host.innerHTML = `<p class="empty">この範囲には出題できる項目が足りません。<br>別の範囲をお選びください。</p>`;
    return;
  }

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
      questions = buildQuiz(mode, scope);
      index = 0;
      correctCount = 0;
      drawQuestion();
    });
  }

  drawQuestion();
}

/* ============================ 発音練習 ============================ */

function pronPool(source, scope) {
  if (source === 'favorites') {
    const saved = new Set(favorites.list());
    const all = [...allPhrases(), ...allSymptomPhrases(), ...allPhonePhrases(), ...allWords(), ...muscles];
    return all.filter((x) => saved.has(x.en)).map((x) => ({ en: x.en, ja: x.ja }));
  }
  if (source === 'muscle') {
    const list = scopeContent(scope).muscles;
    const use = list.length ? list : muscles;
    return use.map((m) => ({ en: m.en, ja: `${m.ja}（${m.kana}）` }));
  }
  if (source === 'word') {
    const list = scopeContent(scope).words;
    const use = list.length ? list : allWords();
    return use.map((w) => ({ en: w.en, ja: w.ja }));
  }
  return speakingPhrases(scope).map((p) => ({ en: p.en, ja: p.ja }));
}

const PRON_SOURCES = {
  phrase: 'フレーズ',
  word: '単語',
  muscle: '筋肉名',
  favorites: 'お気に入り'
};

export function renderPronunciation(source = 'phrase', scope = 'all') {
  const content = scopeContent(scope);
  const sources = { phrase: 'フレーズ' };
  if (content.words.length) sources.word = '単語';
  if (content.muscles.length) sources.muscle = '筋肉名';
  sources.favorites = 'お気に入り';

  const scoped = scope !== 'all' && source !== 'favorites';

  return `
    ${pageHead('🎤 発音練習', '手本を聞いて、同じように声に出してみましょう。', '#/learn')}

    ${scopePicker(scope, (id) => `#/learn/pronunciation?from=${source}&scope=${id}`)}

    <div class="chip-row">
      ${Object.entries(sources)
        .map(
          ([k, label]) =>
            `<a class="chip${k === source ? ' is-active' : ''}" href="#/learn/pronunciation?from=${k}&scope=${encodeURIComponent(scope)}">${esc(label)}</a>`
        )
        .join('')}
    </div>

    ${scoped ? `<p class="muted" style="margin:-6px 0 14px">「${esc(scopeLabel(scope))}」のフレーズから出題しています。</p>` : ''}

    <div id="pron-root"></div>
  `;
}

export function mountPronunciation(root, source = 'phrase', scope = 'all') {
  bindScopePicker(root);

  const host = root.querySelector('#pron-root');
  if (!host) return;

  const pool = pronPool(source, scope);
  if (!pool.length) {
    host.innerHTML = `<p class="empty">この分類にはまだ項目がありません。<br>フレーズに ☆ を付けると、お気に入りから練習できます。</p>`;
    return;
  }

  let current = pool[Math.floor(Math.random() * pool.length)];
  let state = 'idle'; // idle | listening | result
  let session = null;
  let resultHtml = '';

  function pickNext() {
    let next = current;
    if (pool.length > 1) {
      while (next.en === current.en) next = pool[Math.floor(Math.random() * pool.length)];
    }
    current = next;
  }

  function micArea() {
    if (!canListen) {
      return `<div class="callout warn">
        <h3>この端末では音声認識が使えません</h3>
        <p style="margin:0">音声認識は Google Chrome か Safari でご利用いただけます。手本を聞いて口に出す練習はこのままできます。</p>
      </div>`;
    }

    if (state === 'listening') {
      return `
        <button class="mic-btn is-listening" data-stop aria-label="聞き取りを止めて判定する">⏹</button>
        <p class="pron-status">聞き取り中です。ゆっくりで大丈夫です。</p>
        <p class="pron-live" id="pron-live">…</p>
        <div class="btn-row" style="justify-content:center;margin-top:16px">
          <button class="btn btn-primary btn-lg" data-stop>話し終わった・判定する</button>
        </div>
        <p class="pron-note">自動では止まりません。区切って話しても大丈夫です。</p>`;
    }

    return `
      <button class="mic-btn" data-mic aria-label="録音を始める">🎤</button>
      <p class="pron-status">${state === 'result' ? 'もう一度話すこともできます' : 'ボタンを押して、声に出してみましょう'}</p>
      <p class="pron-note">押している間ずっと聞き取ります。話し終わったら停止ボタンを押してください。</p>`;
  }

  function draw() {
    const busy = state === 'listening';
    host.innerHTML = `
      <div class="card">
        <p class="pron-target">${esc(current.en)}</p>
        <p class="pron-ja">${esc(current.ja)}</p>

        <div class="btn-row" style="justify-content:center;margin-bottom:22px">
          <button class="btn" data-listen-model ${busy ? 'disabled' : ''}>🔊 手本を聞く</button>
          <button class="btn" data-slow ${busy ? 'disabled' : ''}>🐢 ゆっくり聞く</button>
        </div>

        ${micArea()}

        <div id="pron-result">${resultHtml}</div>

        <div class="btn-row" style="justify-content:center;margin-top:22px">
          <button class="btn btn-primary" data-next ${busy ? 'disabled' : ''}>次のお題 →</button>
        </div>
      </div>`;

    host.querySelector('[data-listen-model]').addEventListener('click', () => speak(current.en));
    host.querySelector('[data-slow]').addEventListener('click', () => speak(current.en, { rate: 0.55 }));
    host.querySelector('[data-next]').addEventListener('click', () => {
      if (state === 'listening') return;
      stopSpeaking();
      pickNext();
      state = 'idle';
      resultHtml = '';
      draw();
    });

    host.querySelector('[data-mic]')?.addEventListener('click', begin);
    host.querySelectorAll('[data-stop]').forEach((b) => b.addEventListener('click', finish));
  }

  function begin() {
    stopSpeaking();
    resultHtml = '';
    state = 'listening';
    draw();

    const live = host.querySelector('#pron-live');

    try {
      session = startListening({
        onUpdate: (text) => {
          const el = host.querySelector('#pron-live');
          if (el) el.textContent = text || '…';
        },
        onError: (err) => {
          session = null;
          state = 'idle';
          resultHtml = `<div class="feedback ng"><strong>マイクを使えませんでした</strong>${esc(micErrorMessage(err))}</div>`;
          draw();
        }
      });
      if (live) live.textContent = '…';
    } catch {
      session = null;
      state = 'idle';
      resultHtml = `<div class="feedback ng"><strong>音声認識を開始できませんでした</strong>Google Chrome か Safari でお試しください。</div>`;
      draw();
    }
  }

  async function finish() {
    if (state !== 'listening' || !session) return;

    // 二重で押されないよう、先に状態を進める
    const s = session;
    session = null;
    state = 'result';

    const heard = await s.stop();

    if (!heard) {
      resultHtml = `<div class="feedback ng"><strong>聞き取れませんでした</strong>マイクに少し近づいて、もう一度お試しください。</div>`;
      draw();
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

    resultHtml = `
      <div class="score-ring">${score}<span style="font-size:16px">点</span></div>
      <p class="heard">認識された内容：<span class="heard-text">${esc(heard)}</span></p>
      <p class="heard" style="margin-top:8px">${marked}</p>
      <p class="muted" style="text-align:center;margin-top:10px">${esc(comment)}</p>`;
    draw();
  }

  function micErrorMessage(err) {
    const kind = err?.message;
    if (kind === 'not-allowed' || kind === 'service-not-allowed') {
      return 'マイクの使用が許可されていません。ブラウザのアドレスバーのマイク設定から許可してください。';
    }
    if (kind === 'audio-capture') {
      return 'マイクが見つかりませんでした。接続をご確認ください。';
    }
    return 'もう一度お試しください。';
  }

  draw();
}
