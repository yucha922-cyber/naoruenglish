import { symptoms, symptomCategories } from '../data/symptoms.js';
import { muscleByName } from '../data/muscles.js';
import { esc, phraseList, pageHead, callout } from '../lib/ui.js';

export function renderIndex(category = 'すべて') {
  const list = category === 'すべて' ? symptoms : symptoms.filter((s) => s.category === category);

  return `
    ${pageHead('症状別の会話', '主訴に合わせた問診・説明・セルフケア指導をまとめています。')}

    <div class="chip-row">
      ${symptomCategories
        .map(
          (c) =>
            `<a class="chip${c === category ? ' is-active' : ''}" href="#/symptoms?cat=${encodeURIComponent(c)}">${esc(c)}</a>`
        )
        .join('')}
    </div>

    <div class="card-grid two">
      ${list
        .map(
          (s) => `
        <a class="nav-card" href="#/symptoms/${s.id}">
          <span class="nav-icon">${s.icon}</span>
          <span class="nav-body">
            <strong>${esc(s.name)}</strong>
            <span>${esc(s.nameEn)}</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>`
        )
        .join('')}
    </div>
  `;
}

export function renderDetail(id) {
  const s = symptoms.find((x) => x.id === id);
  if (!s) return null;

  const muscleRows = s.muscles
    .map((name) => {
      const m = muscleByName(name);
      return `
        <div class="word-row">
          <span class="word-en">${esc(name)}</span>
          <button class="tool-btn" data-speak="${esc(name)}" aria-label="読み上げる">🔊</button>
          <span class="word-ja">${m ? esc(m.ja) : ''}${m?.kana ? ` <span class="word-kana">${esc(m.kana)}</span>` : ''}</span>
        </div>`;
    })
    .join('');

  return `
    ${pageHead(`${s.icon} ${s.name}`, s.nameEn, '#/symptoms')}

    ${callout('term', '📝 英語での言い方に注意', s.terminology)}

    <section>
      <h2 class="section-title">患者様はこう表現します</h2>
      ${phraseList(s.patientSays, { patient: true })}
    </section>

    <section>
      <h2 class="section-title">この症状の問診</h2>
      ${phraseList(s.questions)}
    </section>

    <section>
      <h2 class="section-title">状態のご説明</h2>
      ${phraseList(s.findings)}
    </section>

    <section>
      <h2 class="section-title">関連する筋肉</h2>
      <div class="word-list">${muscleRows}</div>
    </section>

    <section>
      <h2 class="section-title">セルフケアの指導</h2>
      ${phraseList(s.advice)}
    </section>

    <section>
      ${callout(
        'warn',
        '⚠️ 施術を控えて受診をおすすめするサイン',
        s.redFlags.map((r) => `${r.ja}（${r.en}）`)
      )}
      <p class="muted" style="margin-top:10px">
        これらに当てはまる場合は施術を行わず、医療機関の受診をご案内してください。
        伝え方は<a href="#/flow/explanation">状態のご説明</a>の「医療機関をすすめる」をご覧ください。
      </p>
    </section>
  `;
}
