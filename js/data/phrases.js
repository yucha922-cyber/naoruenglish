// 施術の一連の流れに沿った英会話フレーズ集
// en: 英語 / ja: 日本語 / note: 使い分けのポイント
// alts: 同じ意味の、もっと気軽な言い方（任意）
// patientGroups: 患者様が言いそうなことを場面別にまとめたもの
//
// ★ 英文を言い換えるときは、お気に入りが消えないよう renamed.js に「旧 → 新」を追加してください。

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
          { en: 'Hello! Welcome to Naoru Seitai.', ja: 'こんにちは。ナオル整体へようこそ。', note: '最初の一言。これだけでも十分伝わります。', alts: ['Hi! Welcome in.'] },
          { en: 'Good morning. How are you today?', ja: 'おはようございます。今日の調子はいかがですか。', note: '午前中の挨拶。', alts: ['Morning! How\'s it going?', 'Hi, how are you doing today?'] },
          { en: 'Good afternoon. Please come in.', ja: 'こんにちは。どうぞお入りください。', note: '午後の挨拶。', alts: ['Hi there, come on in!'] },
          { en: 'Thank you for coming today.', ja: '本日はご来院ありがとうございます。', note: '', alts: ['Thanks for coming in today.'] },
          { en: 'My name is Tanaka. I\'ll be your therapist today.', ja: '担当の田中です。本日担当させていただきます。', note: '自己紹介。名前の部分を入れ替えてください。', alts: ['Hi, I\'m Tanaka. I\'ll be taking care of you today.'] },
          { en: 'Nice to meet you.', ja: 'はじめまして。', note: '初対面のとき。', alts: ['Great to meet you.'] }
        ]
      },
      {
        title: '予約と初回の確認',
        phrases: [
          { en: 'Do you have an appointment?', ja: 'ご予約はされていますか。', note: '', alts: ['Did you book ahead?'] },
          { en: 'May I have your name, please?', ja: 'お名前を伺えますか。', note: '"What is your name?" よりも丁寧です。', alts: ['Can I get your name?', 'What\'s your name?'] },
          { en: 'How do you spell your name?', ja: 'お名前のつづりを教えていただけますか。', note: '' },
          { en: 'How do you pronounce your name?', ja: 'お名前はどのように発音しますか。', note: '無理に読もうとせず、素直に聞くのが一番です。' },
          { en: 'Is this your first visit?', ja: '当院は初めてですか。', note: '', alts: ['Is this your first time here?', 'Have you been here before?'] },
          { en: 'Have you been to a seitai clinic in Japan before?', ja: '日本で整体を受けたことはありますか。', note: '整体が初めてか確認できます。' },
          { en: 'Your appointment is at two o\'clock, is that right?', ja: 'ご予約は2時でお間違いないですか。', note: '時刻の部分を入れ替えてください。' },
          { en: 'Please have a seat. We\'ll call you shortly.', ja: 'おかけになってお待ちください。まもなくお呼びします。', note: '', alts: ['Have a seat. We\'ll be with you in a minute.'] }
        ]
      },
      {
        title: '整体の説明',
        phrases: [
          { en: 'Seitai is a Japanese style of manual therapy.', ja: '整体は日本式の手技療法です。', note: '整体を知らない方への説明。' },
          { en: 'We use our hands to release tight muscles and improve your posture.', ja: '手を使って硬くなった筋肉をゆるめ、姿勢を整えていきます。', note: '' },
          { en: 'We don\'t use any machines or medication.', ja: '機械や薬は使いません。', note: '' },
          { en: 'Just so you know, it\'s not medical treatment, so we can\'t diagnose anything.', ja: '医療行為ではありませんので、診断はできません。', note: '大切な一言。トラブル防止のため必ず伝えましょう。"Just so you know," を付けると角が立ちません。' },
          { en: 'If you have a serious condition, please see a doctor first.', ja: '重い症状の場合は、まず医療機関を受診してください。', note: '' }
        ]
      },
      {
        title: '問診票のご案内',
        phrases: [
          { en: 'Could you fill out this form, please?', ja: 'こちらの問診票にご記入をお願いします。', note: '', alts: ['Can you fill this out for me?'] },
          { en: 'We have an English version. Here you are.', ja: '英語版がございます。どうぞ。', note: '' },
          { en: 'Please write your name, age, and phone number here.', ja: 'こちらにお名前、年齢、電話番号をご記入ください。', note: '' },
          { en: 'Please take your time.', ja: 'ごゆっくりどうぞ。', note: '', alts: ['No rush.'] },
          { en: 'Let me know if you have any questions about the form.', ja: '記入でわからないところがあればお知らせください。', note: '' },
          { en: 'Have you finished filling it out?', ja: 'ご記入は終わりましたか。', note: '', alts: ['All done?'] }
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
          { en: 'This way, please.', ja: 'こちらへどうぞ。', note: '一番よく使う案内の言葉。', alts: ['Come this way.', 'Follow me, please.'] },
          { en: 'Please follow me.', ja: 'ついてきてください。', note: '' },
          { en: 'Watch your step.', ja: '足元にお気をつけください。', note: '' },
          { en: 'The restroom is over there.', ja: 'お手洗いはあちらです。', note: '' },
          { en: 'Please lie down on the bed. Face up, please.', ja: 'ベッドに仰向けで横になってください。', note: '' },
          { en: 'Are you comfortable?', ja: '楽な姿勢ですか。', note: '', alts: ['Comfy?', 'Is that okay for you?'] },
          { en: 'Is the room temperature okay for you?', ja: '室温はいかがですか。', note: '' }
        ]
      }
    ],
    patientGroups: [
      {
        title: '受付・予約のとき',
        phrases: [
          { en: 'I have an appointment at three.', ja: '3時に予約しています。' },
          { en: 'Hi, I\'m here for my two o\'clock.', ja: '2時の予約で来ました。', note: 'for my 〜 o\'clock で「〜時の予約で」。ネイティブがよく使います。' },
          { en: 'I booked online.', ja: 'ネットで予約しました。' },
          { en: 'I don\'t have an appointment. Can I still come in?', ja: '予約していないのですが、受けられますか。' },
          { en: 'Sorry, I\'m a bit late.', ja: '少し遅れてすみません。' },
          { en: 'Am I too early?', ja: '早すぎましたか。' }
        ]
      },
      {
        title: '初めて・言葉のこと',
        phrases: [
          { en: 'This is my first time.', ja: '初めてです。' },
          { en: 'I\'ve never had seitai before.', ja: '整体は受けたことがありません。' },
          { en: 'What is seitai, exactly?', ja: '整体って、具体的にはどんなものですか。' },
          { en: 'Is it like a massage or a chiropractor?', ja: 'マッサージやカイロプラクティックのようなものですか。', note: 'よく聞かれる質問。整体の説明につなげましょう。' },
          { en: 'Do you speak English?', ja: '英語は話せますか。' },
          { en: 'I don\'t speak Japanese very well.', ja: '日本語はあまり話せません。' },
          { en: 'A friend recommended you.', ja: '友人に紹介されました。' },
          { en: 'I found you on the internet.', ja: 'ネットで見つけました。' },
          { en: 'I saw your reviews on Google Maps.', ja: 'Googleマップの口コミを見ました。' }
        ]
      },
      {
        title: '料金・時間・その他',
        phrases: [
          { en: 'How much does it cost?', ja: '料金はいくらですか。' },
          { en: 'How long does it take?', ja: 'どのくらい時間がかかりますか。' },
          { en: 'Can I fill this out in English?', ja: 'これは英語で書いてもいいですか。' },
          { en: 'Do I need to change my clothes?', ja: '着替える必要はありますか。' },
          { en: 'Where can I put my things?', ja: '荷物はどこに置けばいいですか。' },
          { en: 'Can I use the restroom first?', ja: '先にトイレをお借りしてもいいですか。' }
        ]
      }
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
          { en: 'What brings you in today?', ja: '今日はどうされましたか。', note: '「今日はどうされました？」の定番。下の言い換えはどれも自然で、堅すぎません。', alts: ['What brings you here today?', 'How can I help you today?', 'What\'s going on today?', 'So, what\'s bothering you?'] },
          { en: 'Where does it hurt?', ja: 'どこが痛みますか。', note: '', alts: ['Where\'s the pain?', 'Which part hurts?'] },
          { en: 'Could you show me where it hurts?', ja: '痛いところを指さしてもらえますか。', note: '言葉が通じなくても確実に伝わります。', alts: ['Can you point to where it hurts?'] },
          { en: 'Is the pain on one side or both sides?', ja: '痛みは片側ですか、両側ですか。', note: '' },
          { en: 'Which side is worse, the left or the right?', ja: '左右どちらがつらいですか。', note: '' },
          { en: 'Do you have pain anywhere else?', ja: '他に痛むところはありますか。', note: '', alts: ['Anywhere else?'] },
          { en: 'What\'s bothering you the most?', ja: '一番気になるのはどこですか。', note: '優先順位を決めるとき。', alts: ['What bugs you the most?'] },
          { en: 'What is your main concern today?', ja: '今日一番気になっていることは何ですか。', note: '主訴を一言で聞ける便利な質問。', alts: ['What\'s your main concern today?', 'What would you like me to focus on today?'] },
          { en: 'What symptom is bothering you the most today?', ja: '今日一番つらい症状はどれですか。', note: '症状がいくつもある方に、優先順位をつけてもらうときに。', alts: ['What\'s bugging you the most today?', 'If you had to pick one, what bothers you most?'] }
        ]
      },
      {
        title: 'いつから・きっかけ',
        phrases: [
          { en: 'How long have you had this pain?', ja: 'その痛みはいつからですか。', note: '', alts: ['How long has it been hurting?', 'When did this start?'] },
          { en: 'When did it start?', ja: 'いつ始まりましたか。', note: '' },
          { en: 'Did something happen? An accident or an injury?', ja: '何かきっかけはありましたか。事故やケガなど。', note: '', alts: ['Did you hurt yourself somehow?'] },
          { en: 'Did it start suddenly, or little by little?', ja: '急に始まりましたか、それとも少しずつですか。', note: '' },
          { en: 'Have you had this problem before?', ja: '以前にも同じ症状がありましたか。', note: '', alts: ['Has this happened before?'] },
          { en: 'Is it getting better, worse, or staying the same?', ja: '良くなっていますか、悪くなっていますか、変わりませんか。', note: '' }
        ]
      },
      {
        title: 'これまでの治療・ほかの施術',
        phrases: [
          { en: 'Have you had any treatment for this, like seitai or at a hospital?', ja: 'この症状に対して、整体や病院での治療はありますか。', note: 'これまでの治療歴を聞く定番の一言。', alts: ['Have you gotten any treatment for this before?', 'Have you seen anyone for this? Like a chiropractor, a physio, or a doctor?'] },
          { en: 'Are you seeing anyone else for this right now?', ja: '今、ほかの院や病院にも通っていますか。', note: '' },
          { en: 'What kind of treatment was it? Massage, injections, or medicine?', ja: 'どんな治療でしたか。マッサージ、注射、お薬など。', note: '' },
          { en: 'Did it help?', ja: '効果はありましたか。', note: '', alts: ['Did that help at all?'] },
          { en: 'What did the doctor say?', ja: '医師からは何と言われましたか。', note: '診断名を聞いた場合も、こちらから診断はしません。' },
          { en: 'Is there anything you didn\'t like about past treatments?', ja: '以前の施術で苦手だったことはありますか。', note: '「強い圧が苦手」「首を鳴らされるのが怖い」などがわかります。' }
        ]
      },
      {
        title: '痛みの種類を聞く',
        phrases: [
          { en: 'What kind of pain is it?', ja: 'どのような痛みですか。', note: '', alts: ['What does it feel like?'] },
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
          { en: 'On a scale of zero to ten, how bad is the pain?', ja: '0から10で、痛みはどのくらいですか。', note: '最重要フレーズ。言語の壁を越えられます。', alts: ['From zero to ten, how bad is it?'] },
          { en: 'Zero is no pain, and ten is the worst pain you can imagine.', ja: '0が痛みなし、10が想像できる最悪の痛みです。', note: '上の説明とセットで使います。' },
          { en: 'How is it right now?', ja: '今この瞬間はどうですか。', note: '' },
          { en: 'What about at its worst?', ja: '一番ひどいときはどうですか。', note: '' },
          { en: 'Does the pain wake you up at night?', ja: '夜、痛みで目が覚めますか。', note: '重症度の判断に有効です。' }
        ]
      },
      {
        title: '悪化・軽減する動作',
        phrases: [
          { en: 'What makes it worse?', ja: 'どんなときに悪化しますか。', note: '', alts: ['Is there anything that makes it worse?'] },
          { en: 'What makes it feel better?', ja: 'どんなときに楽になりますか。', note: '', alts: ['Does anything help?'] },
          { en: 'Does it hurt when you move, or even when you rest?', ja: '動かすと痛みますか、じっとしていても痛みますか。', note: '' },
          { en: 'Is it worse in the morning or in the evening?', ja: '朝と夜、どちらがつらいですか。', note: '' },
          { en: 'Does it hurt when you bend forward?', ja: '前にかがむと痛みますか。', note: '' },
          { en: 'Does it hurt when you turn your neck?', ja: '首を回すと痛みますか。', note: '' },
          { en: 'Does sitting for a long time make it worse?', ja: '長時間座っていると悪化しますか。', note: '' },
          { en: 'Does stretching help?', ja: 'ストレッチをすると楽になりますか。', note: '' }
        ]
      },
      {
        title: 'スクリーニング：動作確認の始め方',
        note: '問診の流れの中で、簡単な動作をしてもらい痛みの出方を確認します。言葉より先に見本を見せるのがコツです。',
        phrases: [
          { en: 'Next, I\'d like to check a few simple movements.', ja: '次に、いくつか簡単な動作を確認させてください。', note: '', alts: ['Now let\'s see how you move. It only takes a minute.'] },
          { en: 'I\'ll show you first. Please copy me.', ja: '先にお手本を見せます。まねしてください。', note: '動作の指示は見本が一番伝わります。', alts: ['Just do what I do.'] },
          { en: 'Move slowly, and only as far as feels okay.', ja: 'ゆっくり、無理のない範囲で動かしてください。', note: '', alts: ['Go slow, and stop if it hurts.'] },
          { en: 'Stop right away if you feel a sharp pain.', ja: '鋭い痛みが出たらすぐに止めてください。', note: '' },
          { en: 'Where do you feel it?', ja: 'どこに感じますか。', note: '', alts: ['Where do you feel that?'] },
          { en: 'Okay, come back to the start.', ja: 'はい、元の姿勢に戻ってください。', note: '', alts: ['And back to the middle.'] }
        ]
      },
      {
        title: 'スクリーニング：体幹（前屈・後屈・回旋・側屈）',
        phrases: [
          { en: 'Please bend forward slowly, like you\'re trying to touch your toes.', ja: 'ゆっくり前屈してください。つま先を触るように。', note: '前屈 = bending forward / forward bend', alts: ['Bend forward for me. Reach down toward your toes.'] },
          { en: 'Let your head and arms hang down.', ja: '頭と腕は力を抜いて垂らしてください。', note: '' },
          { en: 'Now put your hands on your lower back and lean back slowly.', ja: '腰に手を当てて、ゆっくり後ろに反ってください。', note: '後屈 = bending backward / leaning back。腰に手を添えてもらうと安全です。', alts: ['Hands on your hips, and lean back a little.'] },
          { en: 'Keep your hips facing forward, and twist your upper body to the right.', ja: '骨盤は正面のまま、上半身を右にひねってください。', note: '回旋 = rotation / twisting。骨盤を固定するのがポイント。', alts: ['Turn your upper body to the right. Keep your hips still.'] },
          { en: 'Now twist to the left.', ja: '次は左にひねってください。', note: '' },
          { en: 'Slide your right hand down the side of your leg.', ja: '右手を脚の横に沿わせて下ろしてください。', note: '側屈 = side bending。体を横に倒す動きです。', alts: ['Lean over to the right, like this.'] },
          { en: 'Now the other side.', ja: '反対側もお願いします。', note: '' },
          { en: 'Which side is harder, right or left?', ja: '左右どちらがやりにくいですか。', note: '' },
          { en: 'Do you feel it in your back, or down your leg?', ja: '腰に感じますか、それとも脚まで響きますか。', note: '脚への放散痛の確認。響く場合は慎重に。' }
        ]
      },
      {
        title: 'スクリーニング：首（前屈・後屈・回旋・側屈）',
        phrases: [
          { en: 'Tuck your chin and look down at your chest.', ja: 'あごを引いて、胸の方を見てください。', note: '首の前屈 = neck flexion', alts: ['Chin to chest, please.'] },
          { en: 'Now slowly look up at the ceiling.', ja: 'ゆっくり天井を見上げてください。', note: '首の後屈 = neck extension', alts: ['Look up for me.'] },
          { en: 'Turn your head and look over your right shoulder.', ja: '右肩越しに後ろを見るように、首を回してください。', note: '首の回旋 = neck rotation', alts: ['Look over your right shoulder.'] },
          { en: 'Now look over your left shoulder.', ja: '次に左肩越しに見てください。', note: '' },
          { en: 'Bring your right ear toward your right shoulder. Keep your shoulder down.', ja: '右耳を右肩に近づけてください。肩は上げないでください。', note: '首の側屈 = side bending', alts: ['Tilt your head to the right.'] },
          { en: 'Now your left ear to your left shoulder.', ja: '次は左耳を左肩へ。', note: '' },
          { en: 'Do you feel anything going down your arm?', ja: '腕の方に響く感じはありますか。', note: '神経症状の確認。しびれが出る場合は施術を控えます。' },
          { en: 'Do you feel dizzy at all?', ja: 'めまいはしませんか。', note: '見上げたり回したりでめまいが出る場合は中止してください。', alts: ['Any dizziness?'] }
        ]
      },
      {
        title: 'スクリーニング：肩（挙上・結帯・結髪）',
        phrases: [
          { en: 'Raise both arms forward and up over your head.', ja: '両腕を前から頭の上まで上げてください。', note: '肩の挙上（屈曲）= raising your arms', alts: ['Arms up, like this.'] },
          { en: 'Now raise your arms out to the sides and up.', ja: '次は横から上げてください。', note: '外転 = raising out to the side' },
          { en: 'Does it hurt at a certain point on the way up?', ja: '上げる途中で、痛む角度はありますか。', note: '途中だけ痛む＝有痛弧（painful arc）の確認。' },
          { en: 'Shrug your shoulders up toward your ears, then let them drop.', ja: '肩をすくめて耳に近づけ、ストンと下ろしてください。', note: '肩甲骨の挙上 = shoulder shrug。「肩の挙上」は腕を上げる意味とこの動きの両方で使われます。', alts: ['Shrug your shoulders, then relax.'] },
          { en: 'Put your hand behind your back and reach up as high as you can.', ja: '手を背中に回して、できるだけ上まで上げてください。', note: '結帯動作 = hand behind back。親指が届く高さで左右差を見ます。', alts: ['Reach behind your back, like you\'re tucking in your shirt.'] },
          { en: 'How high can your thumb go?', ja: '親指はどこまで届きますか。', note: '' },
          { en: 'Put your hand behind your head, like you\'re doing your hair.', ja: '髪を結ぶように、手を頭の後ろに回してください。', note: '結髪動作 = hand behind head', alts: ['Hand behind your head, please.'] },
          { en: 'Let\'s compare it with the other side.', ja: '反対側と比べてみましょう。', note: '' }
        ]
      },
      {
        title: '生活習慣・お仕事',
        phrases: [
          { en: 'What kind of work do you do?', ja: 'どのようなお仕事をされていますか。', note: '', alts: ['What do you do for work?'] },
          { en: 'Do you work at a desk?', ja: 'デスクワークですか。', note: '' },
          { en: 'How many hours a day do you use a computer?', ja: '1日何時間くらいパソコンを使いますか。', note: '' },
          { en: 'Do you look down at your phone a lot?', ja: 'スマホを下を向いて長く見ますか。', note: 'ストレートネックの確認。' },
          { en: 'Do you do any sports or exercise?', ja: 'スポーツや運動はされますか。', note: '', alts: ['Do you work out at all?'] },
          { en: 'How do you sleep? On your back, your side, or your stomach?', ja: '寝るときの姿勢は。仰向け、横向き、うつ伏せ。', note: '' },
          { en: 'How many hours do you sleep at night?', ja: '睡眠時間はどのくらいですか。', note: '' },
          { en: 'Do you feel a lot of stress lately?', ja: '最近ストレスは多いですか。', note: '' }
        ]
      },
      {
        title: '安全確認（施術前に必ず）',
        phrases: [
          { en: 'Have you seen a doctor about this?', ja: 'この件で医療機関を受診されましたか。', note: '', alts: ['Have you been to a doctor for this?'] },
          { en: 'Did you have any X-rays or an MRI?', ja: 'レントゲンやMRIは撮りましたか。', note: '' },
          { en: 'Have you ever had surgery? If so, where and when?', ja: '手術を受けたことはありますか。部位と時期も教えてください。', note: '' },
          { en: 'Are you taking any medication right now?', ja: '現在お薬を飲んでいますか。', note: '', alts: ['Are you on any medication right now?'] },
          { en: 'Are you taking any blood thinners?', ja: '血液をサラサラにする薬は飲んでいますか。', note: '内出血リスクの確認。必ず聞いてください。' },
          { en: 'Do you have high blood pressure or heart problems?', ja: '高血圧や心臓の疾患はありますか。', note: '' },
          { en: 'Do you have osteoporosis?', ja: '骨粗しょう症はありますか。', note: '圧の強さを決める判断材料です。' },
          { en: 'Are you pregnant, or could you be?', ja: '妊娠中、またはその可能性はありますか。', note: '女性には必ず確認してください。' },
          { en: 'How many weeks pregnant are you?', ja: '妊娠何週目ですか。', note: '' },
          { en: 'Do you have any allergies?', ja: 'アレルギーはありますか。', note: 'オイルを使う場合は必須。' },
          { en: 'Have you had a fever recently?', ja: '最近、発熱はありましたか。', note: '' },
          { en: 'Is there anything I should know before we start?', ja: '始める前に伝えておきたいことはありますか。', note: '締めの確認として便利です。', alts: ['Anything else I should know?'] }
        ]
      },
      {
        title: '聞き返す・確認する',
        phrases: [
          { en: 'Sorry, could you say that again?', ja: 'すみません、もう一度お願いできますか。', note: '遠慮なく使ってください。', alts: ['Sorry, one more time?', 'Sorry?'] },
          { en: 'Could you speak a little more slowly, please?', ja: 'もう少しゆっくり話していただけますか。', note: '' },
          { en: 'Let me make sure I understand.', ja: '確認させてください。', note: '', alts: ['Just to check —'] },
          { en: 'So, your lower back has been hurting for two weeks. Is that right?', ja: 'つまり、腰が2週間痛むということですね。', note: '部位と期間を入れ替えて使えます。' },
          { en: 'I\'m sorry, I don\'t know that word. Could you explain it?', ja: 'すみません、その単語がわかりません。説明していただけますか。', note: '正直に聞くのが一番早いです。' },
          { en: 'Let me look that up for a moment.', ja: '少し調べさせてください。', note: '' }
        ]
      }
    ],
    patientGroups: [
      {
        title: '主訴を伝える',
        phrases: [
          { en: 'My shoulders are really stiff.', ja: '肩がとても凝っています。' },
          { en: 'I\'ve had lower back pain for about a month.', ja: '1ヶ月ほど腰が痛いです。' },
          { en: 'My neck has been killing me.', ja: '首がものすごく痛いんです。', note: 'killing me = 「死ぬほど痛い」のくだけた言い方。深刻とは限りません。' },
          { en: 'I slept funny, and now my neck hurts.', ja: '寝違えて首が痛いです。', note: 'slept funny / slept wrong = 寝違えた' },
          { en: 'My lower back is acting up again.', ja: 'また腰がぶり返してきました。', note: 'act up = （持病が）ぐずる・悪化する' },
          { en: 'I just feel tight all over.', ja: '全身が張っている感じです。' },
          { en: 'Mostly, I want to relax today.', ja: '今日はとにかくリラックスしたいです。' }
        ]
      },
      {
        title: '痛みの様子を伝える',
        phrases: [
          { en: 'It\'s about a seven out of ten.', ja: '10段階で7くらいです。' },
          { en: 'It comes and goes.', ja: '痛くなったり治まったりします。' },
          { en: 'It\'s more of a dull ache.', ja: 'どちらかというと鈍い痛みです。' },
          { en: 'It\'s a sharp, stabbing pain.', ja: '刺すような鋭い痛みです。' },
          { en: 'It\'s sore when I touch it.', ja: '触ると痛いです。' },
          { en: 'It\'s throbbing.', ja: 'ズキズキします。' },
          { en: 'I feel numbness in my fingers.', ja: '指にしびれがあります。' },
          { en: 'I get pins and needles in my hand.', ja: '手がピリピリします。', note: 'pins and needles = ジンジン・ピリピリするしびれ' },
          { en: 'It shoots down my leg.', ja: '脚に走るように痛みます。' },
          { en: 'It hurts when I sit for a long time.', ja: '長く座っていると痛くなります。' },
          { en: 'It\'s worst first thing in the morning.', ja: '朝起きたときが一番つらいです。' }
        ]
      },
      {
        title: '生活・既往歴',
        phrases: [
          { en: 'I work at a desk all day.', ja: '一日中デスクワークです。' },
          { en: 'I\'m on my phone a lot.', ja: 'スマホをよく見ています。' },
          { en: 'I go running about three times a week.', ja: '週3回くらい走っています。' },
          { en: 'I\'m not taking any medication.', ja: '薬は飲んでいません。' },
          { en: 'I take medicine for high blood pressure.', ja: '高血圧の薬を飲んでいます。' },
          { en: 'I had surgery on my knee five years ago.', ja: '5年前に膝の手術をしました。' },
          { en: 'I\'m twenty weeks pregnant.', ja: '妊娠20週です。' }
        ]
      },
      {
        title: 'これまでの治療について',
        phrases: [
          { en: 'I\'ve been to a chiropractor before.', ja: '以前カイロプラクティックに行ったことがあります。' },
          { en: 'I saw a doctor, but they just gave me painkillers.', ja: '病院に行きましたが、痛み止めをもらっただけでした。' },
          { en: 'I had an X-ray, and they said it was fine.', ja: 'レントゲンを撮りましたが、問題ないと言われました。' },
          { en: 'I haven\'t had any treatment yet.', ja: 'まだ何も治療は受けていません。' },
          { en: 'Massage helps, but it always comes back.', ja: 'マッサージで楽になりますが、いつも戻ってしまいます。' }
        ]
      },
      {
        title: '動作確認（スクリーニング）のとき',
        phrases: [
          { en: 'It pulls right here.', ja: 'ここが突っ張ります。' },
          { en: 'I can\'t go any further.', ja: 'これ以上はいけません。' },
          { en: 'It hurts when I come back up.', ja: '戻るときに痛みます。' },
          { en: 'I feel it down my leg.', ja: '脚まで響きます。' },
          { en: 'My right side is harder.', ja: '右のほうがやりにくいです。' },
          { en: 'No pain. It\'s fine.', ja: '痛くありません。大丈夫です。' },
          { en: 'It\'s a little stiff, but okay.', ja: '少し硬いですが、大丈夫です。' },
          { en: 'I can only reach about here.', ja: 'このくらいまでしか届きません。' },
          { en: 'I get a bit dizzy when I look up.', ja: '上を向くと少しめまいがします。', note: 'このときは動作を中止してください。' }
        ]
      }
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
          { en: 'Now let\'s check how your body is doing.', ja: 'これからお身体をチェックさせていただきます。', note: '' },
          { en: 'This will take about five minutes.', ja: '5分ほどで終わります。', note: '' },
          { en: 'May I touch your shoulder?', ja: '肩に触れてもよろしいですか。', note: '部位を入れ替えて使います。必ず一言を。', alts: ['Is it okay if I touch your shoulder?'] },
          { en: 'Please tell me if anything hurts.', ja: '痛かったら教えてください。', note: '', alts: ['Let me know if anything hurts.'] },
          { en: 'Please don\'t push through the pain.', ja: '痛みを我慢しないでください。', note: '' },
          { en: 'Just tell me to stop at any time.', ja: 'いつでも止めてと言ってください。', note: '' },
          { en: 'Please relax. Let your body go loose.', ja: '力を抜いてリラックスしてください。', note: '', alts: ['Just relax.'] }
        ]
      },
      {
        title: '立位・姿勢チェック',
        phrases: [
          { en: 'Could you stand up, please?', ja: '立っていただけますか。', note: '', alts: ['Can you stand up for me?'] },
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
          { en: 'Please lie face down.', ja: 'うつ伏せになってください。', note: '', alts: ['Can you lie on your stomach?'] },
          { en: 'Please lie on your side.', ja: '横向きになってください。', note: '' },
          { en: 'Please turn over.', ja: '寝返りを打ってください。', note: '', alts: ['Can you roll over for me?'] },
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
          { en: 'I\'m going to press here.', ja: 'ここを押していきます。', note: '' },
          { en: 'Does this hurt?', ja: 'ここは痛いですか。', note: '最も使う一言。', alts: ['Any pain here?'] },
          { en: 'How about here?', ja: 'ここはどうですか。', note: '' },
          { en: 'Tell me when you feel it.', ja: '感じたら教えてください。', note: '' },
          { en: 'Is this the spot?', ja: 'ここですか。', note: '' },
          { en: 'Is the pressure okay?', ja: '圧の強さは大丈夫ですか。', note: '', alts: ['How\'s the pressure?'] },
          { en: 'Too strong? Or would you like more pressure?', ja: '強すぎますか。もっと強くしましょうか。', note: '' },
          { en: 'This muscle is very tight.', ja: 'この筋肉はかなり硬くなっています。', note: '' },
          { en: 'You have a knot right here.', ja: 'ここにしこりがありますね。', note: 'knot = 硬結。ネイティブによく通じる表現。' },
          { en: 'Try not to hold your breath.', ja: '息を止めないようにしてください。', note: '' }
        ]
      }
    ],
    patientGroups: [
      {
        title: '触られているとき',
        phrases: [
          { en: 'That\'s the spot.', ja: 'そこです。' },
          { en: 'Right there!', ja: 'まさにそこです。' },
          { en: 'Ouch, that hurts!', ja: '痛いです。' },
          { en: 'That\'s a bit tender.', ja: '少し押されると痛いです。' },
          { en: 'It\'s a little sore, but it\'s okay.', ja: '少し痛いけど、大丈夫です。' },
          { en: 'It feels tight, but it doesn\'t hurt.', ja: '張っていますが、痛くはありません。' },
          { en: 'That feels good.', ja: '気持ちいいです。' },
          { en: 'A little softer, please.', ja: 'もう少し弱くしてください。' },
          { en: 'You can press harder.', ja: 'もっと強くて大丈夫です。' },
          { en: 'I can feel it all the way down my arm.', ja: '腕の先まで響きます。' }
        ]
      },
      {
        title: '動作・姿勢を見ているとき',
        phrases: [
          { en: 'I can\'t turn my neck that far.', ja: 'そこまで首が回りません。' },
          { en: 'I can\'t bend any further.', ja: 'これ以上曲がりません。' },
          { en: 'My hamstrings are really tight.', ja: '太ももの裏がすごく硬いです。' },
          { en: 'I\'ve always had bad posture.', ja: '昔から姿勢が悪いんです。' },
          { en: 'Is that normal?', ja: 'それって普通ですか。' },
          { en: 'Should I keep my eyes closed?', ja: '目は閉じたままでいいですか。' }
        ]
      }
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
          { en: 'Let me explain what I found.', ja: 'わかったことをご説明します。', note: '', alts: ['So, here\'s what I found.'] },
          { en: 'Can I show you something in the mirror?', ja: '鏡で少し見ていただけますか。', note: '' },
          { en: 'Let me show you on this chart.', ja: 'この図でご説明します。', note: '' },
          { en: 'The good news is, this is very common.', ja: '良いお知らせは、これはとてもよくある状態だということです。', note: '不安をやわらげる一言。', alts: ['Good news — this is really common.'] },
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
          { en: 'That\'s why you feel heavy and stiff.', ja: 'それが重だるさや凝りの原因です。', note: '' },
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
          { en: 'Your hips aren\'t level.', ja: '骨盤の高さが左右で違います。', note: '' },
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
          { en: 'That\'s where your pain is coming from.', ja: 'そこが痛みの出どころです。', note: '' },
          { en: 'The place that hurts isn\'t always the place that causes it.', ja: '痛む場所と原因の場所は、必ずしも同じではありません。', note: '説得力のある一言。' },
          { en: 'So we need to work on both areas.', ja: 'ですから両方にアプローチする必要があります。', note: '' }
        ]
      },
      {
        title: '理解を確認する',
        phrases: [
          { en: 'Does that make sense?', ja: 'ここまでよろしいですか。', note: '', alts: ['Make sense?'] },
          { en: 'Do you have any questions so far?', ja: 'ここまでで質問はありますか。', note: '', alts: ['Any questions so far?'] },
          { en: 'Is there anything you\'d like me to go over again?', ja: 'もう一度説明したほうがよいところはありますか。', note: '' },
          { en: 'How does that sound to you?', ja: 'いかがでしょうか。', note: '' }
        ]
      },
      {
        title: '医療機関をすすめる',
        phrases: [
          { en: 'I think you should see a doctor about this.', ja: 'この件は医療機関の受診をおすすめします。', note: '', alts: ['I\'d recommend getting this checked by a doctor.'] },
          { en: 'This is outside what we can help with here.', ja: 'これは当院で対応できる範囲を超えています。', note: '' },
          { en: 'I\'d rather be safe. Please get it checked first.', ja: '念のため、まず検査を受けてください。', note: '' },
          { en: 'I can still work on the surrounding muscles today, gently.', ja: '周辺の筋肉には今日やさしくアプローチできます。', note: '' },
          { en: 'Here\'s the name of a nearby clinic.', ja: '近くの医療機関の名前です。', note: '' }
        ]
      }
    ],
    patientGroups: [
      {
        title: '原因を聞く',
        phrases: [
          { en: 'Why does it hurt there?', ja: 'なぜそこが痛いのですか。' },
          { en: 'What caused it?', ja: '原因は何ですか。' },
          { en: 'So what\'s causing it?', ja: 'それで、原因は何なんですか。' },
          { en: 'Is it because of my posture?', ja: '姿勢のせいですか。' },
          { en: 'Is it because I sit too much?', ja: '座りすぎのせいですか。' },
          { en: 'Is it a slipped disc?', ja: 'ヘルニアですか。', note: 'slipped disc = 椎間板ヘルニアのくだけた言い方。診断はできないので受診をご案内します。' }
        ]
      },
      {
        title: '見通し・心配ごと',
        phrases: [
          { en: 'Is it serious?', ja: '重症ですか。' },
          { en: 'Will it get better?', ja: '良くなりますか。' },
          { en: 'Can you fix it?', ja: '治せますか。' },
          { en: 'How long will it take to heal?', ja: '治るのにどのくらいかかりますか。' },
          { en: 'Should I see a doctor?', ja: '病院に行ったほうがいいですか。' },
          { en: 'Do I need an X-ray?', ja: 'レントゲンは必要ですか。' }
        ]
      },
      {
        title: '相づち・聞き返し',
        phrases: [
          { en: 'Oh, that makes sense.', ja: 'なるほど、納得です。' },
          { en: 'I had no idea.', ja: '全然知りませんでした。' },
          { en: 'Sorry, could you explain that more simply?', ja: 'すみません、もう少し簡単に説明してもらえますか。' }
        ]
      }
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
          { en: 'Here\'s my plan for today.', ja: '本日の施術内容をご提案します。', note: '' },
          { en: 'First, I\'ll loosen the tight muscles in your neck and shoulders.', ja: 'まず首と肩の硬い筋肉をゆるめます。', note: '' },
          { en: 'Then I\'ll work on your hips to balance your posture.', ja: '次に姿勢を整えるため股関節にアプローチします。', note: '' },
          { en: 'Today\'s session will be about forty minutes.', ja: '本日の施術は40分ほどです。', note: '' },
          { en: 'I\'ll use my hands only. No machines.', ja: '手技のみで行います。機械は使いません。', note: '' },
          { en: 'I\'ll avoid the area where you had surgery.', ja: '手術された部位は避けて行います。', note: '' },
          { en: 'I\'ll work gently today since this is your first visit.', ja: '初回ですので、今日はやさしめに行います。', note: '' }
        ]
      },
      {
        title: '施術中の声かけ',
        phrases: [
          { en: 'How is the pressure? Okay, or too strong?', ja: '圧はいかがですか。大丈夫ですか、強すぎますか。', note: '', alts: ['How\'s the pressure?'] },
          { en: 'Let me know if you feel uncomfortable.', ja: '不快なことがあれば教えてください。', note: '' },
          { en: 'You can close your eyes and relax.', ja: '目を閉じてリラックスしていただいて大丈夫です。', note: '' },
          { en: 'Take a deep breath. Now let it out.', ja: '深く息を吸って。吐いてください。', note: '' },
          { en: 'This might feel a little sore, but it shouldn\'t be sharp pain.', ja: '少し痛気持ちいい感じはありますが、鋭い痛みはないはずです。', note: '' },
          { en: 'Almost done.', ja: 'もうすぐ終わります。', note: '', alts: ['Just a couple more minutes.'] },
          { en: 'We\'re all finished. Please take your time getting up.', ja: '終わりました。ゆっくり起き上がってください。', note: '' }
        ]
      },
      {
        title: '圧の好み・強さの確認',
        phrases: [
          { en: 'How much pressure do you prefer?', ja: 'どのくらいの強さがお好みですか。', note: '"How pressure ...?" は much が必要です。施術の最初に聞きましょう。', alts: ['Do you like firm pressure or light pressure?', 'What kind of pressure do you like?'] },
          { en: 'Is this pressure too much? Please let me know.', ja: 'この強さ、強すぎませんか。教えてくださいね。', note: '', alts: ['Is this too much?'] },
          { en: 'Let me know if it\'s too strong or too soft.', ja: '強すぎたり弱すぎたりしたら教えてください。', note: '' },
          { en: 'If the pressure is too much, please let me know anytime.', ja: '強すぎるときは、いつでも言ってくださいね。', note: '施術中いつでも言っていいと伝えると、患者様が安心します。' },
          { en: 'Firmer, or softer?', ja: '強め、弱め、どちらがいいですか。', note: '' },
          { en: 'How\'s this?', ja: 'これはどうですか。', note: '' },
          { en: 'I\'ll go a little lighter here.', ja: 'ここは少し弱めにしますね。', note: '' },
          { en: 'I\'ll press a little deeper now.', ja: '少し深めに押しますね。', note: '' }
        ]
      },
      {
        title: '施術後の確認',
        phrases: [
          { en: 'How do you feel now?', ja: '今のお身体の感じはいかがですか。', note: '', alts: ['How are you feeling?', 'How does that feel?'] },
          { en: 'Try turning your neck again. Is it easier?', ja: 'もう一度首を回してみてください。楽になりましたか。', note: '施術前後の比較。効果実感につながります。' },
          { en: 'Can you feel the difference?', ja: '違いを感じますか。', note: '', alts: ['Feel any different?'] },
          { en: 'You might feel a little sore tomorrow. That\'s normal.', ja: '明日少しだるさが出るかもしれません。正常な反応です。', note: '好転反応の説明。' },
          { en: 'It usually goes away in a day or two.', ja: '通常1〜2日でおさまります。', note: '' },
          { en: 'Please drink plenty of water today.', ja: '今日は水分を多めに取ってください。', note: '', alts: ['Drink lots of water today.'] },
          { en: 'Please avoid drinking alcohol tonight.', ja: '今夜は飲酒を控えてください。', note: '' },
          { en: 'Try to avoid heavy exercise today.', ja: '今日は激しい運動は避けてください。', note: '' },
          { en: 'A warm bath tonight would be good for you.', ja: '今夜はゆっくり湯船に浸かるとよいですよ。', note: '' }
        ]
      },
      {
        title: 'セルフケアの指導',
        phrases: [
          { en: 'Let me show you a stretch you can do at home.', ja: 'ご自宅でできるストレッチを一つご紹介します。', note: '' },
          { en: 'Please watch me first, then try it yourself.', ja: 'まず見ていてください。その後やってみましょう。', note: '' },
          { en: 'Hold this position for thirty seconds.', ja: 'この姿勢を30秒キープしてください。', note: '' },
          { en: 'Do this three times a day.', ja: '1日3回行ってください。', note: '' },
          { en: 'Do it gently. You should feel a stretch, not pain.', ja: 'やさしく行ってください。伸びを感じる程度で、痛みは出さないでください。', note: '' },
          { en: 'Try to stand up and move every thirty minutes at work.', ja: '仕事中は30分ごとに立って動くようにしてください。', note: '' },
          { en: 'Try to raise your screen to eye level.', ja: '画面を目の高さまで上げてみてください。', note: '' },
          { en: 'Use heat, not ice, for this kind of stiffness.', ja: 'この種の凝りには冷やすより温めてください。', note: '' },
          { en: 'Use ice for the first two days after an injury.', ja: 'ケガの後2日間は冷やしてください。', note: '' },
          { en: 'I\'ll send you a video link if you like.', ja: 'よろしければ動画のリンクをお送りします。', note: '' }
        ]
      },
      {
        title: '通院プランの提案',
        phrases: [
          { en: 'For now, I\'d suggest coming once a week.', ja: '今の状態ですと、週1回の通院をおすすめします。', note: '' },
          { en: 'Most people feel a clear difference after three or four sessions.', ja: '多くの方は3〜4回で明らかな変化を感じます。', note: '"most people" で断定を避けています。' },
          { en: 'Let\'s start with four sessions and see how you feel.', ja: 'まず4回受けていただいて、様子を見ましょう。', note: '' },
          { en: 'After that, once a month is usually enough to maintain it.', ja: 'その後は月1回で維持できることが多いです。', note: '' },
          { en: 'It took years to develop, so it takes time to change.', ja: '長い年月をかけてできた状態なので、変化にも時間がかかります。', note: '過度な期待の調整に。' },
          { en: 'Of course, it\'s totally up to you.', ja: 'もちろん、お決めになるのはご自身です。', note: '押し売り感を消す一言。' },
          { en: 'How often do you think you can come?', ja: 'どのくらいの頻度で通えそうですか。', note: '' }
        ]
      },
      {
        title: '会計・次回予約・お見送り',
        phrases: [
          { en: 'Today\'s total is six thousand yen.', ja: '本日は6000円になります。', note: '', alts: ['That\'ll be six thousand yen.'] },
          { en: 'We accept cash and credit cards.', ja: '現金とクレジットカードがご利用いただけます。', note: '' },
          { en: 'Would you like to book your next appointment?', ja: '次回のご予約をお取りしますか。', note: '', alts: ['Want to book your next visit?'] },
          { en: 'When would be convenient for you?', ja: 'いつがご都合よろしいですか。', note: '', alts: ['When works for you?'] },
          { en: 'How about next Tuesday at three?', ja: '来週の火曜3時はいかがですか。', note: '' },
          { en: 'Here\'s your appointment card.', ja: '予約カードです。', note: '' },
          { en: 'If you need to cancel, please call us the day before.', ja: 'キャンセルの場合は前日までにお電話ください。', note: '' },
          { en: 'Please contact us if the pain gets worse.', ja: '痛みが強くなったらご連絡ください。', note: '' },
          { en: 'Thank you very much. Please take care.', ja: 'ありがとうございました。お大事になさってください。', note: '', alts: ['Thanks so much! Take care.'] },
          { en: 'We look forward to seeing you again.', ja: 'またのご来院をお待ちしております。', note: '', alts: ['See you next time!'] }
        ]
      }
    ],
    patientGroups: [
      {
        title: '施術中',
        phrases: [
          { en: 'Can you go a little harder?', ja: 'もう少し強くしてもらえますか。' },
          { en: 'That\'s a bit too strong.', ja: 'ちょっと強すぎます。' },
          { en: 'Could you go easy on my neck?', ja: '首はやさしめにお願いできますか。' },
          { en: 'Can you focus on my shoulders?', ja: '肩を重点的にお願いできますか。' },
          { en: 'That feels amazing.', ja: 'すごく気持ちいいです。' },
          { en: 'I\'m a little cold.', ja: '少し寒いです。' }
        ]
      },
      {
        title: '施術後・セルフケア',
        phrases: [
          { en: 'That feels so much better, thank you.', ja: 'とても楽になりました。ありがとうございます。' },
          { en: 'I feel so much lighter.', ja: '体がすごく軽くなりました。' },
          { en: 'Wow, I can turn my neck now.', ja: 'わあ、首が回るようになりました。' },
          { en: 'How often should I come?', ja: 'どのくらいの頻度で通えばいいですか。' },
          { en: 'Can I exercise today?', ja: '今日は運動してもいいですか。' },
          { en: 'Can I take a bath tonight?', ja: '今夜はお風呂に入ってもいいですか。' },
          { en: 'Should I put ice on it?', ja: '冷やしたほうがいいですか。' },
          { en: 'Should I do the stretch every day?', ja: 'ストレッチは毎日やったほうがいいですか。' }
        ]
      },
      {
        title: '会計・次回予約',
        phrases: [
          { en: 'Do you take credit cards?', ja: 'クレジットカードは使えますか。' },
          { en: 'Can I pay with my phone?', ja: 'スマホ決済はできますか。' },
          { en: 'Do you have a receipt?', ja: '領収書はもらえますか。' },
          { en: 'Can I book for next week?', ja: '来週の予約はできますか。' },
          { en: 'Do you have anything on the weekend?', ja: '週末は空いていますか。' },
          { en: 'I\'ll check my schedule and get back to you.', ja: '予定を確認してまた連絡します。' }
        ]
      }
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
    for (const group of phase.patientGroups || []) {
      for (const p of group.phrases) {
        out.push({ ...p, source: phase.title, group: `患者様の返答（${group.title}）`, phaseId: phase.id, kind: 'patient' });
      }
    }
  }
  return out;
}
