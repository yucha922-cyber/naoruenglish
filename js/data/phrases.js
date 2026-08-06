// 施術の一連の流れに沿った英会話フレーズ集
// en: 英語 / ja: 日本語 / note: 使い分けのポイント

export const phases = [
  {
    id: 'greeting',
    step: 1,
    title: '来院時の挨拶',
    titleEn: 'Greeting & Check-in',
    icon: '👋',
    summary: '出迎えから施術室へご案内するまで。ここで安心してもらえるかが施術全体の空気を決めます。',
    tips: [
      'まず笑顔で "Hello!" と言えれば十分です。完璧な文章より、目を見て挨拶することが大切です。',
      '聞き取れなかったら "Sorry, could you say that again?" と遠慮なく聞き返してください。失礼ではありません。',
      '名前の発音が難しいときは "How do you pronounce your name?" と聞くと、むしろ喜ばれます。'
    ],
    groups: [
      {
        title: '出迎えの第一声',
        phrases: [
          { en: 'Hello! Welcome to Naoru Seitai.', ja: 'こんにちは。ナオル整体へようこそ。', note: '最初の一言。これだけでも十分伝わります。' },
          { en: 'Good morning. How are you today?', ja: 'おはようございます。今日の調子はいかがですか。', note: '午前中の挨拶。' },
          { en: 'Good afternoon. Please come in.', ja: 'こんにちは。どうぞお入りください。', note: '午後の挨拶。' },
          { en: 'Thank you for coming today.', ja: '本日はご来院ありがとうございます。', note: '' },
          { en: 'My name is Tanaka. I will be your therapist today.', ja: '担当の田中です。本日担当させていただきます。', note: '自己紹介。名前の部分を入れ替えてください。' },
          { en: 'Nice to meet you.', ja: 'はじめまして。', note: '初対面のとき。' }
        ]
      },
      {
        title: '予約と初回の確認',
        phrases: [
          { en: 'Do you have an appointment?', ja: 'ご予約はされていますか。', note: '' },
          { en: 'May I have your name, please?', ja: 'お名前を伺えますか。', note: '"What is your name?" よりも丁寧です。' },
          { en: 'How do you spell your name?', ja: 'お名前のつづりを教えていただけますか。', note: '' },
          { en: 'How do you pronounce your name?', ja: 'お名前はどのように発音しますか。', note: '無理に読もうとせず、素直に聞くのが一番です。' },
          { en: 'Is this your first visit?', ja: '当院は初めてですか。', note: '' },
          { en: 'Have you been to a seitai clinic in Japan before?', ja: '日本で整体を受けたことはありますか。', note: '整体が初めてか確認できます。' },
          { en: 'Your appointment is at two o\'clock, is that right?', ja: 'ご予約は2時でお間違いないですか。', note: '時刻の部分を入れ替えてください。' },
          { en: 'Please have a seat. We will call you shortly.', ja: 'おかけになってお待ちください。まもなくお呼びします。', note: '' }
        ]
      },
      {
        title: '整体の説明',
        phrases: [
          { en: 'Seitai is a Japanese style of manual therapy.', ja: '整体は日本式の手技療法です。', note: '整体を知らない方への説明。' },
          { en: 'We use our hands to release tight muscles and improve your posture.', ja: '手を使って硬くなった筋肉をゆるめ、姿勢を整えていきます。', note: '' },
          { en: 'We do not use any machines or medication.', ja: '機械や薬は使いません。', note: '' },
          { en: 'It is not a medical treatment, so we cannot give you a diagnosis.', ja: '医療行為ではありませんので、診断はできません。', note: '大切な一言。トラブル防止のため必ず伝えましょう。' },
          { en: 'If you have a serious condition, please see a doctor first.', ja: '重い症状の場合は、まず医療機関を受診してください。', note: '' }
        ]
      },
      {
        title: '問診票のご案内',
        phrases: [
          { en: 'Could you fill out this form, please?', ja: 'こちらの問診票にご記入をお願いします。', note: '' },
          { en: 'We have an English version. Here you are.', ja: '英語版がございます。どうぞ。', note: '' },
          { en: 'Please write your name, age, and phone number here.', ja: 'こちらにお名前、年齢、電話番号をご記入ください。', note: '' },
          { en: 'Please take your time.', ja: 'ごゆっくりどうぞ。', note: '' },
          { en: 'Let me know if you have any questions about the form.', ja: '記入でわからないところがあればお知らせください。', note: '' },
          { en: 'Have you finished filling it out?', ja: 'ご記入は終わりましたか。', note: '' }
        ]
      },
      {
        title: '荷物・お着替え',
        phrases: [
          { en: 'You can leave your bag here.', ja: 'お荷物はこちらに置いていただけます。', note: '' },
          { en: 'Please put your shoes in this locker.', ja: '靴はこちらのロッカーにお入れください。', note: '' },
          { en: 'We have clothes you can change into.', ja: 'お着替えをご用意しています。', note: '' },
          { en: 'Please change into these. The changing room is over there.', ja: 'こちらにお着替えください。更衣室はあちらです。', note: '' },
          { en: 'You can keep your clothes on if you prefer.', ja: 'そのままのお洋服でも大丈夫です。', note: '' },
          { en: 'Please remove your watch and accessories.', ja: '時計やアクセサリーは外してください。', note: '' }
        ]
      },
      {
        title: '施術室へご案内',
        phrases: [
          { en: 'This way, please.', ja: 'こちらへどうぞ。', note: '一番よく使う案内の言葉。' },
          { en: 'Please follow me.', ja: 'ついてきてください。', note: '' },
          { en: 'Watch your step.', ja: '足元にお気をつけください。', note: '' },
          { en: 'The restroom is over there.', ja: 'お手洗いはあちらです。', note: '' },
          { en: 'Please lie down on the bed. Face up, please.', ja: 'ベッドに仰向けで横になってください。', note: '' },
          { en: 'Are you comfortable?', ja: '楽な姿勢ですか。', note: '' },
          { en: 'Is the room temperature okay for you?', ja: '室温はいかがですか。', note: '' }
        ]
      }
    ],
    patientPhrases: [
      { en: 'I have an appointment at three.', ja: '3時に予約しています。' },
      { en: 'This is my first time.', ja: '初めてです。' },
      { en: 'I found you on the internet.', ja: 'ネットで見つけました。' },
      { en: 'Do you speak English?', ja: '英語は話せますか。' },
      { en: 'I don\'t speak Japanese very well.', ja: '日本語はあまり話せません。' },
      { en: 'How much does it cost?', ja: '料金はいくらですか。' },
      { en: 'How long does it take?', ja: 'どのくらい時間がかかりますか。' }
    ]
  },

  {
    id: 'intake',
    step: 2,
    title: '問診・聞き取り',
    titleEn: 'Intake & Interview',
    icon: '💬',
    summary: 'お身体の状態を聞き取ります。施術の方向性を決める最も大事なパートです。',
    tips: [
      '「はい・いいえ」で答えられる質問から始めると、お互いに楽です。',
      '痛みの強さは 0〜10 のスケールで聞くと、言葉の壁を越えて正確に伝わります。',
      '禁忌の確認（妊娠・手術歴・血液をサラサラにする薬など）は必ず行ってください。'
    ],
    groups: [
      {
        title: '主訴を聞く',
        phrases: [
          { en: 'What brings you in today?', ja: '今日はどうされましたか。', note: '問診の定番の入り口。' },
          { en: 'Where does it hurt?', ja: 'どこが痛みますか。', note: '' },
          { en: 'Could you show me where it hurts?', ja: '痛いところを指さしてもらえますか。', note: '言葉が通じなくても確実に伝わります。' },
          { en: 'Is the pain on one side or both sides?', ja: '痛みは片側ですか、両側ですか。', note: '' },
          { en: 'Which side is worse, the left or the right?', ja: '左右どちらがつらいですか。', note: '' },
          { en: 'Do you have pain anywhere else?', ja: '他に痛むところはありますか。', note: '' },
          { en: 'What is bothering you the most?', ja: '一番気になるのはどこですか。', note: '優先順位を決めるとき。' }
        ]
      },
      {
        title: 'いつから・きっかけ',
        phrases: [
          { en: 'How long have you had this pain?', ja: 'その痛みはいつからですか。', note: '' },
          { en: 'When did it start?', ja: 'いつ始まりましたか。', note: '' },
          { en: 'Did something happen? An accident or an injury?', ja: '何かきっかけはありましたか。事故やケガなど。', note: '' },
          { en: 'Did it start suddenly, or little by little?', ja: '急に始まりましたか、それとも少しずつですか。', note: '' },
          { en: 'Have you had this problem before?', ja: '以前にも同じ症状がありましたか。', note: '' },
          { en: 'Is it getting better, worse, or staying the same?', ja: '良くなっていますか、悪くなっていますか、変わりませんか。', note: '' }
        ]
      },
      {
        title: '痛みの種類を聞く',
        phrases: [
          { en: 'What kind of pain is it?', ja: 'どのような痛みですか。', note: '' },
          { en: 'Is it a sharp pain or a dull pain?', ja: '鋭い痛みですか、鈍い痛みですか。', note: 'sharp = ズキッ / dull = ズーン' },
          { en: 'Is it a burning pain?', ja: '焼けるような痛みですか。', note: '' },
          { en: 'Does it feel stiff or heavy?', ja: '張った感じ、重い感じはありますか。', note: '肩こりの表現によく使います。' },
          { en: 'Do you feel any numbness or tingling?', ja: 'しびれやピリピリする感じはありますか。', note: 'numbness = 感覚が鈍い / tingling = ピリピリ' },
          { en: 'Does the pain travel down your arm or leg?', ja: '痛みが腕や脚に広がりますか。', note: '放散痛の確認。重要です。' },
          { en: 'Is the pain constant, or does it come and go?', ja: 'ずっと痛いですか、痛くなったり治まったりしますか。', note: '' }
        ]
      },
      {
        title: '痛みの強さ',
        phrases: [
          { en: 'On a scale of zero to ten, how bad is the pain?', ja: '0から10で、痛みはどのくらいですか。', note: '最重要フレーズ。言語の壁を越えられます。' },
          { en: 'Zero is no pain, and ten is the worst pain you can imagine.', ja: '0が痛みなし、10が想像できる最悪の痛みです。', note: '上の説明とセットで使います。' },
          { en: 'How is it right now?', ja: '今この瞬間はどうですか。', note: '' },
          { en: 'What about at its worst?', ja: '一番ひどいときはどうですか。', note: '' },
          { en: 'Does the pain wake you up at night?', ja: '夜、痛みで目が覚めますか。', note: '重症度の判断に有効です。' }
        ]
      },
      {
        title: '悪化・軽減する動作',
        phrases: [
          { en: 'What makes it worse?', ja: 'どんなときに悪化しますか。', note: '' },
          { en: 'What makes it feel better?', ja: 'どんなときに楽になりますか。', note: '' },
          { en: 'Does it hurt when you move, or even when you rest?', ja: '動かすと痛みますか、じっとしていても痛みますか。', note: '' },
          { en: 'Is it worse in the morning or in the evening?', ja: '朝と夜、どちらがつらいですか。', note: '' },
          { en: 'Does it hurt when you bend forward?', ja: '前にかがむと痛みますか。', note: '' },
          { en: 'Does it hurt when you turn your neck?', ja: '首を回すと痛みますか。', note: '' },
          { en: 'Does sitting for a long time make it worse?', ja: '長時間座っていると悪化しますか。', note: '' },
          { en: 'Does stretching help?', ja: 'ストレッチをすると楽になりますか。', note: '' }
        ]
      },
      {
        title: '生活習慣・お仕事',
        phrases: [
          { en: 'What kind of work do you do?', ja: 'どのようなお仕事をされていますか。', note: '' },
          { en: 'Do you work at a desk?', ja: 'デスクワークですか。', note: '' },
          { en: 'How many hours a day do you use a computer?', ja: '1日何時間くらいパソコンを使いますか。', note: '' },
          { en: 'Do you look down at your phone a lot?', ja: 'スマホを下を向いて長く見ますか。', note: 'ストレートネックの確認。' },
          { en: 'Do you do any sports or exercise?', ja: 'スポーツや運動はされますか。', note: '' },
          { en: 'How do you sleep? On your back, your side, or your stomach?', ja: '寝るときの姿勢は。仰向け、横向き、うつ伏せ。', note: '' },
          { en: 'How many hours do you sleep at night?', ja: '睡眠時間はどのくらいですか。', note: '' },
          { en: 'Do you feel a lot of stress lately?', ja: '最近ストレスは多いですか。', note: '' }
        ]
      },
      {
        title: '安全確認（施術前に必ず）',
        phrases: [
          { en: 'Have you seen a doctor about this?', ja: 'この件で医療機関を受診されましたか。', note: '' },
          { en: 'Did you have any X-rays or an MRI?', ja: 'レントゲンやMRIは撮りましたか。', note: '' },
          { en: 'Have you ever had surgery? If so, where and when?', ja: '手術を受けたことはありますか。部位と時期も教えてください。', note: '' },
          { en: 'Are you taking any medication right now?', ja: '現在お薬を飲んでいますか。', note: '' },
          { en: 'Are you taking any blood thinners?', ja: '血液をサラサラにする薬は飲んでいますか。', note: '内出血リスクの確認。必ず聞いてください。' },
          { en: 'Do you have high blood pressure or heart problems?', ja: '高血圧や心臓の疾患はありますか。', note: '' },
          { en: 'Do you have osteoporosis?', ja: '骨粗しょう症はありますか。', note: '圧の強さを決める判断材料です。' },
          { en: 'Are you pregnant, or could you be?', ja: '妊娠中、またはその可能性はありますか。', note: '女性には必ず確認してください。' },
          { en: 'How many weeks pregnant are you?', ja: '妊娠何週目ですか。', note: '' },
          { en: 'Do you have any allergies?', ja: 'アレルギーはありますか。', note: 'オイルを使う場合は必須。' },
          { en: 'Have you had a fever recently?', ja: '最近、発熱はありましたか。', note: '' },
          { en: 'Is there anything I should know before we start?', ja: '始める前に伝えておきたいことはありますか。', note: '締めの確認として便利です。' }
        ]
      },
      {
        title: '聞き返す・確認する',
        phrases: [
          { en: 'Sorry, could you say that again?', ja: 'すみません、もう一度お願いできますか。', note: '遠慮なく使ってください。' },
          { en: 'Could you speak a little more slowly, please?', ja: 'もう少しゆっくり話していただけますか。', note: '' },
          { en: 'Let me make sure I understand.', ja: '確認させてください。', note: '' },
          { en: 'So, your lower back has been hurting for two weeks. Is that right?', ja: 'つまり、腰が2週間痛むということですね。', note: '部位と期間を入れ替えて使えます。' },
          { en: 'I\'m sorry, I don\'t know that word. Could you explain it?', ja: 'すみません、その単語がわかりません。説明していただけますか。', note: '正直に聞くのが一番早いです。' },
          { en: 'Let me look that up for a moment.', ja: '少し調べさせてください。', note: '' }
        ]
      }
    ],
    patientPhrases: [
      { en: 'My shoulders are really stiff.', ja: '肩がとても凝っています。' },
      { en: 'I\'ve had lower back pain for about a month.', ja: '1ヶ月ほど腰が痛いです。' },
      { en: 'It hurts when I sit for a long time.', ja: '長く座っていると痛くなります。' },
      { en: 'It\'s about a seven out of ten.', ja: '10段階で7くらいです。' },
      { en: 'It comes and goes.', ja: '痛くなったり治まったりします。' },
      { en: 'I feel numbness in my fingers.', ja: '指にしびれがあります。' },
      { en: 'I work at a desk all day.', ja: '一日中デスクワークです。' },
      { en: 'I\'m not taking any medication.', ja: '薬は飲んでいません。' },
      { en: 'I had surgery on my knee five years ago.', ja: '5年前に膝の手術をしました。' }
    ]
  },

  {
    id: 'assessment',
    step: 3,
    title: 'お身体のチェック',
    titleEn: 'Physical Assessment',
    icon: '🔍',
    summary: '姿勢・可動域・触診で状態を確認します。動作の指示が中心になるので、身振りを添えると確実です。',
    tips: [
      '動作の指示は必ず自分でやって見せてください。言葉が半分でも伝わります。',
      '身体に触れる前に "May I touch your shoulder?" と一言。信頼関係が変わります。',
      '触っている間は "Does this hurt?" をこまめに。痛みの我慢は施術の質を下げます。'
    ],
    groups: [
      {
        title: '検査の説明と同意',
        phrases: [
          { en: 'Now I would like to check your body.', ja: 'これからお身体をチェックさせていただきます。', note: '' },
          { en: 'This will take about five minutes.', ja: '5分ほどで終わります。', note: '' },
          { en: 'May I touch your shoulder?', ja: '肩に触れてもよろしいですか。', note: '部位を入れ替えて使います。必ず一言を。' },
          { en: 'Please tell me if anything hurts.', ja: '痛かったら教えてください。', note: '' },
          { en: 'Please don\'t push through the pain.', ja: '痛みを我慢しないでください。', note: '' },
          { en: 'Just tell me to stop at any time.', ja: 'いつでも止めてと言ってください。', note: '' },
          { en: 'Please relax. Let your body go loose.', ja: '力を抜いてリラックスしてください。', note: '' }
        ]
      },
      {
        title: '立位・姿勢チェック',
        phrases: [
          { en: 'Could you stand up, please?', ja: '立っていただけますか。', note: '' },
          { en: 'Please stand naturally, the way you always do.', ja: 'いつも通り自然に立ってください。', note: '' },
          { en: 'Please face the mirror.', ja: '鏡の方を向いてください。', note: '' },
          { en: 'Now please turn around. Show me your back.', ja: '後ろを向いてください。背中を見せてください。', note: '' },
          { en: 'Please stand sideways.', ja: '横を向いて立ってください。', note: '' },
          { en: 'Put your feet shoulder-width apart.', ja: '足を肩幅に開いてください。', note: '' },
          { en: 'Please stand up straight.', ja: 'まっすぐ立ってください。', note: '' },
          { en: 'Please close your eyes for a moment.', ja: '少し目を閉じてください。', note: 'バランス確認。' }
        ]
      },
      {
        title: '可動域チェック（首・肩）',
        phrases: [
          { en: 'Please look up. Now look down.', ja: '上を向いてください。次に下を向いてください。', note: '' },
          { en: 'Please turn your head to the right. Now to the left.', ja: '首を右に回してください。次に左に。', note: '' },
          { en: 'Tilt your head toward your shoulder.', ja: '頭を肩の方へ倒してください。', note: '' },
          { en: 'How far can you go? Stop when it hurts.', ja: 'どこまで動きますか。痛いところで止めてください。', note: '' },
          { en: 'Please raise both arms up over your head.', ja: '両腕を頭の上まで上げてください。', note: '' },
          { en: 'Please raise your arm out to the side.', ja: '腕を横に上げてください。', note: '' },
          { en: 'Please roll your shoulders backward.', ja: '肩を後ろに回してください。', note: '' },
          { en: 'Can you reach behind your back?', ja: '背中に手を回せますか。', note: '' },
          { en: 'Does that hurt, or does it just feel tight?', ja: 'それは痛みですか、突っ張る感じですか。', note: '痛みと張りの区別は重要です。' }
        ]
      },
      {
        title: '可動域チェック（腰・脚）',
        phrases: [
          { en: 'Please bend forward slowly.', ja: 'ゆっくり前にかがんでください。', note: '' },
          { en: 'Try to touch your toes. Don\'t force it.', ja: 'つま先を触ってみてください。無理はしないでください。', note: '' },
          { en: 'Please lean back a little.', ja: '少し後ろに反ってください。', note: '' },
          { en: 'Please twist your upper body to the right.', ja: '上半身を右にひねってください。', note: '' },
          { en: 'Please lift your knee up toward your chest.', ja: '膝を胸の方へ上げてください。', note: '' },
          { en: 'Please squat down slowly.', ja: 'ゆっくりしゃがんでください。', note: '' },
          { en: 'Can you stand on one leg?', ja: '片足で立てますか。', note: '' },
          { en: 'Please walk to the wall and come back.', ja: '壁まで歩いて戻ってきてください。', note: '歩行分析。' }
        ]
      },
      {
        title: 'ベッドでの体位指示',
        phrases: [
          { en: 'Please lie down on your back.', ja: '仰向けで横になってください。', note: 'face up でも通じます。' },
          { en: 'Please lie face down.', ja: 'うつ伏せになってください。', note: '' },
          { en: 'Please lie on your side.', ja: '横向きになってください。', note: '' },
          { en: 'Please turn over.', ja: '寝返りを打ってください。', note: '' },
          { en: 'Please bend your knees.', ja: '膝を曲げてください。', note: '' },
          { en: 'Please straighten your leg.', ja: '脚をまっすぐ伸ばしてください。', note: '' },
          { en: 'Let me lift your leg. Just relax and let me do the work.', ja: '脚を持ち上げます。力を抜いて任せてください。', note: '' },
          { en: 'Put your arms down by your sides.', ja: '腕は体の横に下ろしてください。', note: '' },
          { en: 'Would you like a pillow under your knees?', ja: '膝の下に枕を入れましょうか。', note: '' },
          { en: 'Take a deep breath in. And breathe out slowly.', ja: '息を大きく吸って。ゆっくり吐いてください。', note: '' }
        ]
      },
      {
        title: '触診中の声かけ',
        phrases: [
          { en: 'I am going to press here.', ja: 'ここを押していきます。', note: '' },
          { en: 'Does this hurt?', ja: 'ここは痛いですか。', note: '最も使う一言。' },
          { en: 'How about here?', ja: 'ここはどうですか。', note: '' },
          { en: 'Tell me when you feel it.', ja: '感じたら教えてください。', note: '' },
          { en: 'Is this the spot?', ja: 'ここですか。', note: '' },
          { en: 'Is the pressure okay?', ja: '圧の強さは大丈夫ですか。', note: '' },
          { en: 'Too strong? Or would you like more pressure?', ja: '強すぎますか。もっと強くしましょうか。', note: '' },
          { en: 'This muscle is very tight.', ja: 'この筋肉はかなり硬くなっています。', note: '' },
          { en: 'You have a knot right here.', ja: 'ここにしこりがありますね。', note: 'knot = 硬結。ネイティブによく通じる表現。' },
          { en: 'Try not to hold your breath.', ja: '息を止めないようにしてください。', note: '' }
        ]
      }
    ],
    patientPhrases: [
      { en: 'That\'s the spot.', ja: 'そこです。' },
      { en: 'Ouch, that hurts!', ja: '痛いです。' },
      { en: 'It feels tight, but it doesn\'t hurt.', ja: '張っていますが、痛くはありません。' },
      { en: 'That feels good.', ja: '気持ちいいです。' },
      { en: 'A little softer, please.', ja: 'もう少し弱くしてください。' },
      { en: 'You can press harder.', ja: 'もっと強くて大丈夫です。' },
      { en: 'I can\'t turn my neck that far.', ja: 'そこまで首が回りません。' }
    ]
  },

  {
    id: 'explanation',
    step: 4,
    title: '状態のご説明',
    titleEn: 'Explaining the Findings',
    icon: '📋',
    summary: '検査でわかったことを患者様に伝えます。専門用語より、原因と結果をシンプルにつなげるのがコツです。',
    tips: [
      '診断名は言えません。「〜という状態です」ではなく「〜が硬くなっています」という事実を伝えましょう。',
      '「原因 → 結果」の順で話すと、短い英語でも納得してもらえます。',
      '鏡や図を指さしながら話すと、英語の量を半分に減らせます。'
    ],
    groups: [
      {
        title: '説明を始める',
        phrases: [
          { en: 'Let me explain what I found.', ja: 'わかったことをご説明します。', note: '' },
          { en: 'Can I show you something in the mirror?', ja: '鏡で少し見ていただけますか。', note: '' },
          { en: 'Let me show you on this chart.', ja: 'この図でご説明します。', note: '' },
          { en: 'The good news is, this is very common.', ja: '良いお知らせは、これはとてもよくある状態だということです。', note: '不安をやわらげる一言。' },
          { en: 'Please stop me if you have any questions.', ja: '質問があればいつでも止めてください。', note: '' }
        ]
      },
      {
        title: '筋肉の状態を伝える',
        phrases: [
          { en: 'The muscles around your neck and shoulders are very tight.', ja: '首と肩まわりの筋肉がとても硬くなっています。', note: '' },
          { en: 'Your right side is much tighter than your left.', ja: '右側が左側よりかなり硬いです。', note: '' },
          { en: 'These muscles are overworking.', ja: 'これらの筋肉が働きすぎています。', note: '' },
          { en: 'These muscles have become weak.', ja: 'これらの筋肉は弱くなっています。', note: '' },
          { en: 'When a muscle stays tight, blood flow goes down.', ja: '筋肉が硬いままだと、血流が悪くなります。', note: '' },
          { en: 'That is why you feel heavy and stiff.', ja: 'それが重だるさや凝りの原因です。', note: '' },
          { en: 'Your muscles are pulling your shoulder forward.', ja: '筋肉が肩を前に引っ張っています。', note: '' }
        ]
      },
      {
        title: '姿勢の状態を伝える',
        phrases: [
          { en: 'Your head is a little forward of your shoulders.', ja: '頭が肩より少し前に出ています。', note: 'ストレートネック・頭部前方位。' },
          { en: 'Your shoulders are rolled forward.', ja: '肩が前に巻いています。', note: '巻き肩。' },
          { en: 'Your upper back is rounded.', ja: '背中が丸くなっています。', note: '猫背。' },
          { en: 'Your pelvis is tilted forward.', ja: '骨盤が前に傾いています。', note: '反り腰。' },
          { en: 'Your lower back curve is deeper than usual.', ja: '腰の反りが通常より強くなっています。', note: '' },
          { en: 'Your left shoulder is higher than your right.', ja: '左肩が右より上がっています。', note: '' },
          { en: 'Your hips are not level.', ja: '骨盤の高さが左右で違います。', note: '' },
          { en: 'Your weight is mostly on your right leg.', ja: '体重が主に右脚にかかっています。', note: '' }
        ]
      },
      {
        title: '原因をつなげて説明する',
        phrases: [
          { en: 'When you look down at a screen, your neck carries extra weight.', ja: '画面を見下ろすと、首に余計な負担がかかります。', note: '' },
          { en: 'Sitting for long hours makes your hip muscles short and tight.', ja: '長時間座ると、股関節の筋肉が縮んで硬くなります。', note: '' },
          { en: 'Tight chest muscles pull your shoulders forward.', ja: '胸の筋肉が硬いと、肩が前に引っ張られます。', note: '' },
          { en: 'Then your upper back muscles have to work harder to hold you up.', ja: 'すると背中の筋肉が支えるために余計に働きます。', note: '' },
          { en: 'That is where your pain is coming from.', ja: 'そこが痛みの出どころです。', note: '' },
          { en: 'The place that hurts is not always the place that causes it.', ja: '痛む場所と原因の場所は、必ずしも同じではありません。', note: '説得力のある一言。' },
          { en: 'So we need to work on both areas.', ja: 'ですから両方にアプローチする必要があります。', note: '' }
        ]
      },
      {
        title: '理解を確認する',
        phrases: [
          { en: 'Does that make sense?', ja: 'ここまでよろしいですか。', note: '' },
          { en: 'Do you have any questions so far?', ja: 'ここまでで質問はありますか。', note: '' },
          { en: 'Is there anything you would like me to explain again?', ja: 'もう一度説明したほうがよいところはありますか。', note: '' },
          { en: 'How does that sound to you?', ja: 'いかがでしょうか。', note: '' }
        ]
      },
      {
        title: '医療機関をすすめる',
        phrases: [
          { en: 'I think you should see a doctor about this.', ja: 'この件は医療機関の受診をおすすめします。', note: '' },
          { en: 'This is outside what we can help with here.', ja: 'これは当院で対応できる範囲を超えています。', note: '' },
          { en: 'I would rather be safe. Please get it checked first.', ja: '念のため、まず検査を受けてください。', note: '' },
          { en: 'I can still work on the surrounding muscles today, gently.', ja: '周辺の筋肉には今日やさしくアプローチできます。', note: '' },
          { en: 'Here is the name of a nearby clinic.', ja: '近くの医療機関の名前です。', note: '' }
        ]
      }
    ],
    patientPhrases: [
      { en: 'Why does it hurt there?', ja: 'なぜそこが痛いのですか。' },
      { en: 'Is it serious?', ja: '重症ですか。' },
      { en: 'Will it get better?', ja: '良くなりますか。' },
      { en: 'How long will it take to heal?', ja: '治るのにどのくらいかかりますか。' },
      { en: 'What caused it?', ja: '原因は何ですか。' },
      { en: 'Should I see a doctor?', ja: '病院に行ったほうがいいですか。' }
    ]
  },

  {
    id: 'plan',
    step: 5,
    title: '施術プランのご提案',
    titleEn: 'Treatment Plan',
    icon: '🗓️',
    summary: '今日行う施術と、今後の通院の見通しをご提案します。セルフケアまで伝えて完了です。',
    tips: [
      '「今日やること」→「効果」→「今後の頻度」の順に話すと伝わります。',
      '回数や期間を伝えるときは "usually" や "most people" を付けると、断定を避けられます。',
      'セルフケアは1〜2個に絞ってください。多いと結局やってもらえません。'
    ],
    groups: [
      {
        title: '今日の施術内容',
        phrases: [
          { en: 'Here is what I would like to do today.', ja: '本日の施術内容をご提案します。', note: '' },
          { en: 'First, I will loosen the tight muscles in your neck and shoulders.', ja: 'まず首と肩の硬い筋肉をゆるめます。', note: '' },
          { en: 'Then I will work on your hips to balance your posture.', ja: '次に姿勢を整えるため股関節にアプローチします。', note: '' },
          { en: 'Today\'s session will be about forty minutes.', ja: '本日の施術は40分ほどです。', note: '' },
          { en: 'I will use my hands only. No machines.', ja: '手技のみで行います。機械は使いません。', note: '' },
          { en: 'I will avoid the area where you had surgery.', ja: '手術された部位は避けて行います。', note: '' },
          { en: 'I will work gently today since this is your first visit.', ja: '初回ですので、今日はやさしめに行います。', note: '' }
        ]
      },
      {
        title: '施術中の声かけ',
        phrases: [
          { en: 'How is the pressure? Okay, or too strong?', ja: '圧はいかがですか。大丈夫ですか、強すぎますか。', note: '' },
          { en: 'Let me know if you feel uncomfortable.', ja: '不快なことがあれば教えてください。', note: '' },
          { en: 'You can close your eyes and relax.', ja: '目を閉じてリラックスしていただいて大丈夫です。', note: '' },
          { en: 'Take a deep breath. Now let it out.', ja: '深く息を吸って。吐いてください。', note: '' },
          { en: 'This might feel a little sore, but it should not be sharp pain.', ja: '少し痛気持ちいい感じはありますが、鋭い痛みはないはずです。', note: '' },
          { en: 'Almost done.', ja: 'もうすぐ終わります。', note: '' },
          { en: 'We are all finished. Please take your time getting up.', ja: '終わりました。ゆっくり起き上がってください。', note: '' }
        ]
      },
      {
        title: '施術後の確認',
        phrases: [
          { en: 'How do you feel now?', ja: '今のお身体の感じはいかがですか。', note: '' },
          { en: 'Try turning your neck again. Is it easier?', ja: 'もう一度首を回してみてください。楽になりましたか。', note: '施術前後の比較。効果実感につながります。' },
          { en: 'Can you feel the difference?', ja: '違いを感じますか。', note: '' },
          { en: 'You might feel a little sore tomorrow. That is normal.', ja: '明日少しだるさが出るかもしれません。正常な反応です。', note: '好転反応の説明。' },
          { en: 'It usually goes away in a day or two.', ja: '通常1〜2日でおさまります。', note: '' },
          { en: 'Please drink plenty of water today.', ja: '今日は水分を多めに取ってください。', note: '' },
          { en: 'Please avoid drinking alcohol tonight.', ja: '今夜は飲酒を控えてください。', note: '' },
          { en: 'Try to avoid heavy exercise today.', ja: '今日は激しい運動は避けてください。', note: '' },
          { en: 'A warm bath tonight would be good for you.', ja: '今夜はゆっくり湯船に浸かるとよいですよ。', note: '' }
        ]
      },
      {
        title: 'セルフケアの指導',
        phrases: [
          { en: 'I would like to show you one stretch to do at home.', ja: 'ご自宅でできるストレッチを一つご紹介します。', note: '' },
          { en: 'Please watch me first, then try it yourself.', ja: 'まず見ていてください。その後やってみましょう。', note: '' },
          { en: 'Hold this position for thirty seconds.', ja: 'この姿勢を30秒キープしてください。', note: '' },
          { en: 'Do this three times a day.', ja: '1日3回行ってください。', note: '' },
          { en: 'Do it gently. You should feel a stretch, not pain.', ja: 'やさしく行ってください。伸びを感じる程度で、痛みは出さないでください。', note: '' },
          { en: 'Try to stand up and move every thirty minutes at work.', ja: '仕事中は30分ごとに立って動くようにしてください。', note: '' },
          { en: 'Try to raise your screen to eye level.', ja: '画面を目の高さまで上げてみてください。', note: '' },
          { en: 'Use heat, not ice, for this kind of stiffness.', ja: 'この種の凝りには冷やすより温めてください。', note: '' },
          { en: 'Use ice for the first two days after an injury.', ja: 'ケガの後2日間は冷やしてください。', note: '' },
          { en: 'I will send you a video link if you like.', ja: 'よろしければ動画のリンクをお送りします。', note: '' }
        ]
      },
      {
        title: '通院プランの提案',
        phrases: [
          { en: 'For your condition, I recommend coming once a week.', ja: '今の状態ですと、週1回の通院をおすすめします。', note: '' },
          { en: 'Most people feel a clear difference after three or four sessions.', ja: '多くの方は3〜4回で明らかな変化を感じます。', note: '"most people" で断定を避けています。' },
          { en: 'Let\'s start with four sessions and see how you feel.', ja: 'まず4回受けていただいて、様子を見ましょう。', note: '' },
          { en: 'After that, once a month is usually enough to maintain it.', ja: 'その後は月1回で維持できることが多いです。', note: '' },
          { en: 'It took years to develop, so it takes time to change.', ja: '長い年月をかけてできた状態なので、変化にも時間がかかります。', note: '過度な期待の調整に。' },
          { en: 'Of course, it is completely up to you.', ja: 'もちろん、お決めになるのはご自身です。', note: '押し売り感を消す一言。' },
          { en: 'How often do you think you can come?', ja: 'どのくらいの頻度で通えそうですか。', note: '' }
        ]
      },
      {
        title: '会計・次回予約・お見送り',
        phrases: [
          { en: 'Today\'s total is six thousand yen.', ja: '本日は6000円になります。', note: '' },
          { en: 'We accept cash and credit cards.', ja: '現金とクレジットカードがご利用いただけます。', note: '' },
          { en: 'Would you like to book your next appointment?', ja: '次回のご予約をお取りしますか。', note: '' },
          { en: 'When would be convenient for you?', ja: 'いつがご都合よろしいですか。', note: '' },
          { en: 'How about next Tuesday at three?', ja: '来週の火曜3時はいかがですか。', note: '' },
          { en: 'Here is your appointment card.', ja: '予約カードです。', note: '' },
          { en: 'If you need to cancel, please call us the day before.', ja: 'キャンセルの場合は前日までにお電話ください。', note: '' },
          { en: 'Please contact us if the pain gets worse.', ja: '痛みが強くなったらご連絡ください。', note: '' },
          { en: 'Thank you very much. Please take care.', ja: 'ありがとうございました。お大事になさってください。', note: '' },
          { en: 'We look forward to seeing you again.', ja: 'またのご来院をお待ちしております。', note: '' }
        ]
      }
    ],
    patientPhrases: [
      { en: 'That feels so much better, thank you.', ja: 'とても楽になりました。ありがとうございます。' },
      { en: 'How often should I come?', ja: 'どのくらいの頻度で通えばいいですか。' },
      { en: 'Can I exercise today?', ja: '今日は運動してもいいですか。' },
      { en: 'Should I put ice on it?', ja: '冷やしたほうがいいですか。' },
      { en: 'Do you take credit cards?', ja: 'クレジットカードは使えますか。' },
      { en: 'Can I book for next week?', ja: '来週の予約はできますか。' },
      { en: 'Do you have a receipt?', ja: '領収書はもらえますか。' }
    ]
  }
];

export function allPhrases() {
  const out = [];
  for (const phase of phases) {
    for (const group of phase.groups) {
      for (const p of group.phrases) {
        out.push({ ...p, source: phase.title, group: group.title, phaseId: phase.id, kind: 'therapist' });
      }
    }
    for (const p of phase.patientPhrases || []) {
      out.push({ ...p, source: phase.title, group: '患者様の返答', phaseId: phase.id, kind: 'patient' });
    }
  }
  return out;
}
