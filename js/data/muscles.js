// 主要筋肉の英語名データベース
// en: 英語名 / ja: 日本語名 / kana: カタカナ発音の目安 / action: 主な作用 / related: 関連症状ID

export const muscleRegions = [
  { id: 'neck', name: '首', nameEn: 'Neck' },
  { id: 'shoulder', name: '肩・肩甲帯', nameEn: 'Shoulder & Scapula' },
  { id: 'chest', name: '胸', nameEn: 'Chest' },
  { id: 'back', name: '背中・体幹', nameEn: 'Back & Trunk' },
  { id: 'abdomen', name: '腹部', nameEn: 'Abdomen' },
  { id: 'hip', name: '股関節・臀部', nameEn: 'Hip & Gluteal' },
  { id: 'thigh', name: '大腿', nameEn: 'Thigh' },
  { id: 'lowerleg', name: '下腿・足', nameEn: 'Lower Leg & Foot' },
  { id: 'arm', name: '上肢', nameEn: 'Arm & Forearm' },
  { id: 'head', name: '頭部・顎', nameEn: 'Head & Jaw' }
];

export const muscles = [
  // ---------- 首 ----------
  { en: 'Sternocleidomastoid', abbr: 'SCM', ja: '胸鎖乳突筋', kana: 'スターノクライドマストイド', region: 'neck', action: '首の回旋・側屈・屈曲', related: ['neck-stiffness', 'headache', 'dizziness'], note: '首の前側を斜めに走る太い筋。頭部前方位で常に緊張します。' },
  { en: 'Scalene muscles', abbr: '', ja: '斜角筋群', kana: 'スケイリーン マッスルズ', region: 'neck', action: '首の側屈・肋骨の引き上げ（呼吸補助）', related: ['neck-stiffness', 'dizziness'], note: '前・中・後斜角筋の総称。腕神経叢が間を通ります。' },
  { en: 'Levator scapulae', abbr: '', ja: '肩甲挙筋', kana: 'レベーター スキャピュリー', region: 'neck', action: '肩甲骨の引き上げ・首の側屈', related: ['stiff-shoulders', 'neck-stiffness'], note: '「首の付け根が凝る」の主役。肩をすくめる姿勢で硬くなります。' },
  { en: 'Splenius capitis', abbr: '', ja: '頭板状筋', kana: 'スプリーニアス キャピティス', region: 'neck', action: '頭の伸展・同側回旋', related: ['neck-stiffness', 'headache'], note: '' },
  { en: 'Splenius cervicis', abbr: '', ja: '頸板状筋', kana: 'スプリーニアス サービシス', region: 'neck', action: '首の伸展・同側回旋', related: ['neck-stiffness'], note: '' },
  { en: 'Suboccipital muscles', abbr: '', ja: '後頭下筋群', kana: 'サブオクシピタル マッスルズ', region: 'neck', action: '頭部の微細な位置調整', related: ['headache', 'neck-stiffness', 'dizziness'], note: '4つの小さな筋の総称。緊張型頭痛の最重要ポイントです。' },
  { en: 'Longus colli', abbr: '', ja: '頸長筋', kana: 'ロンガス コリ', region: 'neck', action: '首の深層屈曲・安定化', related: ['neck-stiffness'], note: '深層筋。弱化すると表層筋が代償します。' },

  // ---------- 肩・肩甲帯 ----------
  { en: 'Trapezius (upper)', abbr: 'Upper traps', ja: '僧帽筋上部', kana: 'トラピージアス アッパー', region: 'shoulder', action: '肩甲骨の引き上げ', related: ['stiff-shoulders', 'neck-stiffness', 'headache'], note: '肩こりの代名詞。患者様には "upper traps" で通じます。' },
  { en: 'Trapezius (middle)', abbr: 'Mid traps', ja: '僧帽筋中部', kana: 'トラピージアス ミドル', region: 'shoulder', action: '肩甲骨の内転（寄せる）', related: ['rounded-back', 'upper-back-pain'], note: '猫背では引き伸ばされて弱化します。' },
  { en: 'Trapezius (lower)', abbr: 'Lower traps', ja: '僧帽筋下部', kana: 'トラピージアス ロウアー', region: 'shoulder', action: '肩甲骨の下制', related: ['rounded-back', 'rounded-shoulders'], note: '' },
  { en: 'Rhomboid major', abbr: '', ja: '大菱形筋', kana: 'ロンボイド メジャー', region: 'shoulder', action: '肩甲骨の内転・下方回旋', related: ['upper-back-pain', 'rounded-back'], note: '「肩甲骨の間が痛い」の主役。' },
  { en: 'Rhomboid minor', abbr: '', ja: '小菱形筋', kana: 'ロンボイド マイナー', region: 'shoulder', action: '肩甲骨の内転', related: ['upper-back-pain', 'rounded-shoulders'], note: '' },
  { en: 'Serratus anterior', abbr: '', ja: '前鋸筋', kana: 'セレイタス アンティアリア', region: 'shoulder', action: '肩甲骨の前方突出・上方回旋', related: ['rounded-shoulders', 'upper-back-pain'], note: '弱化すると翼状肩甲になります。' },
  { en: 'Deltoid', abbr: '', ja: '三角筋', kana: 'デルトイド', region: 'shoulder', action: '肩の外転・屈曲・伸展', related: [], note: '前部・中部・後部に分かれます。' },
  { en: 'Supraspinatus', abbr: '', ja: '棘上筋', kana: 'スープラスパイネイタス', region: 'shoulder', action: '肩の外転の始動', related: ['rounded-shoulders'], note: 'ローテーターカフの一つ。挟み込みが起きやすい部位です。' },
  { en: 'Infraspinatus', abbr: '', ja: '棘下筋', kana: 'インフラスパイネイタス', region: 'shoulder', action: '肩の外旋', related: ['rounded-shoulders', 'stiff-shoulders'], note: 'ローテーターカフの一つ。' },
  { en: 'Teres minor', abbr: '', ja: '小円筋', kana: 'テリーズ マイナー', region: 'shoulder', action: '肩の外旋', related: ['rounded-shoulders'], note: 'ローテーターカフの一つ。' },
  { en: 'Subscapularis', abbr: '', ja: '肩甲下筋', kana: 'サブスキャピュラリス', region: 'shoulder', action: '肩の内旋', related: ['rounded-shoulders'], note: 'ローテーターカフの一つ。巻き肩で短縮します。' },
  { en: 'Teres major', abbr: '', ja: '大円筋', kana: 'テリーズ メジャー', region: 'shoulder', action: '肩の内転・内旋・伸展', related: ['rounded-shoulders'], note: '' },

  // ---------- 胸 ----------
  { en: 'Pectoralis major', abbr: 'Pecs', ja: '大胸筋', kana: 'ペクトラリス メジャー', region: 'chest', action: '肩の水平内転・内旋', related: ['rounded-back', 'rounded-shoulders'], note: '硬くなると肩を前に引っ張ります。' },
  { en: 'Pectoralis minor', abbr: '', ja: '小胸筋', kana: 'ペクトラリス マイナー', region: 'chest', action: '肩甲骨の前方傾斜・下制', related: ['rounded-shoulders', 'stiff-shoulders'], note: '巻き肩の最重要筋。下を神経と血管が通ります。' },
  { en: 'Diaphragm', abbr: '', ja: '横隔膜', kana: 'ダイアフラム', region: 'chest', action: '呼吸の主動作筋', related: ['upper-back-pain', 'low-back-pain'], note: '浅い呼吸では働きが落ち、首の筋が代償します。' },

  // ---------- 背中・体幹 ----------
  { en: 'Latissimus dorsi', abbr: 'Lats', ja: '広背筋', kana: 'ラティシマス ドーサイ', region: 'back', action: '肩の内転・内旋・伸展', related: ['upper-back-pain', 'rounded-shoulders', 'low-back-pain'], note: '腕と骨盤をつなぐ大きな筋。' },
  { en: 'Erector spinae', abbr: '', ja: '脊柱起立筋', kana: 'イレクター スパイニー', region: 'back', action: '背骨の伸展・姿勢保持', related: ['low-back-pain', 'upper-back-pain', 'anterior-pelvic-tilt'], note: '腸肋筋・最長筋・棘筋の総称。' },
  { en: 'Iliocostalis', abbr: '', ja: '腸肋筋', kana: 'イリオコスタリス', region: 'back', action: '背骨の伸展・側屈', related: ['low-back-pain'], note: '脊柱起立筋の最外側。' },
  { en: 'Longissimus', abbr: '', ja: '最長筋', kana: 'ロンジシマス', region: 'back', action: '背骨の伸展', related: ['low-back-pain', 'upper-back-pain'], note: '脊柱起立筋の中間。' },
  { en: 'Multifidus', abbr: '', ja: '多裂筋', kana: 'マルティフィダス', region: 'back', action: '椎骨ごとの安定化', related: ['low-back-pain'], note: '深層の安定筋。腰痛で真っ先に働きが落ちます。' },
  { en: 'Quadratus lumborum', abbr: 'QL', ja: '腰方形筋', kana: 'クアドレイタス ランボーラム', region: 'back', action: '腰の側屈・骨盤の引き上げ', related: ['low-back-pain', 'anterior-pelvic-tilt', 'hip-pain'], note: '片側荷重の癖で左右差が出やすい筋。' },

  // ---------- 腹部 ----------
  { en: 'Rectus abdominis', abbr: 'Abs', ja: '腹直筋', kana: 'レクタス アブドミニス', region: 'abdomen', action: '体幹の屈曲', related: ['anterior-pelvic-tilt'], note: '' },
  { en: 'External oblique', abbr: '', ja: '外腹斜筋', kana: 'エクスターナル オブリーク', region: 'abdomen', action: '体幹の回旋・側屈', related: ['low-back-pain', 'anterior-pelvic-tilt'], note: '' },
  { en: 'Internal oblique', abbr: '', ja: '内腹斜筋', kana: 'インターナル オブリーク', region: 'abdomen', action: '体幹の回旋・側屈', related: ['low-back-pain'], note: '' },
  { en: 'Transversus abdominis', abbr: 'TVA', ja: '腹横筋', kana: 'トランスバーサス アブドミニス', region: 'abdomen', action: '腹圧を高めて体幹を安定させる', related: ['low-back-pain', 'anterior-pelvic-tilt'], note: '天然のコルセット。腰痛の再発予防に重要です。' },

  // ---------- 股関節・臀部 ----------
  { en: 'Psoas major', abbr: '', ja: '大腰筋', kana: 'ソウアス メジャー', region: 'hip', action: '股関節の屈曲・腰椎の安定', related: ['low-back-pain', 'anterior-pelvic-tilt', 'hip-pain'], note: '発音注意。頭のPは読みません。' },
  { en: 'Iliacus', abbr: '', ja: '腸骨筋', kana: 'イリアカス', region: 'hip', action: '股関節の屈曲', related: ['low-back-pain', 'anterior-pelvic-tilt'], note: '大腰筋と合わせて腸腰筋（iliopsoas）と呼びます。' },
  { en: 'Iliopsoas', abbr: '', ja: '腸腰筋', kana: 'イリオソウアス', region: 'hip', action: '股関節の屈曲', related: ['anterior-pelvic-tilt', 'low-back-pain'], note: '大腰筋＋腸骨筋の総称。座位で短縮します。' },
  { en: 'Gluteus maximus', abbr: 'Glute max', ja: '大臀筋', kana: 'グルーティアス マキシマス', region: 'hip', action: '股関節の伸展・外旋', related: ['low-back-pain', 'anterior-pelvic-tilt', 'hip-pain'], note: '体で最も大きな筋。弱化すると腰が代償します。' },
  { en: 'Gluteus medius', abbr: 'Glute med', ja: '中臀筋', kana: 'グルーティアス ミディアス', region: 'hip', action: '股関節の外転・骨盤の水平保持', related: ['hip-pain', 'low-back-pain', 'knee-pain'], note: '片足立ちの安定に必須。弱いと歩行時に骨盤が落ちます。' },
  { en: 'Gluteus minimus', abbr: '', ja: '小臀筋', kana: 'グルーティアス ミニマス', region: 'hip', action: '股関節の外転・内旋', related: ['hip-pain'], note: '' },
  { en: 'Piriformis', abbr: '', ja: '梨状筋', kana: 'ピリフォーミス', region: 'hip', action: '股関節の外旋', related: ['hip-pain', 'low-back-pain'], note: '下を坐骨神経が通ります。硬いと臀部の深い痛みに。' },
  { en: 'Tensor fasciae latae', abbr: 'TFL', ja: '大腿筋膜張筋', kana: 'テンサー ファシア ラタ', region: 'hip', action: '股関節の外転・屈曲', related: ['hip-pain', 'knee-pain'], note: '腸脛靭帯につながります。' },
  { en: 'Adductor longus', abbr: '', ja: '長内転筋', kana: 'アダクター ロンガス', region: 'hip', action: '股関節の内転', related: ['hip-pain'], note: '' },
  { en: 'Adductor magnus', abbr: '', ja: '大内転筋', kana: 'アダクター マグナス', region: 'hip', action: '股関節の内転・伸展', related: ['hip-pain'], note: '' },
  { en: 'Gracilis', abbr: '', ja: '薄筋', kana: 'グラシリス', region: 'hip', action: '股関節の内転・膝の屈曲', related: ['hip-pain', 'knee-pain'], note: '' },

  // ---------- 大腿 ----------
  { en: 'Rectus femoris', abbr: '', ja: '大腿直筋', kana: 'レクタス フェモリス', region: 'thigh', action: '膝の伸展・股関節の屈曲', related: ['anterior-pelvic-tilt', 'knee-pain'], note: '大腿四頭筋で唯一、股関節をまたぎます。' },
  { en: 'Vastus lateralis', abbr: '', ja: '外側広筋', kana: 'バスタス ラテラリス', region: 'thigh', action: '膝の伸展', related: ['knee-pain'], note: '' },
  { en: 'Vastus medialis', abbr: 'VMO', ja: '内側広筋', kana: 'バスタス メディアリス', region: 'thigh', action: '膝の伸展・膝蓋骨の内側の安定', related: ['knee-pain'], note: '弱化すると膝蓋骨が外へずれます。' },
  { en: 'Vastus intermedius', abbr: '', ja: '中間広筋', kana: 'バスタス インターミディアス', region: 'thigh', action: '膝の伸展', related: ['knee-pain'], note: '' },
  { en: 'Quadriceps', abbr: 'Quads', ja: '大腿四頭筋', kana: 'クアドリセプス', region: 'thigh', action: '膝の伸展', related: ['knee-pain'], note: '4つの筋の総称。会話では "quads" が自然です。' },
  { en: 'Biceps femoris', abbr: '', ja: '大腿二頭筋', kana: 'バイセプス フェモリス', region: 'thigh', action: '膝の屈曲・股関節の伸展', related: ['low-back-pain', 'knee-pain'], note: 'ハムストリングスの外側。' },
  { en: 'Semitendinosus', abbr: '', ja: '半腱様筋', kana: 'セミテンディノーサス', region: 'thigh', action: '膝の屈曲・股関節の伸展', related: ['low-back-pain', 'knee-pain'], note: 'ハムストリングスの内側。' },
  { en: 'Semimembranosus', abbr: '', ja: '半膜様筋', kana: 'セミメンブラノーサス', region: 'thigh', action: '膝の屈曲・股関節の伸展', related: ['low-back-pain', 'knee-pain'], note: 'ハムストリングスの内側。' },
  { en: 'Hamstrings', abbr: '', ja: 'ハムストリングス', kana: 'ハムストリングス', region: 'thigh', action: '膝の屈曲・股関節の伸展', related: ['low-back-pain', 'anterior-pelvic-tilt'], note: '3筋の総称。会話ではこの語を使います。' },
  { en: 'Sartorius', abbr: '', ja: '縫工筋', kana: 'サートリアス', region: 'thigh', action: '股関節の屈曲・外転・外旋', related: ['hip-pain', 'knee-pain'], note: '人体で最も長い筋。' },

  // ---------- 下腿・足 ----------
  { en: 'Gastrocnemius', abbr: '', ja: '腓腹筋', kana: 'ギャストロクニーミアス', region: 'lowerleg', action: '足関節の底屈・膝の屈曲', related: ['knee-pain', 'sprain'], note: 'ふくらはぎの表層。発音が難しいので要練習。' },
  { en: 'Soleus', abbr: '', ja: 'ヒラメ筋', kana: 'ソウリアス', region: 'lowerleg', action: '足関節の底屈', related: ['sprain', 'knee-pain'], note: '立位姿勢の維持に働きます。' },
  { en: 'Tibialis anterior', abbr: '', ja: '前脛骨筋', kana: 'ティビアリス アンティアリア', region: 'lowerleg', action: '足関節の背屈', related: ['sprain'], note: 'すねの前。' },
  { en: 'Tibialis posterior', abbr: '', ja: '後脛骨筋', kana: 'ティビアリス ポスティアリア', region: 'lowerleg', action: '足関節の底屈・内がえし', related: ['sprain'], note: '土踏まずを支えます。' },
  { en: 'Peroneus longus', abbr: 'Fibularis longus', ja: '長腓骨筋', kana: 'ペロニアス ロンガス', region: 'lowerleg', action: '足関節の外がえし', related: ['sprain'], note: '内がえしの捻挫で損傷しやすい筋。' },
  { en: 'Peroneus brevis', abbr: 'Fibularis brevis', ja: '短腓骨筋', kana: 'ペロニアス ブレビス', region: 'lowerleg', action: '足関節の外がえし', related: ['sprain'], note: '' },
  { en: 'Popliteus', abbr: '', ja: '膝窩筋', kana: 'ポプリティアス', region: 'lowerleg', action: '膝のロック解除', related: ['knee-pain'], note: '膝裏の深部にある小さな筋。' },
  { en: 'Plantar fascia', abbr: '', ja: '足底筋膜', kana: 'プランター ファシア', region: 'lowerleg', action: '足のアーチの支持', related: ['sprain'], note: '筋ではなく腱膜。足底腱膜炎 = plantar fasciitis。' },

  // ---------- 上肢 ----------
  { en: 'Biceps brachii', abbr: 'Biceps', ja: '上腕二頭筋', kana: 'バイセプス ブレイキアイ', region: 'arm', action: '肘の屈曲・前腕の回外', related: [], note: '' },
  { en: 'Triceps brachii', abbr: 'Triceps', ja: '上腕三頭筋', kana: 'トライセプス ブレイキアイ', region: 'arm', action: '肘の伸展', related: [], note: '' },
  { en: 'Brachioradialis', abbr: '', ja: '腕橈骨筋', kana: 'ブレイキオレイディアリス', region: 'arm', action: '肘の屈曲', related: [], note: '' },
  { en: 'Wrist extensors', abbr: '', ja: '手関節伸筋群', kana: 'リスト エクステンサーズ', region: 'arm', action: '手首の背屈', related: ['stiff-shoulders'], note: 'マウス操作で酷使されます。テニス肘の原因筋。' },
  { en: 'Wrist flexors', abbr: '', ja: '手関節屈筋群', kana: 'リスト フレクサーズ', region: 'arm', action: '手首の掌屈', related: [], note: 'ゴルフ肘の原因筋。' },

  // ---------- 頭部・顎 ----------
  { en: 'Temporalis', abbr: '', ja: '側頭筋', kana: 'テンポラリス', region: 'head', action: '顎を閉じる', related: ['headache'], note: 'こめかみ。食いしばりで硬くなり頭痛の原因に。' },
  { en: 'Masseter', abbr: '', ja: '咬筋', kana: 'マセター', region: 'head', action: '顎を閉じる', related: ['headache'], note: '人体で最も強い筋の一つ。' },
  { en: 'Occipitofrontalis', abbr: '', ja: '後頭前頭筋', kana: 'オクシピトフロンタリス', region: 'head', action: '眉を上げる・頭皮を動かす', related: ['headache'], note: '' }
];

