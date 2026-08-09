import { phases } from '../data/phrases.js';
import { scenarios } from '../data/scenarios.js';
import { esc, phraseList, pageHead, callout, practiceLinks } from '../lib/ui.js';

export function renderIndex() {
  return `
    ${pageHead('施術の流れ', 'お電話でのお問い合わせから、施術プランのご提案まで順番に並べています。')}
    <div class="card-grid">
      <a class="nav-card" href="#/phone">
        <span class="nav-icon">📞</span>
        <span class="nav-body">
          <strong><span class="step-badge">0</span> お電話対応</strong>
          <span>ご予約・変更・場所のお問い合わせ。来院前の最初の接点です。</span>
        </span>
        <span class="nav-arrow">›</span>
      </a>
      ${phases
        .map(
          (p) => `
        <a class="nav-card" href="#/flow/${p.id}">
          <span class="nav-icon">${p.icon}</span>
          <span class="nav-body">
            <strong><span class="step-badge">${p.step}</span> ${esc(p.title)}</strong>
            <span>${esc(p.summary)}</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>`
        )
        .join('')}
    </div>
  `;
}

export function renderDetail(id) {
  const phase = phases.find((p) => p.id === id);
  if (!phase) return null;

  const idx = phases.indexOf(phase);
  const prev = phases[idx - 1];
  const next = phases[idx + 1];

  return `
    ${pageHead(`${phase.icon} ${phase.title}`, phase.summary, '#/flow')}

    ${callout('tips', '💡 このパートのコツ', phase.tips)}

    ${phase.groups
      .map(
        (g) => `
      <section>
        <h2 class="section-title">${esc(g.title)}</h2>
        ${phraseList(g.phrases)}
      </section>`
      )
      .join('')}

    <section>
      <h2 class="section-title">患者様が言いそうなこと</h2>
      <p class="muted" style="margin:-4px 0 10px">聞き取れるようにしておくと、会話が一気に楽になります。</p>
      ${phraseList(phase.patientPhrases, { patient: true })}
    </section>

    ${practiceLinks(`flow-${phase.id}`, {
      simulation: scenarios.some((s) => s.section === `flow-${phase.id}`)
    })}

    <div class="btn-row" style="margin-top:28px">
      ${prev ? `<a class="btn" href="#/flow/${prev.id}">← ${esc(prev.title)}</a>` : ''}
      ${next ? `<a class="btn btn-primary" href="#/flow/${next.id}">${esc(next.title)} →</a>` : ''}
    </div>
  `;
}
