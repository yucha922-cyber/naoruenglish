// 学習範囲（スコープ）の定義
// クイズ・発音練習・会話シミュレーションを、サイトの各パートごとに絞り込むために使う。

import { phases, allPhrases } from './phrases.js';
import { phoneTopics, allPhonePhrases } from './phone.js';
import { symptoms, allSymptomPhrases } from './symptoms.js';
import { muscles, musclesForSymptom } from './muscles.js';
import { allWords } from './vocabulary.js';

/** 画面のプルダウンに出す選択肢。group ごとにまとめて表示する。 */
export function scopeOptions() {
  return [
    { group: '全体', items: [{ id: 'all', label: 'すべて' }] },
    {
      group: 'お電話対応',
      items: phoneTopics.map((t) => ({ id: `phone-${t.id}`, label: t.title }))
    },
    {
      group: '施術の流れ',
      items: phases.map((p) => ({ id: `flow-${p.id}`, label: `${p.step}. ${p.title}` }))
    },
    {
      group: '症状別',
      items: symptoms.map((s) => ({ id: `symptom-${s.id}`, label: s.name }))
    }
  ];
}

const flat = () => scopeOptions().flatMap((g) => g.items);

export function scopeLabel(id) {
  return flat().find((o) => o.id === id)?.label || 'すべて';
}

export function isValidScope(id) {
  return !id || flat().some((o) => o.id === id);
}

/** そのスコープの英文フレーズと、関連する筋肉・単語を返す */
export function scopeContent(id) {
  if (!id || id === 'all') {
    return {
      phrases: [...allPhonePhrases(), ...allPhrases(), ...allSymptomPhrases()],
      muscles,
      words: allWords()
    };
  }

  if (id.startsWith('phone-')) {
    const topicId = id.slice('phone-'.length);
    return { phrases: allPhonePhrases().filter((p) => p.topicId === topicId), muscles: [], words: [] };
  }

  if (id.startsWith('flow-')) {
    const phaseId = id.slice('flow-'.length);
    return { phrases: allPhrases().filter((p) => p.phaseId === phaseId), muscles: [], words: [] };
  }

  if (id.startsWith('symptom-')) {
    const symptomId = id.slice('symptom-'.length);
    return {
      phrases: allSymptomPhrases().filter((p) => p.symptomId === symptomId),
      // 症状別では、その症状に関わる筋肉も一緒に覚えられるようにする
      muscles: musclesForSymptom(symptomId),
      words: []
    };
  }

  return { phrases: [], muscles: [], words: [] };
}

/** こちらから話す側のフレーズだけを返す（発音練習用） */
export function speakingPhrases(id) {
  return scopeContent(id).phrases.filter((p) => p.kind === 'therapist' || p.kind === 'staff');
}

/** そのスコープに対応するサイト内のページ */
export function scopeHref(id) {
  if (!id || id === 'all') return null;
  if (id.startsWith('phone-')) return `#/phone/${id.slice('phone-'.length)}`;
  if (id.startsWith('flow-')) return `#/flow/${id.slice('flow-'.length)}`;
  if (id.startsWith('symptom-')) return `#/symptoms/${id.slice('symptom-'.length)}`;
  return null;
}
