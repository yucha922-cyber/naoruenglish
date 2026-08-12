import { phoneTopics, phoneTopicById } from '../data/phone.js';
import { scenarios } from '../data/scenarios.js';
import { esc, phraseList, pageHead, callout, practiceLinks } from '../lib/ui.js';

export function renderIndex() {
  return `
    ${pageHead('📞 お電話対応', '来院前のお問い合わせに答えるためのフレーズです。')}

    ${callout('tips', '💡 電話が苦手でも大丈夫です', [
      '電話は相手の口元も見えず、身振りも使えません。現場より難しくて当然です。',
      '聞き取れないときの一言を先に覚えておけば、あとは何とかなります。まずは「受け答えの基本」から。',
      'どうしても伝わらないときは「メッセージで送ってください」に逃げて構いません。'
    ])}

    <div class="card-grid">
      ${phoneTopics
        .map(
          (t) => `
        <a class="nav-card" href="#/phone/${t.id}">
          <span class="nav-icon">${t.icon}</span>
          <span class="nav-body">
            <strong>${esc(t.title)}</strong>
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
  const topic = phoneTopicById(id);
  if (!topic) return null;

  const idx = phoneTopics.indexOf(topic);
  const prev = phoneTopics[idx - 1];
  const next = phoneTopics[idx + 1];

  return `
    ${pageHead(`${topic.icon} ${topic.title}`, topic.summary, '#/phone')}

    ${callout('tips', '💡 このパートのコツ', topic.tips)}

    ${topic.groups
      .map(
        (g) => `
      <section>
        <h2 class="section-title">${esc(g.title)}</h2>
        ${g.note ? `<p class="muted" style="margin:-4px 0 10px">${esc(g.note)}</p>` : ''}
        ${phraseList(g.phrases)}
      </section>`
      )
      .join('')}

    <section>
      <h2 class="section-title">お客様が言いそうなこと</h2>
      <p class="muted" style="margin:-4px 0 10px">電話では聞き返しづらいので、先に耳を慣らしておきましょう。</p>
      ${phraseList(topic.callerPhrases, { patient: true })}
    </section>

    ${practiceLinks(`phone-${topic.id}`, {
      simulation: scenarios.some((s) => s.section === `phone-${topic.id}`)
    })}

    <div class="btn-row" style="margin-top:28px">
      ${prev ? `<a class="btn" href="#/phone/${prev.id}">← ${esc(prev.title)}</a>` : ''}
      ${next ? `<a class="btn btn-primary" href="#/phone/${next.id}">${esc(next.title)} →</a>` : ''}
    </div>
  `;
}
