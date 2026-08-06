import { scenarios, scenarioById } from '../data/scenarios.js';
import { progress } from '../lib/storage.js';
import { speak, stopSpeaking } from '../lib/speech.js';
import { esc, pageHead, shuffle } from '../lib/ui.js';

export function renderIndex() {
  const scores = progress.scenarioScores();

  return `
    ${pageHead('💬 会話シミュレーション', '患者様の発言に対して、最適な返答を選んでいきます。', '#/learn')}

    <div class="card-grid">
      ${scenarios
        .map((s) => {
          const best = scores[s.id];
          return `
        <a class="nav-card" href="#/learn/simulation/${s.id}">
          <span class="nav-icon">${s.icon}</span>
          <span class="nav-body">
            <strong>${esc(s.title)} <span class="tag level-${esc(s.level)}">${esc(s.level)}</span></strong>
            <span>${esc(s.description)}</span>
            ${best !== undefined ? `<span style="color:var(--primary)">最高記録 ${best}%</span>` : ''}
          </span>
          <span class="nav-arrow">›</span>
        </a>`;
        })
        .join('')}
    </div>
  `;
}

export function renderScenario(id) {
  const s = scenarioById(id);
  if (!s) return null;

  return `
    ${pageHead(`${s.icon} ${s.title}`, s.description, '#/learn/simulation')}
    <div class="card" style="margin-bottom:18px">
      <p class="muted" style="margin:0"><strong>設定</strong>　${esc(s.patientProfile)}</p>
    </div>
    <div id="sim-root"></div>
  `;
}

export function mountScenario(root, id) {
  const s = scenarioById(id);
  const host = root.querySelector('#sim-root');
  if (!s || !host) return;

  let step = 0;
  let correctCount = 0;
  const history = [];

  function bubbles() {
    return history
      .map((h) =>
        h.role === 'patient'
          ? `<div class="bubble patient">${esc(h.en)}<span class="bubble-ja">${esc(h.ja)}</span></div>`
          : `<div class="bubble me">${esc(h.en)}<span class="bubble-ja">${esc(h.ja)}</span></div>`
      )
      .join('');
  }

  function drawStep() {
    const st = s.steps[step];
    history.push({ role: 'patient', en: st.patient.en, ja: st.patient.ja });
    speak(st.patient.en);

    const choices = shuffle(st.options);

    host.innerHTML = `
      <div class="quiz-progress">
        <span>${step + 1} / ${s.steps.length}</span>
        <span class="progress-track"><span class="progress-fill" style="width:${(step / s.steps.length) * 100}%"></span></span>
      </div>

      <div class="chat">${bubbles()}</div>

      <div class="btn-row" style="margin-bottom:14px">
        <button class="btn" data-replay>🔊 患者様の発言をもう一度</button>
      </div>

      <div class="hint-box">💡 ${esc(st.hint)}</div>

      <div class="choice-list">
        ${choices
          .map(
            (c, i) => `
          <button class="choice" data-i="${st.options.indexOf(c)}">
            <span class="choice-key">${'ABC'[i]}</span>
            <span>${esc(c.en)}<br><span class="muted">${esc(c.ja)}</span></span>
          </button>`
          )
          .join('')}
      </div>
      <div id="sim-feedback"></div>`;

    host.querySelector('[data-replay]').addEventListener('click', () => speak(st.patient.en));
    host.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => choose(btn, st));
    });
  }

  function choose(btn, st) {
    const opt = st.options[Number(btn.dataset.i)];
    if (opt.correct) correctCount += 1;

    host.querySelectorAll('.choice').forEach((b) => {
      b.disabled = true;
      const o = st.options[Number(b.dataset.i)];
      if (o.correct) b.classList.add('is-correct');
      else if (b === btn) b.classList.add('is-wrong');
    });

    history.push({ role: 'me', en: opt.en, ja: opt.ja });
    speak(opt.en);

    const isLast = step === s.steps.length - 1;
    host.querySelector('#sim-feedback').innerHTML = `
      <div class="feedback ${opt.correct ? 'ok' : 'ng'}">
        <strong>${opt.correct ? '良い返答です' : 'もう一歩'}</strong>
        ${esc(opt.feedback)}
      </div>
      <div class="btn-row" style="margin-top:14px">
        <button class="btn" data-say>🔊 正解を声に出して練習</button>
        <button class="btn btn-primary" data-next>${isLast ? '結果を見る' : '次へ →'}</button>
      </div>`;

    host.querySelector('#sim-feedback').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    const best = st.options.find((o) => o.correct);
    host.querySelector('[data-say]').addEventListener('click', () => speak(best.en, { rate: 0.75 }));
    host.querySelector('[data-next]').addEventListener('click', () => {
      // 選んだ返答が不正解なら、記録上は模範解答に置き換えて会話を続ける
      if (!opt.correct) history[history.length - 1] = { role: 'me', en: best.en, ja: best.ja };
      step += 1;
      if (step >= s.steps.length) drawResult();
      else drawStep();
    });
  }

  function drawResult() {
    const pct = Math.round((correctCount / s.steps.length) * 100);
    progress.completeScenario(s.id, pct);

    const message =
      pct === 100 ? 'この場面はもう大丈夫です。実際の現場でもこの流れで進めてください。' :
      pct >= 70 ? '大きな流れはつかめています。間違えた場面をもう一度確認しましょう。' :
      '解説を読みながら、もう一周してみましょう。回数を重ねるほど自然に出てきます。';

    host.innerHTML = `
      <div class="chat">${bubbles()}</div>
      <div class="card" style="text-align:center;margin-top:18px">
        <p class="muted" style="margin:0">最適な返答を選べた割合</p>
        <p class="score-big">${pct}%</p>
        <p style="margin:4px 0 18px">${esc(message)}</p>
        <div class="btn-row" style="justify-content:center">
          <button class="btn btn-primary" data-again>もう一度</button>
          <a class="btn" href="#/learn/simulation">シナリオ一覧へ</a>
        </div>
      </div>`;

    host.querySelector('[data-again]').addEventListener('click', () => {
      stopSpeaking();
      step = 0;
      correctCount = 0;
      history.length = 0;
      drawStep();
    });
  }

  drawStep();
}
