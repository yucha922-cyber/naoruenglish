// 症状別の英会話データ
// patientSays: 患者様がその症状をどう表現するか
// questions: その症状特有の問診
// findings: 状態説明のフレーズ
// advice: セルフケア指導
// redFlags: 施術を控えて医療機関をすすめるべきサイン

export const symptoms = [
  {
    id: 'stiff-shoulders',
    name: '肩こり',
    nameEn: 'Stiff Shoulders',
    icon: '💢',
    category: '上半身',
    terminology: '英語圏には「肩こり」に完全に対応する言葉がありません。"stiff shoulders" か "shoulder tension" が最も近い表現です。"My shoulders are tight" もよく使われます。',
    patientSays: [
      { en: 'My shoulders are always stiff.', ja: '肩がいつも凝っています。' },
      { en: 'I have a lot of tension in my shoulders.', ja: '肩がとても張っています。' },
      { en: 'My shoulders feel heavy.', ja: '肩が重いです。' },
      { en: 'It feels like I\'m carrying a weight on my shoulders.', ja: '肩に重りを乗せているような感じです。' },
      { en: 'I get knots right here.', ja: 'ここにしこりができます。' }
    ],
    questions: [
      { en: 'Is it stiff on both sides, or mostly one side?', ja: '両肩ですか、片側が中心ですか。' },
      { en: 'Does the stiffness go up into your neck?', ja: '凝りは首まで上がってきますか。' },
      { en: 'Do you get headaches along with it?', ja: '一緒に頭痛も起きますか。' },
      { en: 'Do you carry a bag on one shoulder?', ja: 'カバンをいつも同じ肩にかけますか。' },
      { en: 'How many hours a day are you at a desk?', ja: '1日何時間デスクに向かいますか。' },
      { en: 'Is your mouse hand the same side as the pain?', ja: 'マウスを持つ手と痛む側は同じですか。' },
      { en: 'Does it get worse by the end of the day?', ja: '夕方になると悪化しますか。' }
    ],
    findings: [
      { en: 'Your upper trapezius is very tight on both sides.', ja: '僧帽筋上部が両側とも硬くなっています。' },
      { en: 'The muscle that lifts your shoulder blade is overworking.', ja: '肩甲骨を引き上げる筋肉が働きすぎています。' },
      { en: 'Your head sits forward, so these muscles hold it up all day.', ja: '頭が前に出ているため、この筋肉が一日中支えています。' },
      { en: 'Your head weighs about five kilograms.', ja: '頭の重さは約5キロあります。' },
      { en: 'When it moves forward, the load on your neck triples.', ja: '頭が前に出ると、首への負担は3倍になります。' },
      { en: 'The muscles between your shoulder blades have become weak.', ja: '肩甲骨の間の筋肉が弱くなっています。' }
    ],
    muscles: ['Trapezius (upper)', 'Levator scapulae', 'Rhomboid major', 'Sternocleidomastoid', 'Pectoralis minor'],
    advice: [
      { en: 'Roll your shoulders backward ten times, every hour.', ja: '1時間ごとに肩を後ろに10回回してください。' },
      { en: 'Raise your screen so you look straight ahead, not down.', ja: '画面を上げて、下ではなく正面を見るようにしてください。' },
      { en: 'Switch your bag to the other shoulder sometimes.', ja: 'カバンを時々反対の肩にかけてください。' },
      { en: 'A warm towel on your shoulders for ten minutes helps a lot.', ja: '肩に温かいタオルを10分当てるとかなり楽になります。' },
      { en: 'Try not to sleep with your arm above your head.', ja: '腕を頭の上に上げて寝ないようにしてください。' }
    ],
    redFlags: [
      { en: 'Numbness or weakness going down into your hand', ja: '手まで下りるしびれや脱力' },
      { en: 'Pain that started after a fall or car accident', ja: '転倒や交通事故の後に始まった痛み' },
      { en: 'Sudden severe shoulder pain with chest discomfort', ja: '胸の違和感を伴う突然の激しい肩の痛み' }
    ]
  },

  {
    id: 'low-back-pain',
    name: '腰痛',
    nameEn: 'Lower Back Pain',
    icon: '🦴',
    category: '体幹',
    terminology: '"lower back" が腰です。"waist" はウエスト（くびれ）を指すので、腰痛の意味では使いません。"My waist hurts" は通じません。',
    patientSays: [
      { en: 'I have lower back pain.', ja: '腰が痛いです。' },
      { en: 'My lower back is killing me.', ja: '腰がものすごく痛いです。' },
      { en: 'I threw my back out.', ja: 'ぎっくり腰になりました。' },
      { en: 'It hurts when I stand up from a chair.', ja: '椅子から立つときに痛みます。' },
      { en: 'The pain goes down my leg.', ja: '痛みが脚に下りてきます。' }
    ],
    questions: [
      { en: 'Does the pain stay in your back, or go down your leg?', ja: '痛みは腰だけですか、脚まで下りますか。' },
      { en: 'How far down does it go? To the knee, or past it?', ja: 'どこまで下りますか。膝まで、それより下ですか。' },
      { en: 'Is it worse when you bend forward or when you lean back?', ja: '前にかがむのと反るのと、どちらがつらいですか。' },
      { en: 'Do you have trouble getting out of bed in the morning?', ja: '朝、起き上がるのがつらいですか。' },
      { en: 'Do you lift heavy things at work?', ja: '仕事で重いものを持ちますか。' },
      { en: 'Does coughing or sneezing make it hurt?', ja: '咳やくしゃみで痛みますか。' },
      { en: 'Any change in your bladder or bowel control?', ja: '排尿や排便のコントロールに変化はありますか。', note: '答えが「はい」なら施術せず、すぐ医療機関へ。' }
    ],
    findings: [
      { en: 'The muscles along your spine are very tight.', ja: '背骨に沿った筋肉がとても硬くなっています。' },
      { en: 'Your hip flexors are short from sitting all day.', ja: '一日中座っているため、股関節の前の筋肉が縮んでいます。' },
      { en: 'Tight hip flexors pull your pelvis forward and stress your lower back.', ja: '股関節前面が硬いと骨盤が前に引かれ、腰に負担がかかります。' },
      { en: 'Your deep core muscles are not supporting your spine well.', ja: '深部の体幹筋が背骨をうまく支えられていません。' },
      { en: 'The muscle on the side of your waist is tighter on the right.', ja: '腰の横の筋肉が右側で硬くなっています。' },
      { en: 'Your glutes are weak, so your lower back does their job.', ja: 'お尻の筋肉が弱く、腰がその役割を代わりに担っています。' }
    ],
    muscles: ['Erector spinae', 'Quadratus lumborum', 'Psoas major', 'Iliacus', 'Gluteus medius', 'Multifidus', 'Piriformis'],
    advice: [
      { en: 'Bend your knees when you lift, not your back.', ja: '持ち上げるときは腰ではなく膝を曲げてください。' },
      { en: 'Stand up and walk for two minutes every thirty minutes.', ja: '30分ごとに2分立って歩いてください。' },
      { en: 'Sleep on your side with a pillow between your knees.', ja: '横向きで膝の間に枕を挟んで寝てください。' },
      { en: 'If you sleep on your back, put a pillow under your knees.', ja: '仰向けなら膝の下に枕を入れてください。' },
      { en: 'Avoid sitting on a soft, low sofa for long periods.', ja: '柔らかく低いソファに長時間座るのは避けてください。' },
      { en: 'Gentle walking is better than complete rest.', ja: '完全な安静よりも、ゆっくり歩くほうが良いです。' }
    ],
    redFlags: [
      { en: 'Loss of bladder or bowel control', ja: '排尿・排便のコントロールができない' },
      { en: 'Numbness around the inner thighs or groin', ja: '内ももや股間周辺のしびれ' },
      { en: 'Severe leg weakness', ja: '脚の強い脱力' },
      { en: 'Unexplained weight loss with night pain', ja: '原因不明の体重減少と夜間痛' },
      { en: 'Fever with back pain', ja: '発熱を伴う腰痛' }
    ]
  },

  {
    id: 'neck-stiffness',
    name: '首こり',
    nameEn: 'Neck Stiffness',
    icon: '🧣',
    category: '上半身',
    terminology: '"stiff neck" が一般的です。寝違えは "I slept wrong" または "I have a crick in my neck" と表現されます。',
    patientSays: [
      { en: 'I have a stiff neck.', ja: '首が凝っています。' },
      { en: 'I can\'t turn my head to the left.', ja: '首を左に回せません。' },
      { en: 'I slept wrong last night.', ja: '昨夜、寝違えました。' },
      { en: 'My neck feels tight all the time.', ja: '首がずっと張っています。' },
      { en: 'It hurts at the base of my skull.', ja: '後頭部の付け根が痛みます。' }
    ],
    questions: [
      { en: 'Can you turn your head all the way to both sides?', ja: '首は左右とも最後まで回せますか。' },
      { en: 'Which direction is the most limited?', ja: 'どの方向が一番動かしにくいですか。' },
      { en: 'Did you wake up with it, or did it build up slowly?', ja: '朝起きたらでしたか、少しずつでしたか。' },
      { en: 'What kind of pillow do you use? High or low?', ja: 'どんな枕を使っていますか。高いですか低いですか。' },
      { en: 'Do you feel any dizziness with the neck pain?', ja: '首の痛みと一緒にめまいはありますか。' },
      { en: 'Do you get pain behind your eyes?', ja: '目の奥が痛くなりますか。' }
    ],
    findings: [
      { en: 'The small muscles at the base of your skull are very tight.', ja: '後頭部の付け根の小さな筋肉がとても硬くなっています。' },
      { en: 'These muscles connect directly to the nerves that cause headaches.', ja: 'これらの筋肉は頭痛を起こす神経と直接つながっています。' },
      { en: 'Your neck has lost its natural curve.', ja: '首の自然なカーブが失われています。', note: 'ストレートネック。英語では straight neck ではなく "loss of cervical curve" が正確です。' },
      { en: 'The muscle on the side of your neck is shortened.', ja: '首の横の筋肉が短くなっています。' },
      { en: 'Your deep neck muscles are weak, so the surface ones take over.', ja: '深部の首の筋肉が弱く、表層の筋肉が代わりに働いています。' }
    ],
    muscles: ['Sternocleidomastoid', 'Levator scapulae', 'Suboccipital muscles', 'Scalene muscles', 'Splenius capitis', 'Trapezius (upper)'],
    advice: [
      { en: 'Your pillow should keep your neck in line with your spine.', ja: '枕は首と背骨が一直線になる高さにしてください。' },
      { en: 'A pillow that is too high is a common cause.', ja: '枕が高すぎるのはよくある原因です。' },
      { en: 'Gently tuck your chin in, hold for five seconds. Repeat ten times.', ja: 'あごを軽く引いて5秒キープ。10回繰り返してください。' },
      { en: 'Do not crack your own neck.', ja: '自分で首を鳴らさないでください。' },
      { en: 'Keep your neck warm, especially with air conditioning.', ja: '特にエアコンの下では首を冷やさないでください。' }
    ],
    redFlags: [
      { en: 'Severe headache unlike any you have had before', ja: '今までにない激しい頭痛' },
      { en: 'Neck stiffness with high fever', ja: '高熱を伴う首のこわばり' },
      { en: 'Dizziness or visual changes when turning the neck', ja: '首を回すとめまいや視覚の変化が出る' },
      { en: 'Pain following a car accident (whiplash)', ja: '交通事故後の痛み（むち打ち）' }
    ]
  },

  {
    id: 'rounded-back',
    name: '猫背',
    nameEn: 'Rounded Upper Back',
    icon: '🐈',
    category: '姿勢',
    terminology: '「猫背」を直訳した "cat back" は通じません。"rounded upper back"、"slouched posture"、専門的には "kyphotic posture" と言います。"hunchback" は侮辱的に響くので患者様には使わないでください。',
    patientSays: [
      { en: 'I have really bad posture.', ja: '姿勢がとても悪いです。' },
      { en: 'I slouch a lot.', ja: 'よく猫背になります。' },
      { en: 'People tell me I hunch over.', ja: '背中が丸いとよく言われます。' },
      { en: 'I can\'t sit up straight for long.', ja: '長くまっすぐ座っていられません。' }
    ],
    questions: [
      { en: 'When did you first notice your posture changing?', ja: 'いつ頃から姿勢が気になり始めましたか。' },
      { en: 'Can you straighten up when you think about it?', ja: '意識すればまっすぐになれますか。', note: '意識で戻るかどうかで、機能的か構造的かを判断できます。' },
      { en: 'Does it feel tiring to hold yourself upright?', ja: 'まっすぐ保つのは疲れますか。' },
      { en: 'Do you have any pain, or is it mainly the appearance?', ja: '痛みはありますか、それとも主に見た目が気になりますか。' },
      { en: 'How is your chair and desk height at work?', ja: '職場の椅子と机の高さはどうですか。' },
      { en: 'Do you take deep breaths easily?', ja: '深呼吸はしやすいですか。' }
    ],
    findings: [
      { en: 'Your upper back is rounded forward.', ja: '背中が前に丸くなっています。' },
      { en: 'Your chest muscles are tight and short.', ja: '胸の筋肉が硬く縮んでいます。' },
      { en: 'The muscles between your shoulder blades are stretched and weak.', ja: '肩甲骨の間の筋肉は伸ばされて弱くなっています。' },
      { en: 'This is a tug of war, and the front is winning.', ja: '前と後ろの綱引きで、前が勝っている状態です。', note: 'わかりやすい比喩。よく伝わります。' },
      { en: 'A rounded back also limits how deeply you can breathe.', ja: '背中が丸いと呼吸も浅くなります。' },
      { en: 'We need to release the front and strengthen the back.', ja: '前をゆるめて、後ろを鍛える必要があります。' }
    ],
    muscles: ['Pectoralis major', 'Pectoralis minor', 'Rhomboid major', 'Rhomboid minor', 'Trapezius (middle)', 'Trapezius (lower)', 'Erector spinae', 'Serratus anterior'],
    advice: [
      { en: 'Stand in a doorway and stretch your chest for thirty seconds.', ja: 'ドア枠で胸を30秒ストレッチしてください。' },
      { en: 'Squeeze your shoulder blades together, hold five seconds, ten times.', ja: '肩甲骨を寄せて5秒キープ、10回行ってください。' },
      { en: 'Sit with your back against the chair, not on the edge.', ja: '椅子の背もたれに背中をつけて座ってください。浅く座らないように。' },
      { en: 'Put your feet flat on the floor when you sit.', ja: '座るときは足裏を床につけてください。' },
      { en: 'Set a reminder on your phone to check your posture.', ja: 'スマホでリマインダーを設定して姿勢を確認しましょう。' }
    ],
    redFlags: [
      { en: 'A sharp, fixed curve that does not change when standing tall', ja: 'まっすぐ立っても変わらない鋭く固定された曲がり' },
      { en: 'Rapidly worsening curve in an older adult', ja: '高齢の方で急速に進む背中の丸まり' },
      { en: 'Back pain with a history of osteoporosis', ja: '骨粗しょう症の既往がある方の背部痛' }
    ]
  },

  {
    id: 'rounded-shoulders',
    name: '巻き肩',
    nameEn: 'Rounded Shoulders',
    icon: '🤲',
    category: '姿勢',
    terminology: '"rounded shoulders" が定訳です。"protracted shoulders" は専門的な言い方。猫背（背中全体が丸い）とは区別して説明できると信頼されます。',
    patientSays: [
      { en: 'My shoulders roll forward.', ja: '肩が前に入っています。' },
      { en: 'My shoulders look narrow in photos.', ja: '写真で肩幅が狭く見えます。' },
      { en: 'I feel closed up in my chest.', ja: '胸が閉じている感じがします。' }
    ],
    questions: [
      { en: 'Do you notice it more on one side?', ja: '片側のほうが強いと感じますか。' },
      { en: 'Do you sleep on your side curled up?', ja: '横向きで丸まって寝ますか。' },
      { en: 'Do you drive a lot?', ja: '運転する時間は長いですか。' },
      { en: 'Do you do a lot of push-ups or bench press?', ja: '腕立てやベンチプレスを多くしますか。', note: '胸のトレーニング偏重も原因になります。' },
      { en: 'Can you comfortably clasp your hands behind your back?', ja: '背中で手を組むのは楽にできますか。' }
    ],
    findings: [
      { en: 'Your shoulders sit forward of your ears.', ja: '肩が耳より前に出ています。' },
      { en: 'A small muscle under your chest is pulling your shoulder blade forward.', ja: '胸の奥の小さな筋肉が肩甲骨を前に引っ張っています。', note: '小胸筋のこと。' },
      { en: 'Your shoulder blades are sliding away from your spine.', ja: '肩甲骨が背骨から離れていっています。' },
      { en: 'This narrows the space in your shoulder joint.', ja: 'これによって肩関節の空間が狭くなります。' },
      { en: 'That is why raising your arm feels tight.', ja: 'それが腕を上げると詰まる感じの原因です。' }
    ],
    muscles: ['Pectoralis minor', 'Pectoralis major', 'Serratus anterior', 'Rhomboid minor', 'Trapezius (lower)', 'Subscapularis', 'Latissimus dorsi'],
    advice: [
      { en: 'Open your chest against a wall corner for thirty seconds.', ja: '壁の角で胸を30秒開いてください。' },
      { en: 'Lie on a rolled towel along your spine for five minutes.', ja: '丸めたタオルを背骨に沿わせて5分寝てください。' },
      { en: 'When you sit, think about your chest, not your shoulders.', ja: '座るときは肩ではなく胸を意識してください。', note: '「胸を開く」の意識のほうが「肩を引く」より自然な姿勢になります。' },
      { en: 'Balance your workouts. Pull as much as you push.', ja: 'トレーニングは押す運動と引く運動を同じだけ行ってください。' }
    ],
    redFlags: [
      { en: 'Numbness in the arm when raising it overhead', ja: '腕を上げるとしびれる' },
      { en: 'Cold or pale hands', ja: '手が冷たい、青白い' },
      { en: 'Shoulder that catches or locks', ja: '肩が引っかかる、ロックする' }
    ]
  },

  {
    id: 'anterior-pelvic-tilt',
    name: '反り腰',
    nameEn: 'Anterior Pelvic Tilt',
    icon: '🩰',
    category: '姿勢',
    terminology: '専門的には "anterior pelvic tilt"、一般的には "swayback" や "arched lower back" と言います。患者様には "your lower back curves too much" が最も伝わります。',
    patientSays: [
      { en: 'My lower back arches a lot.', ja: '腰がとても反っています。' },
      { en: 'My stomach sticks out even though I\'m not overweight.', ja: '太っていないのにお腹が出ています。' },
      { en: 'It hurts to stand for a long time.', ja: '長く立っていると痛くなります。' },
      { en: 'I can fit my whole hand under my back when I lie down.', ja: '仰向けで寝ると腰の下に手がすっぽり入ります。' }
    ],
    questions: [
      { en: 'Is standing worse than sitting for you?', ja: '座るより立っているほうがつらいですか。', note: '反り腰では立位のほうがつらいことが多いです。' },
      { en: 'Do you wear high heels often?', ja: 'ヒールをよく履きますか。' },
      { en: 'Have you been pregnant?', ja: '妊娠の経験はありますか。' },
      { en: 'Do you feel tight in the front of your hips?', ja: '股関節の前が張る感じはありますか。' },
      { en: 'Can you flatten your back against the wall?', ja: '壁に腰をつけることはできますか。' }
    ],
    findings: [
      { en: 'Your pelvis is tilted forward, like a bowl spilling water in front.', ja: '骨盤が前に傾いています。ボウルの水が前にこぼれる形です。', note: '骨盤の傾きを説明する定番の比喩。' },
      { en: 'The muscles in the front of your hip are short and tight.', ja: '股関節前面の筋肉が短く硬くなっています。' },
      { en: 'Your abdominal muscles and glutes are not holding the pelvis back.', ja: '腹筋とお尻の筋肉が骨盤を後ろに保てていません。' },
      { en: 'The extra curve compresses the joints in your lower back.', ja: '反りが強いと腰の関節が圧迫されます。' },
      { en: 'That is why standing still is harder than walking.', ja: 'それが、歩くより立ち止まっているほうがつらい理由です。' }
    ],
    muscles: ['Psoas major', 'Iliacus', 'Rectus femoris', 'Erector spinae', 'Quadratus lumborum', 'Rectus abdominis', 'Gluteus maximus', 'Hamstrings'],
    advice: [
      { en: 'Stretch the front of your hip in a lunge position, thirty seconds each side.', ja: 'ランジの姿勢で股関節前面を左右30秒ずつ伸ばしてください。' },
      { en: 'Do a glute bridge, ten times, twice a day.', ja: 'お尻上げを1日2回、10回ずつ行ってください。' },
      { en: 'When you stand for a long time, put one foot on a low step.', ja: '長く立つときは片足を低い台に乗せてください。' },
      { en: 'Try to reduce how often you wear high heels.', ja: 'ヒールを履く頻度を減らしてみてください。' }
    ],
    redFlags: [
      { en: 'Leg pain with numbness when standing or walking', ja: '立つ・歩くと脚にしびれを伴う痛みが出る' },
      { en: 'Pain that improves only when bending forward', ja: '前かがみのときだけ楽になる痛み' },
      { en: 'Recent significant trauma to the pelvis', ja: '骨盤への最近の大きな外傷' }
    ]
  },

  {
    id: 'upper-back-pain',
    name: '背中の痛み',
    nameEn: 'Upper & Mid Back Pain',
    icon: '🎒',
    category: '体幹',
    terminology: '"upper back"（肩甲骨まわり）と "mid back"（その下）を分けると正確に伝わります。"between my shoulder blades" は患者様がよく使う表現です。',
    patientSays: [
      { en: 'I have pain between my shoulder blades.', ja: '肩甲骨の間が痛いです。' },
      { en: 'My upper back aches all day.', ja: '背中の上のほうが一日中痛みます。' },
      { en: 'It hurts when I take a deep breath.', ja: '深呼吸すると痛みます。' },
      { en: 'There\'s a burning feeling in my back.', ja: '背中に焼けるような感じがあります。' }
    ],
    questions: [
      { en: 'Is the pain in the middle or off to one side?', ja: '痛みは真ん中ですか、片側に寄っていますか。' },
      { en: 'Does it hurt more when you breathe in deeply?', ja: '深く息を吸うと痛みが強くなりますか。' },
      { en: 'Does the pain wrap around to the front?', ja: '痛みが前に回り込みますか。' },
      { en: 'Do you carry a heavy backpack?', ja: '重いリュックを背負いますか。' },
      { en: 'Have you had any chest problems or a bad cough?', ja: '胸の疾患やひどい咳はありましたか。' }
    ],
    findings: [
      { en: 'The muscles between your shoulder blades are working overtime.', ja: '肩甲骨の間の筋肉が過剰に働いています。' },
      { en: 'Your mid back has lost some rotation.', ja: '背中のひねる動きが減っています。' },
      { en: 'When your mid back does not rotate, your neck and lower back do it instead.', ja: '背中がひねれないと、首と腰がその分を担うことになります。' },
      { en: 'The joints between your ribs and spine are stiff.', ja: '肋骨と背骨の間の関節が硬くなっています。' },
      { en: 'Shallow breathing keeps these muscles from relaxing.', ja: '呼吸が浅いと、これらの筋肉は緩みません。' }
    ],
    muscles: ['Rhomboid major', 'Rhomboid minor', 'Trapezius (middle)', 'Erector spinae', 'Latissimus dorsi', 'Serratus anterior', 'Diaphragm'],
    advice: [
      { en: 'Sit in a chair and gently twist to each side, ten times.', ja: '椅子に座って左右にゆっくりひねる動きを10回行ってください。' },
      { en: 'Practice breathing into your ribs, not just your chest.', ja: '胸だけでなく肋骨を広げる呼吸を練習してください。' },
      { en: 'Use both straps of your backpack.', ja: 'リュックは両方の肩紐を使ってください。' },
      { en: 'Place a tennis ball against the wall and roll the tight spot.', ja: 'テニスボールを壁との間に挟んで硬いところをほぐしてください。' }
    ],
    redFlags: [
      { en: 'Back pain with shortness of breath or chest pain', ja: '息切れや胸痛を伴う背部痛' },
      { en: 'A rash or blisters in a band across the back', ja: '帯状に出る発疹や水疱' },
      { en: 'Pain that is worse at night and does not change with position', ja: '夜間に強く、体位で変わらない痛み' }
    ]
  },

  {
    id: 'headache',
    name: '頭痛',
    nameEn: 'Headache',
    icon: '🤕',
    category: '頭頸部',
    terminology: '"tension headache"（緊張型頭痛）は筋肉由来で施術対象になりやすいです。"migraine"（片頭痛）は原因が異なるため、強い施術は避けてください。この2つの区別は必ず確認しましょう。',
    patientSays: [
      { en: 'I get headaches almost every day.', ja: 'ほぼ毎日頭痛があります。' },
      { en: 'It feels like a tight band around my head.', ja: '頭を締めつけられる感じです。', note: '緊張型頭痛の典型的な表現。' },
      { en: 'The pain starts in my neck and goes up.', ja: '首から始まって上に上がってきます。' },
      { en: 'I get migraines.', ja: '片頭痛持ちです。' },
      { en: 'Light and sound make it worse.', ja: '光と音でひどくなります。', note: '片頭痛の特徴。' }
    ],
    questions: [
      { en: 'Where exactly does the headache start?', ja: '頭痛はどこから始まりますか。' },
      { en: 'Does it feel like pressure, or does it throb?', ja: '締めつける感じですか、脈打つ感じですか。', note: 'pressure = 緊張型 / throbbing = 片頭痛の傾向。' },
      { en: 'Is it on one side or both sides?', ja: '片側ですか、両側ですか。' },
      { en: 'Do you feel sick to your stomach with it?', ja: '一緒に吐き気はありますか。' },
      { en: 'Are you sensitive to light or sound during a headache?', ja: '頭痛のとき、光や音に敏感になりますか。' },
      { en: 'How many days a month do you have a headache?', ja: '月に何日くらい頭痛がありますか。' },
      { en: 'How often do you take painkillers?', ja: '痛み止めはどのくらいの頻度で飲みますか。', note: '薬物乱用頭痛の確認。' },
      { en: 'Does massaging your neck help at all?', ja: '首をほぐすと少し楽になりますか。' }
    ],
    findings: [
      { en: 'The muscles at the base of your skull are very tight.', ja: '後頭部の付け根の筋肉がとても硬くなっています。' },
      { en: 'Nerves that supply the back of your head pass through these muscles.', ja: '後頭部に向かう神経がこの筋肉を通っています。' },
      { en: 'When the muscles tighten, they can irritate those nerves.', ja: '筋肉が硬くなると、その神経を刺激することがあります。' },
      { en: 'This type is called a tension headache.', ja: 'このタイプは緊張型頭痛と呼ばれます。' },
      { en: 'Tension headaches often respond well to manual therapy.', ja: '緊張型頭痛は手技療法で改善しやすいです。' },
      { en: 'Migraines are different. I will work gently and avoid triggering one.', ja: '片頭痛は別のものです。誘発しないようやさしく行います。' }
    ],
    muscles: ['Suboccipital muscles', 'Trapezius (upper)', 'Sternocleidomastoid', 'Splenius capitis', 'Temporalis', 'Masseter', 'Levator scapulae'],
    advice: [
      { en: 'Drink more water. Dehydration is a common trigger.', ja: '水分を多く取ってください。脱水はよくある誘因です。' },
      { en: 'Keep a headache diary for two weeks.', ja: '2週間、頭痛の記録をつけてみてください。' },
      { en: 'Press gently at the base of your skull for one minute.', ja: '後頭部の付け根を1分間やさしく押してください。' },
      { en: 'Take screen breaks every twenty minutes.', ja: '20分ごとに画面から目を離してください。' },
      { en: 'Do you clench your teeth? Try to keep your jaw loose.', ja: '歯を食いしばっていませんか。あごの力を抜いてください。' }
    ],
    redFlags: [
      { en: 'The worst headache of your life, starting suddenly', ja: '突然始まった、人生で最悪の頭痛' },
      { en: 'Headache with fever and a stiff neck', ja: '発熱と首のこわばりを伴う頭痛' },
      { en: 'Headache after a head injury', ja: '頭部外傷後の頭痛' },
      { en: 'Headache with confusion, slurred speech, or weakness', ja: '混乱、ろれつが回らない、脱力を伴う頭痛' },
      { en: 'A new headache pattern after age fifty', ja: '50歳以降に新しく出た頭痛' }
    ]
  },

  {
    id: 'dizziness',
    name: 'めまい',
    nameEn: 'Dizziness',
    icon: '💫',
    category: '頭頸部',
    terminology: '"dizzy"（ふらつく）と "vertigo"（回転性めまい）は区別されます。"The room is spinning" なら vertigo です。原因が内耳や脳の場合があるため、慎重な対応が必要な症状です。',
    patientSays: [
      { en: 'I feel dizzy a lot.', ja: 'よくめまいがします。' },
      { en: 'The room spins when I turn over in bed.', ja: 'ベッドで寝返りを打つと部屋が回ります。', note: '良性発作性頭位めまい症の典型。医療機関へ。' },
      { en: 'I feel lightheaded when I stand up.', ja: '立ち上がるとふらっとします。' },
      { en: 'I feel unsteady on my feet.', ja: '足元がふらつきます。' }
    ],
    questions: [
      { en: 'Does the room spin, or do you just feel unsteady?', ja: '部屋が回りますか、ふらつく感じだけですか。', note: '最も重要な鑑別の質問。' },
      { en: 'How long does it last? Seconds, minutes, or hours?', ja: 'どのくらい続きますか。数秒、数分、数時間。' },
      { en: 'Does it happen when you turn your head?', ja: '首を動かしたときに起きますか。' },
      { en: 'Does it happen when you stand up quickly?', ja: '急に立ち上がったときに起きますか。' },
      { en: 'Any ringing in your ears or hearing changes?', ja: '耳鳴りや聞こえ方の変化はありますか。' },
      { en: 'Have you seen a doctor about the dizziness?', ja: 'めまいで医療機関を受診しましたか。', note: '未受診なら受診をすすめてください。' },
      { en: 'Do you have neck stiffness at the same time?', ja: '同時に首のこりもありますか。' }
    ],
    findings: [
      { en: 'Neck tension can sometimes contribute to a feeling of unsteadiness.', ja: '首の緊張がふらつき感に関係することがあります。', note: '"can sometimes" と控えめに。断定は避けます。' },
      { en: 'Your neck muscles send balance information to your brain.', ja: '首の筋肉は脳にバランスの情報を送っています。' },
      { en: 'When they are very tight, that information can get noisy.', ja: '筋肉がとても硬いと、その情報が乱れることがあります。' },
      { en: 'But dizziness has many causes, and I cannot diagnose it.', ja: 'ただ、めまいの原因は多く、私は診断できません。' },
      { en: 'I recommend seeing a doctor to rule out other causes.', ja: '他の原因を除外するため、受診をおすすめします。' },
      { en: 'Today I will work gently on your neck and shoulders only.', ja: '本日は首と肩をやさしくほぐすだけにします。' }
    ],
    muscles: ['Suboccipital muscles', 'Sternocleidomastoid', 'Scalene muscles', 'Trapezius (upper)', 'Splenius capitis'],
    advice: [
      { en: 'Stand up slowly, especially in the morning.', ja: '特に朝は、ゆっくり立ち上がってください。' },
      { en: 'Sit on the edge of the bed for a few seconds before standing.', ja: '立つ前にベッドの端で数秒座ってください。' },
      { en: 'Stay hydrated throughout the day.', ja: '一日を通して水分を取ってください。' },
      { en: 'Please do not drive if you feel dizzy.', ja: 'めまいがあるときは運転しないでください。' }
    ],
    redFlags: [
      { en: 'Dizziness with double vision or trouble speaking', ja: '複視やろれつが回らないことを伴うめまい' },
      { en: 'Dizziness with numbness or weakness on one side', ja: '片側のしびれや脱力を伴うめまい' },
      { en: 'Sudden hearing loss', ja: '突然の難聴' },
      { en: 'Fainting or near-fainting', ja: '失神または失神しかけ' },
      { en: 'Severe headache with dizziness', ja: '激しい頭痛を伴うめまい' }
    ]
  },

  {
    id: 'hip-pain',
    name: '股関節の痛み',
    nameEn: 'Hip Pain',
    icon: '🦵',
    category: '下半身',
    terminology: '英語の "hip" は股関節だけでなく腰の横あたりも指すため、必ず指さして場所を確認してください。"groin"（鼠径部）との区別も重要です。',
    patientSays: [
      { en: 'My hip hurts.', ja: '股関節が痛いです。' },
      { en: 'I feel a pinch in the front of my hip when I sit.', ja: '座ると股関節の前が詰まる感じがします。' },
      { en: 'It hurts on the outside of my hip when I lie on that side.', ja: 'その側を下にして寝ると股関節の外側が痛みます。' },
      { en: 'My hip clicks when I walk.', ja: '歩くと股関節が鳴ります。' },
      { en: 'It hurts deep in my buttock.', ja: 'お尻の奥が痛みます。' }
    ],
    questions: [
      { en: 'Could you point to exactly where it hurts?', ja: '痛むところを正確に指さしてもらえますか。', note: '股関節では特に重要です。' },
      { en: 'Is it in the front, the side, or the back?', ja: '前ですか、横ですか、後ろですか。' },
      { en: 'Does it hurt to put on your socks or shoes?', ja: '靴下や靴を履くとき痛みますか。', note: '股関節の可動域制限を示唆します。' },
      { en: 'Does it hurt when you get out of a car?', ja: '車から降りるとき痛みますか。' },
      { en: 'Does the pain go down the back of your leg?', ja: '痛みが脚の後ろに下りますか。' },
      { en: 'Is it painful to lie on that side at night?', ja: '夜、その側を下にすると痛いですか。' },
      { en: 'Do you sit cross-legged often?', ja: 'あぐらや脚を組むことは多いですか。' }
    ],
    findings: [
      { en: 'The muscles on the side of your hip are weak.', ja: '股関節の横の筋肉が弱くなっています。' },
      { en: 'A deep muscle in your buttock is tight and pressing on the nerve.', ja: 'お尻の奥の筋肉が硬く、神経を圧迫しています。', note: '梨状筋。' },
      { en: 'Your hip is not moving through its full range.', ja: '股関節が本来の可動域まで動いていません。' },
      { en: 'Sitting for long hours shortens the muscles in front of your hip.', ja: '長時間座ると股関節前面の筋肉が縮みます。' },
      { en: 'When one hip is stiff, the lower back has to compensate.', ja: '片方の股関節が硬いと、腰が代償します。' }
    ],
    muscles: ['Gluteus medius', 'Gluteus minimus', 'Gluteus maximus', 'Piriformis', 'Tensor fasciae latae', 'Psoas major', 'Iliacus', 'Adductor longus', 'Rectus femoris'],
    advice: [
      { en: 'Do side-lying leg raises, fifteen times each side.', ja: '横向きで脚を上げる運動を左右15回ずつ行ってください。' },
      { en: 'Stretch your buttock by crossing your ankle over your knee.', ja: '足首を反対の膝に乗せてお尻を伸ばしてください。' },
      { en: 'Avoid sitting with your legs crossed for long periods.', ja: '脚を組んで長時間座るのは避けてください。' },
      { en: 'Put a pillow between your knees when you sleep on your side.', ja: '横向きで寝るときは膝の間に枕を挟んでください。' },
      { en: 'Walking on flat ground is good. Avoid steep hills for now.', ja: '平地の歩行は良いです。当面、急な坂は避けてください。' }
    ],
    redFlags: [
      { en: 'Unable to put weight on the leg', ja: '脚に体重をかけられない' },
      { en: 'Hip pain after a fall in an older adult', ja: '高齢の方が転倒した後の股関節痛' },
      { en: 'Groin pain with fever', ja: '発熱を伴う鼠径部の痛み' },
      { en: 'The leg looks shorter or turned outward', ja: '脚が短く見える、外を向いている' }
    ]
  },

  {
    id: 'knee-pain',
    name: '膝の痛み',
    nameEn: 'Knee Pain',
    icon: '🦿',
    category: '下半身',
    terminology: '"kneecap"（膝蓋骨）、"behind the knee"（膝裏）など、場所を示す表現を覚えておくと問診が速くなります。"My knee gives way" は膝崩れを指す重要なサインです。',
    patientSays: [
      { en: 'My knee hurts when I go down stairs.', ja: '階段を下りるとき膝が痛みます。', note: '膝蓋大腿関節の問題を示唆。' },
      { en: 'My knee gives way sometimes.', ja: '膝が時々カクッと崩れます。', note: '不安定性のサイン。要注意。' },
      { en: 'It\'s swollen.', ja: '腫れています。' },
      { en: 'It hurts right under my kneecap.', ja: '膝のお皿の下が痛みます。' },
      { en: 'My knee is stiff in the morning.', ja: '朝、膝がこわばります。' }
    ],
    questions: [
      { en: 'Is it the inside, outside, front, or back of the knee?', ja: '膝の内側、外側、前、後ろのどこですか。' },
      { en: 'Is your knee swollen right now?', ja: '今、膝は腫れていますか。' },
      { en: 'Did you hear a pop when it started?', ja: '始まったとき、ポンという音はしましたか。', note: '靭帯損傷を示唆。医療機関へ。' },
      { en: 'Does your knee lock or catch?', ja: '膝が引っかかったりロックしたりしますか。', note: '半月板の問題を示唆。' },
      { en: 'Is it worse going up stairs or coming down?', ja: '階段は上りと下り、どちらがつらいですか。' },
      { en: 'Can you fully straighten and bend it?', ja: '完全に伸ばしたり曲げたりできますか。' },
      { en: 'Do you run or play any sports?', ja: 'ランニングやスポーツはしますか。' }
    ],
    findings: [
      { en: 'The muscles on the front of your thigh are tight.', ja: '太ももの前の筋肉が硬くなっています。' },
      { en: 'Your kneecap is not tracking in a straight line.', ja: '膝のお皿がまっすぐ動いていません。' },
      { en: 'Your hip muscles are weak, so your knee falls inward when you walk.', ja: '股関節の筋肉が弱く、歩くとき膝が内に入っています。' },
      { en: 'The knee is often the victim, not the cause.', ja: '膝は原因ではなく、被害者であることが多いです。', note: '股関節・足首へのアプローチを説明するときに。' },
      { en: 'We should look at your hip and ankle as well.', ja: '股関節と足首も一緒に見ていく必要があります。' },
      { en: 'Your calf muscles are tight, which changes how you walk.', ja: 'ふくらはぎが硬く、歩き方が変わっています。' }
    ],
    muscles: ['Rectus femoris', 'Vastus medialis', 'Vastus lateralis', 'Biceps femoris', 'Semitendinosus', 'Gastrocnemius', 'Tensor fasciae latae', 'Gluteus medius', 'Popliteus'],
    advice: [
      { en: 'Strengthen your thigh by straightening your leg while sitting, fifteen times.', ja: '座って脚を伸ばす運動を15回行い、太ももを鍛えてください。' },
      { en: 'Avoid deep squats and kneeling for now.', ja: '当面、深いスクワットと正座は避けてください。' },
      { en: 'Ice for fifteen minutes if it is swollen.', ja: '腫れているときは15分冷やしてください。' },
      { en: 'Swimming and cycling are easier on your knees than running.', ja: '水泳と自転車はランニングより膝にやさしいです。' },
      { en: 'Check your shoes. Worn-out soles change how your knee moves.', ja: '靴を確認してください。すり減った靴底は膝の動きを変えます。' }
    ],
    redFlags: [
      { en: 'Significant swelling that came on within an hour of injury', ja: '受傷後1時間以内の著明な腫れ' },
      { en: 'Unable to bear weight on the leg', ja: '脚に体重をかけられない' },
      { en: 'The knee locks and will not straighten', ja: '膝がロックして伸びない' },
      { en: 'Hot, red, swollen knee with fever', ja: '熱感・発赤・腫れと発熱' },
      { en: 'A popping sound at the time of injury', ja: '受傷時のポンという音' }
    ]
  },

  {
    id: 'sprain',
    name: '捻挫',
    nameEn: 'Sprain',
    icon: '🩹',
    category: '外傷',
    terminology: '"sprain" は靭帯の損傷、"strain" は筋肉・腱の損傷です。混同されやすいので使い分けましょう。急性期（受傷から数日）は施術ではなく応急処置と受診の案内が優先です。',
    patientSays: [
      { en: 'I sprained my ankle.', ja: '足首を捻挫しました。' },
      { en: 'I rolled my ankle going down the stairs.', ja: '階段で足首をひねりました。' },
      { en: 'It\'s swollen and bruised.', ja: '腫れて内出血しています。' },
      { en: 'I can walk, but it hurts.', ja: '歩けますが痛みます。' },
      { en: 'I sprain the same ankle over and over.', ja: '同じ足首を何度も捻挫します。' }
    ],
    questions: [
      { en: 'When exactly did this happen?', ja: '正確にいつ起きましたか。', note: '急性期かどうかの判断に必須。' },
      { en: 'Which way did your ankle roll? Inward or outward?', ja: '足首はどちらにひねりましたか。内側ですか外側ですか。' },
      { en: 'Could you walk right after it happened?', ja: '直後に歩けましたか。' },
      { en: 'Can you put your full weight on it now?', ja: '今、体重を全部かけられますか。' },
      { en: 'Did you see a doctor or have an X-ray?', ja: '受診やレントゲンはしましたか。' },
      { en: 'Is there any numbness in your toes?', ja: 'つま先にしびれはありますか。' },
      { en: 'How many times have you sprained this ankle before?', ja: 'この足首は今までに何回捻挫しましたか。' }
    ],
    findings: [
      { en: 'This is still in the acute stage, so we need to be careful.', ja: 'まだ急性期ですので、慎重に対応する必要があります。' },
      { en: 'I would like you to get an X-ray first to rule out a fracture.', ja: '骨折を除外するため、まずレントゲンを撮っていただきたいです。' },
      { en: 'Once the swelling goes down, we can start gentle work.', ja: '腫れが引いたら、やさしい施術を始められます。' },
      { en: 'After a sprain, the ankle loses its sense of position.', ja: '捻挫の後、足首は位置を感じる能力が落ちます。' },
      { en: 'That is why people sprain the same ankle again and again.', ja: 'それが同じ足首を繰り返し捻挫する理由です。' },
      { en: 'Balance training is the best way to prevent the next one.', ja: 'バランス訓練が次を防ぐ最善の方法です。' },
      { en: 'The muscles around your ankle are guarding to protect the joint.', ja: '足首まわりの筋肉が関節を守ろうと緊張しています。' }
    ],
    muscles: ['Peroneus longus', 'Peroneus brevis', 'Tibialis anterior', 'Tibialis posterior', 'Gastrocnemius', 'Soleus'],
    advice: [
      { en: 'For the first two days: rest, ice, compression, and elevation.', ja: '最初の2日間は安静・冷却・圧迫・挙上を行ってください。', note: 'RICE処置。英語圏では広く知られています。' },
      { en: 'Ice for fifteen minutes, three times a day.', ja: '1日3回、15分ずつ冷やしてください。' },
      { en: 'Keep your ankle above your heart when you rest.', ja: '休むときは足首を心臓より高くしてください。' },
      { en: 'Do not apply heat in the first few days.', ja: '最初の数日は温めないでください。' },
      { en: 'Once it settles, practice standing on one leg for thirty seconds.', ja: '落ち着いたら、片足立ち30秒を練習してください。' },
      { en: 'Write the alphabet in the air with your toes.', ja: 'つま先で空中に文字を書く運動をしてください。' }
    ],
    redFlags: [
      { en: 'Unable to take four steps right after the injury', ja: '受傷直後に4歩歩けない' },
      { en: 'Bone tenderness when pressing directly on the ankle bones', ja: '足首の骨を直接押すと強い痛みがある' },
      { en: 'Obvious deformity of the joint', ja: '関節の明らかな変形' },
      { en: 'Numbness or the foot turning pale or cold', ja: 'しびれ、足が青白い・冷たい' }
    ]
  }
];

export const symptomCategories = ['すべて', '上半身', '体幹', '姿勢', '頭頸部', '下半身', '外傷'];

export function allSymptomPhrases() {
  const out = [];
  for (const s of symptoms) {
    const push = (list, group, kind) => {
      for (const p of list || []) {
        out.push({ ...p, source: s.name, group, symptomId: s.id, kind });
      }
    };
    push(s.patientSays, '患者様の表現', 'patient');
    push(s.questions, '問診', 'therapist');
    push(s.findings, '状態の説明', 'therapist');
    push(s.advice, 'セルフケア指導', 'therapist');
  }
  return out;
}