// 施術で使う英語表現（筋肉と一緒に覚えると現場で強い）
export const muscleTalk = [
  { en: 'This muscle is called the upper trapezius.', ja: 'この筋肉は僧帽筋上部といいます。' },
  { en: 'It runs from your neck to your shoulder blade.', ja: '首から肩甲骨まで走っています。' },
  { en: 'Its job is to lift your shoulder.', ja: '肩を持ち上げるのが役割です。' },
  { en: 'This one is tight, and this one is weak.', ja: 'こちらは硬く、こちらは弱くなっています。' },
  { en: 'I am going to release this muscle now.', ja: 'これからこの筋肉をゆるめていきます。' },
  { en: 'You will feel a stretch along here.', ja: 'ここに沿って伸びを感じます。' },
  { en: 'This muscle refers pain to your head.', ja: 'この筋肉は頭に痛みを飛ばします。', note: '関連痛 = referred pain。' },
  { en: 'That is called referred pain.', ja: 'それを関連痛といいます。' },
  { en: 'The tight spot is called a trigger point.', ja: 'その硬いところをトリガーポイントといいます。' }
];

export function muscleByName(name) {
  return muscles.find((m) => m.en === name || m.abbr === name);
}

export function musclesForSymptom(symptomId) {
  return muscles.filter((m) => m.related.includes(symptomId));
}
