import { phases } from '../data/phrases.js';
import { symptoms } from '../data/symptoms.js';
import { phoneTopics } from '../data/phone.js';
import { meetingTopics } from '../data/meeting.js';
import { muscles } from '../data/muscles.js';
import { allWords } from '../data/vocabulary.js';
import { favorites, progress } from '../lib/storage.js';
import { esc } from '../lib/ui.js';
import { isAdmin, authState } from '../lib/auth.js';

export function render() {
  const quiz = progress.quizStats();
  const streak = progress.streak();
  const rate = quiz.total ? Math.round((quiz.correct / quiz.total) * 100) : 0;

  return `
    <section>
      <div class="page-head">
        ${
          authState.user
            ? `<p class="home-greeting">こんにちは、${esc(authState.user.displayName || authState.user.email.split('@')[0])} さん</p>`
            : ''
        }
        <h1>現場で使う英語を、迷わず。</h1>
        <p>来院時の挨拶から施術プランのご提案まで。整体の現場で本当に使う英語だけを集めました。</p>
      </div>

      <h2 class="section-title">施術の流れから探す</h2>
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
    </section>

    <section>
      <h2 class="section-title">目的から探す</h2>
      <div class="card-grid two">
        <a class="nav-card" href="#/phone">
          <span class="nav-icon">📞</span>
          <span class="nav-body">
            <strong>お電話対応</strong>
            <span>予約・変更・道案内など${phoneTopics.length}場面</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>
        <a class="nav-card" href="#/symptoms">
          <span class="nav-icon">🩹</span>
          <span class="nav-body">
            <strong>症状別の会話</strong>
            <span>肩こり・腰痛など${symptoms.length}症状</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>
        <a class="nav-card" href="#/words">
          <span class="nav-icon">📖</span>
          <span class="nav-body">
            <strong>単語集</strong>
            <span>現場で使う${allWords().length}語</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>
        <a class="nav-card" href="#/muscles">
          <span class="nav-icon">💪</span>
          <span class="nav-body">
            <strong>筋肉の英語名</strong>
            <span>主要${muscles.length}筋を部位別に</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>
        ${
          isAdmin()
            ? `<a class="nav-card" href="#/meeting">
          <span class="nav-icon">💻</span>
          <span class="nav-body">
            <strong>オンライン英会話 <span class="tag">管理者のみ</span></strong>
            <span>練習会の入室〜退出まで${meetingTopics.length}場面＋通しの台本</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>`
            : ''
        }
        <a class="nav-card" href="#/learn">
          <span class="nav-icon">🎓</span>
          <span class="nav-body">
            <strong>学習する</strong>
            <span>クイズ・発音・会話シミュレーション</span>
          </span>
          <span class="nav-arrow">›</span>
        </a>
      </div>
    </section>

    <section>
      <h2 class="section-title">学習の記録</h2>
      <div class="stat-row">
        <div class="stat"><strong>${streak}</strong><span>連続学習日数</span></div>
        <div class="stat"><strong>${quiz.total}</strong><span>解いた問題数</span></div>
        <div class="stat"><strong>${rate}%</strong><span>正答率</span></div>
        <div class="stat"><strong>${favorites.size}</strong><span>お気に入り</span></div>
      </div>
      <div class="btn-row" style="margin-top:12px">
        <a class="btn" href="#/favorites">★ お気に入りを見る</a>
        <a class="btn btn-primary" href="#/learn/quiz">クイズを始める</a>
      </div>
    </section>

    <p class="disclaimer">
      本サイトは整体・セラピストの語学学習および接客支援を目的としています。
      整体は医療行為ではなく、掲載された表現で診断を行うことはできません。
      症状の判断や治療が必要な場合は、必ず医療機関の受診をご案内ください。
    </p>
  `;
}
