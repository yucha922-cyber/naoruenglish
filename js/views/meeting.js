import { meetingTopics, meetingTopicById, meetingScript } from '../data/meeting.js';
import { favorites } from '../lib/storage.js';
import { esc, phraseList, pageHead, callout, practiceLinks } from '../lib/ui.js';

export function renderIndex() {
  return `
    ${pageHead('💻 オンライン英会話', '2週間に1回のオンライン練習会で、入室から退出までそのまま使える言い方です。')}

    ${callout('tips', '💡 練習会を楽しく続けるコツ', [
      '最初は「入室・最初のあいさつ」と「次回の予定・退出」だけでも十分です。始まりと終わりが言えると自信になります。',
      '司会役は持ち回りにすると、全員が進行フレーズを使えるようになります。',
      '練習会で覚えたい表現は ★ でお気に入りに入れておくと、次回までに復習できます。'
    ])}

    <a class="nav-card" href="#/meeting/script" style="margin-bottom:12px">
      <span class="nav-icon">📜</span>
      <span class="nav-body">
        <strong>通しの台本（入室 → 退出）</strong>
        <span>あいさつ・雑談・ロールプレイ・フィードバック・次回の予定まで、1回分の流れをそのまま練習できます。</span>
      </span>
      <span class="nav-arrow">›</span>
    </a>

    <div class="card-grid">
      ${meetingTopics
        .map(
          (t) => `
        <a class="nav-card" href="#/meeting/${t.id}">
          <span class="nav-icon">${t.icon}</span>
          <span class="nav-body">
            <strong><span class="step-badge">${t.order}</span> ${esc(t.title)}</strong>
            <span>${esc(t.summary)}</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>`
        )
        .join('')}
    </div>
  `;
}

export function renderDetail(id) {
  const topic = meetingTopicById(id);
  if (!topic) return null;

  const idx = meetingTopics.indexOf(topic);
  const prev = meetingTopics[idx - 1];
  const next = meetingTopics[idx + 1];

  return `
    ${pageHead(`${topic.icon} ${topic.title}`, topic.summary, '#/meeting')}

    ${callout('tips', '💡 このパートのコツ', topic.tips)}

    ${topic.groups
      .map(
        (g) => `
      <section>
        <h2 class="section-title">${esc(g.title)}</h2>
        ${phraseList(g.phrases)}
      </section>`
      )
      .join('')}

    <section>
      <h2 class="section-title">相手が言いそうなこと</h2>
      <p class="muted" style="margin:-4px 0 10px">オンラインは音声が聞き取りにくいので、よく出る言い方に耳を慣らしておきましょう。</p>
      ${phraseList(topic.partnerPhrases, { patient: true })}
    </section>

    ${practiceLinks(`meeting-${topic.id}`)}

    <div class="btn-row" style="margin-top:28px">
      ${prev ? `<a class="btn" href="#/meeting/${prev.id}">← ${esc(prev.title)}</a>` : `<a class="btn" href="#/meeting/script">← 通しの台本</a>`}
      ${next ? `<a class="btn btn-primary" href="#/meeting/${next.id}">${esc(next.title)} →</a>` : ''}
    </div>
  `;
}

export function renderScript() {
  let lastStep = '';
  const lines = meetingScript
    .map((l) => {
      const head = l.step !== lastStep ? `<p class="script-step">― ${esc(l.step)} ―</p>` : '';
      lastStep = l.step;
      const fav = favorites.has(l.en);
      return `
        ${head}
        <div class="script-line${l.who === 'B' ? ' is-b' : ''}">
          <span class="script-who">${esc(l.who)}</span>
          <div class="script-bubble">
            <p class="script-en">${esc(l.en)}</p>
            <p class="script-ja">${esc(l.ja)}</p>
            <div class="script-tools">
              <button class="tool-btn sm" data-speak="${esc(l.en)}" aria-label="読み上げる" title="読み上げる">🔊</button>
              <button class="tool-btn sm" data-present-en="${esc(l.en)}" data-present-ja="${esc(l.ja)}" aria-label="拡大して見せる" title="拡大して見せる">🔎</button>
              <button class="tool-btn sm${fav ? ' is-on' : ''}" data-fav="${esc(l.en)}" aria-label="お気に入り" title="お気に入り">${fav ? '★' : '☆'}</button>
            </div>
          </div>
        </div>`;
    })
    .join('');

  return `
    ${pageHead('📜 通しの台本（入室 → 退出）', '練習会1回分の流れです。A（自分・司会）と B（相手）に分かれて、そのまま読み合わせできます。', '#/meeting')}

    ${callout('tips', '💡 使い方', [
      '最初は A 役だけを声に出して読み、慣れたら役を交代しましょう。',
      'ロールプレイの部分は、その日のテーマ（問診・電話対応など）に差し替えて使えます。',
      '各パートの言い換えは、下の「場面別のフレーズ」にまとまっています。'
    ])}

    <div class="script-list">${lines}</div>

    <div class="btn-row" style="margin-top:28px">
      <a class="btn btn-primary" href="#/meeting/${meetingTopics[0].id}">場面別のフレーズへ →</a>
    </div>
  `;
}
