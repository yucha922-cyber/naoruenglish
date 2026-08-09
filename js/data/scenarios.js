// 会話シミュレーション用シナリオ
// 患者様（パソコン側）の発言に対して、最適な返答を3択から選びます。
// section: 対応する学習範囲のID（お電話対応・施術の流れの各パート）

export const scenarios = [
  {
    id: 'phone-change',
    section: 'phone-change',
    title: '【電話】予約を変更したい',
    level: '初級',
    icon: '🔄',
    description: '最も多い問い合わせです。予約の特定 → 変更先の提案 → 復唱まで通しで練習します。',
    patientProfile: 'Emily / お電話 / 木曜のご予約を変更したい / 日付があいまい',
    steps: [
      {
        patient: { en: 'Hi, I need to change my appointment this week.', ja: 'もしもし、今週の予約を変更したいのですが。' },
        hint: 'まず快く受けてから、お名前を伺いましょう。',
        options: [
          { en: 'Of course. May I have your name, please?', ja: 'かしこまりました。お名前を伺えますか。', correct: true, feedback: '完璧です。「Of course」で先に安心させてから本題に入っています。' },
          { en: 'Why do you want to change it?', ja: 'なぜ変更したいのですか。', correct: false, feedback: '理由を問いただす必要はありません。相手を責めているように聞こえます。' },
          { en: 'Changing is difficult.', ja: '変更は難しいです。', correct: false, feedback: 'まだ何も確認していません。最初から断ってはいけません。' }
        ]
      },
      {
        patient: { en: 'It\'s Emily Schneider.', ja: 'エミリー・シュナイダーです。' },
        hint: '聞き慣れない苗字です。つづりを確認しましょう。',
        options: [
          { en: 'Thank you. Could you spell your last name for me?', ja: 'ありがとうございます。苗字のつづりをお願いできますか。', correct: true, feedback: '正解です。電話で最も間違えるのが名前。必ずつづりを確認してください。' },
          { en: 'Okay, Emily Snider. Got it.', ja: 'はい、エミリー・スナイダーですね。', correct: false, feedback: '聞き取れたつもりで進むのが一番危険です。予約が見つからなくなります。' },
          { en: 'Sorry, I cannot understand your name.', ja: 'すみません、お名前がわかりません。', correct: false, feedback: '突き放しています。「つづりを教えてください」と聞けば解決します。' }
        ]
      },
      {
        patient: { en: 'Sure. S-C-H-N-E-I-D-E-R.', ja: 'はい。S-C-H-N-E-I-D-E-R です。' },
        hint: '復唱してから、予約を探しましょう。',
        options: [
          { en: 'S-C-H-N-E-I-D-E-R. Thank you. Let me find your booking.', ja: 'S-C-H-N-E-I-D-E-R ですね。ありがとうございます。ご予約をお調べします。', correct: true, feedback: '復唱してから確認へ。この一手間が予約ミスを防ぎます。' },
          { en: 'Okay. Please wait.', ja: 'はい。お待ちください。', correct: false, feedback: '復唱がありません。また「Please wait」だけだと少しぶっきらぼうです。' },
          { en: 'Can you say it again more slowly?', ja: 'もう一度ゆっくり言ってもらえますか。', correct: false, feedback: '1文字ずつ言ってくれています。聞き返すより復唱で確認しましょう。' }
        ]
      },
      {
        patient: { en: 'I think it was Thursday? Or maybe Friday. I\'m not sure.', ja: '木曜だったかな。金曜かも。よく覚えていません。' },
        hint: 'あいまいでも大丈夫です。こちらで調べて提示しましょう。',
        options: [
          { en: 'No problem, I can see it here. You\'re booked for Thursday at two.', ja: '大丈夫です、こちらで確認できました。木曜2時のご予約ですね。', correct: true, feedback: '相手に思い出させず、こちらが答えを出す。これが一番親切です。' },
          { en: 'You need to know your appointment date.', ja: 'ご予約日は把握しておいてください。', correct: false, feedback: '正論ですが、電話でこれを言うと確実に印象が悪くなります。' },
          { en: 'Please check your email and call us back.', ja: 'メールを確認して、かけ直してください。', correct: false, feedback: 'こちらで調べられます。二度手間をかけさせないでください。' }
        ]
      },
      {
        patient: { en: 'Oh right, Thursday at two. Can I move it to next week?', ja: 'そうそう、木曜2時です。来週に動かせますか。' },
        hint: '希望を具体的に聞き出しましょう。',
        options: [
          { en: 'Certainly. What day and time would suit you best?', ja: 'もちろんです。ご希望の曜日とお時間はございますか。', correct: true, feedback: '曜日と時間を一度に聞けています。やり取りの往復が減ります。' },
          { en: 'Next week is probably full.', ja: '来週はたぶん埋まっています。', correct: false, feedback: '調べる前に「たぶん」で答えてはいけません。' },
          { en: 'Yes. Bye.', ja: 'はい。では。', correct: false, feedback: '変更先が決まっていません。会話が成立していません。' }
        ]
      },
      {
        patient: { en: 'Would Wednesday afternoon work?', ja: '水曜の午後は空いていますか。' },
        hint: 'あいにく埋まっています。断って終わらせず、代案を出しましょう。',
        options: [
          { en: 'I\'m afraid Wednesday is fully booked. We have Tuesday at three, or Thursday at eleven.', ja: '申し訳ございません、水曜は満席です。火曜3時か木曜11時が空いております。', correct: true, feedback: '理想的です。断りと代案をひと息で。しかも候補を2つ出しています。' },
          { en: 'No, Wednesday is full.', ja: 'いいえ、水曜は満席です。', correct: false, feedback: '事実ですが、ここで会話が止まります。代案を必ず添えてください。' },
          { en: 'Wednesday is full, so please call again next month.', ja: '水曜は満席なので、来月またお電話ください。', correct: false, feedback: '来週の他の日を提案すべきです。予約を逃しています。' }
        ]
      },
      {
        patient: { en: 'Thursday at eleven sounds good.', ja: '木曜11時でお願いします。' },
        hint: '変更を確定し、必ず復唱してください。',
        options: [
          { en: 'I\'ve moved you to Thursday the twenty-second, at eleven. Is that correct?', ja: '22日木曜11時に変更いたしました。お間違いないでしょうか。', correct: true, feedback: '曜日・日付・時刻をすべて含めた復唱。ここまでやれば予約事故は起きません。' },
          { en: 'Okay, done.', ja: 'はい、完了です。', correct: false, feedback: '復唱がありません。「木曜」と「火曜」の取り違えはここで起きます。' },
          { en: 'Thursday. Okay.', ja: '木曜ですね。はい。', correct: false, feedback: '日付と時刻が抜けています。曜日だけでは足りません。' }
        ]
      },
      {
        patient: { en: 'Perfect, thank you so much!', ja: '完璧です、ありがとうございます。' },
        hint: '最後に気持ちよく締めましょう。',
        options: [
          { en: 'You\'re very welcome. We look forward to seeing you on Thursday.', ja: 'とんでもございません。木曜日にお待ちしております。', correct: true, feedback: '最後にもう一度曜日を言うことで、記憶に残ります。' },
          { en: 'Okay. Goodbye.', ja: 'はい。さようなら。', correct: false, feedback: '間違いではありませんが、そっけない印象で終わってしまいます。' },
          { en: 'Please do not change it again.', ja: 'もう変更しないでくださいね。', correct: false, feedback: '冗談のつもりでも、電話では表情が見えず角が立ちます。' }
        ]
      }
    ]
  },

  {
    id: 'phone-booking',
    section: 'phone-booking',
    title: '【電話】新規のご予約を受ける',
    level: '初級',
    icon: '🗓️',
    description: '初めての方からのご予約。日時の確定と、初回のご案内まで。',
    patientProfile: 'Tom / お電話 / 当院は初めて / 肩こりでお困り',
    steps: [
      {
        patient: { en: 'Hello, do you speak English? I\'d like to book a massage.', ja: 'もしもし、英語は通じますか。予約を取りたいのですが。' },
        hint: 'まず「大丈夫です」と安心させましょう。',
        options: [
          { en: 'Yes, we can help you in English. Have you visited us before?', ja: 'はい、英語で対応できます。当院のご利用は初めてですか。', correct: true, feedback: '完璧です。安心させてから、初回かどうかの確認に進んでいます。' },
          { en: 'A little.', ja: '少しだけ。', correct: false, feedback: '相手を不安にさせます。「対応できます」と言い切りましょう。' },
          { en: 'We are a seitai clinic, not a massage shop.', ja: 'うちはマッサージ店ではなく整体院です。', correct: false, feedback: '訂正から入ると冷たく響きます。予約を受けてから説明できます。' }
        ]
      },
      {
        patient: { en: 'No, it\'s my first time. Do you have anything this week?', ja: '初めてです。今週空いていますか。' },
        hint: '希望を絞り込みましょう。',
        options: [
          { en: 'Let me check. Do you prefer the morning or the afternoon?', ja: '確認いたします。午前と午後、どちらがよろしいですか。', correct: true, feedback: '二択で聞くと、相手も答えやすくなります。' },
          { en: 'What day? What time? What is your name?', ja: '何曜日。何時。お名前は。', correct: false, feedback: '一度に3つ聞くと、電話では必ず混乱します。一つずつ。' },
          { en: 'We are very busy this week.', ja: '今週は混んでいます。', correct: false, feedback: '調べる前に諦めさせています。' }
        ]
      },
      {
        patient: { en: 'Afternoon would be better. I finish work at five.', ja: '午後がいいです。5時に仕事が終わります。' },
        hint: '勤務時間を踏まえた提案をしましょう。',
        options: [
          { en: 'We have Friday at six, or Saturday at two. Would either work?', ja: '金曜6時か土曜2時が空いております。いかがでしょうか。', correct: true, feedback: '5時終業を踏まえた時間を提案できています。よく聞けています。' },
          { en: 'We have Tuesday at ten in the morning.', ja: '火曜の午前10時が空いています。', correct: false, feedback: '午後希望と伝えられています。話を聞けていません。' },
          { en: 'What time do you want?', ja: '何時がいいですか。', correct: false, feedback: 'こちらから候補を出すほうが早く決まります。' }
        ]
      },
      {
        patient: { en: 'Friday at six is great.', ja: '金曜6時でお願いします。' },
        hint: 'お名前と連絡先を伺いましょう。',
        options: [
          { en: 'May I have your name and a phone number, please?', ja: 'お名前とお電話番号を伺えますか。', correct: true, feedback: '予約に必要な情報を過不足なく聞けています。' },
          { en: 'Okay, see you Friday.', ja: 'では金曜に。', correct: false, feedback: '名前も連絡先も聞いていません。予約が成立しません。' },
          { en: 'Please send us an email with your details.', ja: '詳細はメールで送ってください。', correct: false, feedback: '今この電話で聞けば済みます。手間をかけさせないでください。' }
        ]
      },
      {
        patient: { en: 'Tom Baker. My number is 090-1234-5678.', ja: 'トム・ベイカーです。番号は090-1234-5678です。' },
        hint: '番号は必ず復唱してください。',
        options: [
          { en: 'Let me read that back. Zero-nine-zero, one-two-three-four, five-six-seven-eight.', ja: '復唱します。090-1234-5678。', correct: true, feedback: '1桁ずつ読み返す。これで番号の聞き間違いはなくなります。' },
          { en: 'Got it, thank you.', ja: '承知しました。', correct: false, feedback: '復唱がありません。連絡がつかなくなるリスクがあります。' },
          { en: 'Is that a mobile phone?', ja: '携帯電話ですか。', correct: false, feedback: '確認としては悪くありませんが、まず復唱が先です。' }
        ]
      },
      {
        patient: { en: 'That\'s right. Is there anything I should know?', ja: 'その通りです。何か知っておくことはありますか。' },
        hint: '初回の方に必要な案内をしましょう。',
        options: [
          { en: 'The first session takes about sixty minutes. Please come ten minutes early for the form.', ja: '初回は60分ほどです。問診票のご記入がありますので10分前にお越しください。', correct: true, feedback: '所要時間と早めの来院。初回に必要な情報をきちんと伝えています。' },
          { en: 'No, nothing. See you Friday.', ja: '特にありません。金曜に。', correct: false, feedback: '初回の方は不安です。伝えるべきことがあります。' },
          { en: 'Please bring your health insurance card.', ja: '保険証をお持ちください。', correct: false, feedback: '整体は保険適用外です。誤解を招きます。' }
        ]
      }
    ]
  },

  {
    id: 'phone-directions',
    section: 'phone-access',
    title: '【電話】道に迷った方への案内',
    level: '中級',
    icon: '🗺️',
    description: '駅に着いたけれど場所がわからない、という電話。焦っている相手を落ち着かせます。',
    patientProfile: 'Anna / お電話 / 駅に到着済み / 予約時刻が迫っている',
    steps: [
      {
        patient: { en: 'Hi, I\'m at the station but I can\'t find your place. I think I\'m lost.', ja: 'もしもし、駅にいるのですが場所がわかりません。迷ったみたいです。' },
        hint: 'まず落ち着かせて、現在地を特定しましょう。',
        options: [
          { en: 'No problem at all, we\'ll find you. Are you inside the station or outside?', ja: '大丈夫ですよ、ご案内します。駅の中ですか、外ですか。', correct: true, feedback: '安心させてから位置の特定へ。焦っている方への理想的な対応です。' },
          { en: 'Our address is 3-14-2 Sakura-cho, Naka-ku.', ja: '住所は中区桜町3-14-2です。', correct: false, feedback: '日本の番地は外国の方にはまず伝わりません。目印で案内しましょう。' },
          { en: 'You are late. Please hurry.', ja: '遅刻ですよ。急いでください。', correct: false, feedback: '迷っている方をさらに焦らせています。' }
        ]
      },
      {
        patient: { en: 'I\'m outside. I see a big bank in front of me.', ja: '外です。目の前に大きな銀行が見えます。' },
        hint: '出口を特定しましょう。',
        options: [
          { en: 'Great, that\'s the East Exit. Can you see a convenience store on your left?', ja: 'そちらは東口ですね。左手にコンビニは見えますか。', correct: true, feedback: '目印から出口を特定し、次の目印へ。電話の道案内はこの積み重ねです。' },
          { en: 'Which exit did you use?', ja: 'どの出口から出ましたか。', correct: false, feedback: '迷っている方は出口の名前を知りません。目印から逆算しましょう。' },
          { en: 'Go north for two hundred meters.', ja: '北へ200メートル進んでください。', correct: false, feedback: '方角は歩行者には伝わりません。目印を使ってください。' }
        ]
      },
      {
        patient: { en: 'Yes! I can see it.', ja: 'はい、見えます。' },
        hint: '曲がる回数は少なく。一度に伝えるのは1〜2手までです。',
        options: [
          { en: 'Perfect. Walk past the convenience store and go straight for two minutes.', ja: 'そのコンビニを通り過ぎて、2分ほどまっすぐ歩いてください。', correct: true, feedback: '一度に一つの指示。電話ではこれが正解です。' },
          { en: 'Turn left, then right, then left again at the third light, then cross the bridge.', ja: '左に曲がって、右、3つ目の信号をまた左、橋を渡ってください。', correct: false, feedback: '多すぎます。電話で覚えられるのは1〜2手までです。' },
          { en: 'Just use Google Maps.', ja: 'グーグルマップを使ってください。', correct: false, feedback: '地図を送るのは有効ですが、突き放す言い方は避けましょう。' }
        ]
      },
      {
        patient: { en: 'Okay, I\'m walking... I don\'t see anything.', ja: '歩いています…何も見当たりません。' },
        hint: '口頭で難しければ、地図を送るのが最も確実です。',
        options: [
          { en: 'Let me send you a map link by text. Is this number okay?', ja: '地図のリンクをSMSでお送りします。この番号でよろしいですか。', correct: true, feedback: '最も確実な解決策です。早めに切り替える判断が素晴らしい。' },
          { en: 'You must have gone the wrong way.', ja: '道を間違えたんでしょう。', correct: false, feedback: '相手のせいにしています。解決に向かっていません。' },
          { en: 'Keep walking, you will see it.', ja: '歩き続ければ見えます。', correct: false, feedback: '根拠がありません。不安が増すだけです。' }
        ]
      },
      {
        patient: { en: 'Got it! I see the blue sign now. Sorry for the trouble.', ja: '届きました。青い看板が見えます。お手数をおかけしました。' },
        hint: '謝らせないことが大切です。',
        options: [
          { en: 'No trouble at all. Take your time, we\'re waiting for you.', ja: 'とんでもございません。ごゆっくりお越しください。お待ちしております。', correct: true, feedback: '相手の負い目を消しています。来院前から良い関係が作れています。' },
          { en: 'Yes, it was difficult to explain.', ja: 'はい、説明が大変でした。', correct: false, feedback: '相手を責めているように聞こえます。' },
          { en: 'Please be on time next visit.', ja: '次回は時間通りにお願いします。', correct: false, feedback: '道に迷っただけです。責める場面ではありません。' }
        ]
      }
    ]
  },

  {
    id: 'phone-inquiry',
    section: 'phone-inquiry',
    title: '【電話】料金と保険のお問い合わせ',
    level: '中級',
    icon: '💬',
    description: '保険が使えないことを、がっかりさせずに伝える練習です。',
    patientProfile: 'Mark / お電話 / 料金と保険適用を確認したい',
    steps: [
      {
        patient: { en: 'Hi, how much does a session cost?', ja: 'もしもし、1回いくらですか。' },
        hint: '税込かどうかまで伝えましょう。',
        options: [
          { en: 'The first session is six thousand yen, tax included.', ja: '初回は税込6000円です。', correct: true, feedback: '税込と明示するのが大切です。あとのトラブルを防げます。' },
          { en: 'Six thousand. Maybe more.', ja: '6000円。もっとかかるかも。', correct: false, feedback: 'あいまいな料金案内は不信感につながります。' },
          { en: 'It depends on your condition.', ja: '症状によります。', correct: false, feedback: '基本料金は答えられるはずです。まず提示しましょう。' }
        ]
      },
      {
        patient: { en: 'And after that? Is it the same price every time?', ja: 'その後は。毎回同じ料金ですか。' },
        hint: '2回目以降の料金も伝えましょう。',
        options: [
          { en: 'After that it\'s five thousand yen per session.', ja: '2回目以降は1回5000円です。', correct: true, feedback: '明確です。聞かれる前に言えるとなお良いです。' },
          { en: 'Please ask when you come.', ja: '来院時にお尋ねください。', correct: false, feedback: '電話で答えられる内容です。先送りしないでください。' },
          { en: 'Yes, always six thousand.', ja: 'はい、常に6000円です。', correct: false, feedback: '事実と違います。料金の誤案内は最も避けるべきです。' }
        ]
      },
      {
        patient: { en: 'Can I use my Japanese health insurance?', ja: '日本の健康保険は使えますか。' },
        hint: '使えません。しかし言い方で印象が変わります。',
        options: [
          { en: 'I\'m afraid not. Seitai isn\'t covered by health insurance in Japan.', ja: '申し訳ございませんが、整体は日本の健康保険の対象外です。', correct: true, feedback: '「I\'m afraid」で和らげつつ、理由も添えています。理想的です。' },
          { en: 'No.', ja: 'いいえ。', correct: false, feedback: '事実ですが、これだけだと冷たく響きます。' },
          { en: 'Maybe. You can try asking your insurance company.', ja: 'たぶん。保険会社に聞いてみてください。', correct: false, feedback: 'あいまいな回答は期待させてしまいます。はっきり伝えましょう。' }
        ]
      },
      {
        patient: { en: 'Oh, that\'s a shame. I have private travel insurance though.', ja: '残念です。ただ、海外旅行保険には入っています。' },
        hint: '断定できないことは、できることに置き換えて答えましょう。',
        options: [
          { en: 'We can give you a receipt, so you could check with them.', ja: '領収書をお出しできますので、保険会社にご確認いただけます。', correct: true, feedback: '素晴らしい。断定を避けつつ、こちらができることを提示しています。' },
          { en: 'Yes, travel insurance will definitely cover it.', ja: 'はい、旅行保険なら必ず使えます。', correct: false, feedback: '保険会社によります。断定してはいけません。' },
          { en: 'We don\'t know anything about insurance.', ja: '保険のことはわかりません。', correct: false, feedback: '領収書は出せます。できることを伝えましょう。' }
        ]
      },
      {
        patient: { en: 'That helps, thanks. Let me think about it.', ja: '助かります。少し考えてみます。' },
        hint: '押さずに、扉を開けたまま終わりましょう。',
        options: [
          { en: 'Of course. Please feel free to call us anytime.', ja: 'もちろんです。いつでもお気軽にお電話ください。', correct: true, feedback: '押し売りせず、次につながる終わり方です。' },
          { en: 'We have only one slot left today. Please decide now.', ja: '本日残り1枠です。今お決めください。', correct: false, feedback: '急かすと逆効果です。信頼を失います。' },
          { en: 'Okay. Bye.', ja: 'はい。では。', correct: false, feedback: '間違いではありませんが、再度の連絡につながりません。' }
        ]
      }
    ]
  },
  {
    id: 'first-visit',
    section: 'flow-greeting',
    title: '初回来院：肩こりのお客様',
    level: '初級',
    icon: '👋',
    description: '受付から問診の入り口まで。まずはここから始めましょう。',
    patientProfile: 'Sarah / アメリカ出身 / 東京在住3年 / デスクワーク / 初回来院',
    steps: [
      {
        patient: { en: 'Hi, I have an appointment at two o\'clock.', ja: 'こんにちは、2時に予約しています。' },
        hint: 'まず歓迎の挨拶をして、お名前を確認しましょう。',
        options: [
          { en: 'Welcome to Naoru Seitai. May I have your name, please?', ja: 'ナオル整体へようこそ。お名前を伺えますか。', correct: true, feedback: '完璧です。歓迎と確認を1文ずつ、シンプルにまとめています。' },
          { en: 'Yes. Name?', ja: 'はい。名前は。', correct: false, feedback: '意味は通じますが、ぶっきらぼうに聞こえます。May I have your name, please? を使いましょう。' },
          { en: 'You are late.', ja: '遅刻ですね。', correct: false, feedback: '時間ちょうどの来院です。この表現は失礼にあたります。' }
        ]
      },
      {
        patient: { en: 'It\'s Sarah Miller.', ja: 'サラ・ミラーです。' },
        hint: '初回かどうかを確認しましょう。',
        options: [
          { en: 'Thank you, Ms. Miller. Is this your first visit?', ja: 'ありがとうございます、ミラー様。当院は初めてですか。', correct: true, feedback: '名字に Ms. を付けるのが丁寧です。初回確認もスムーズです。' },
          { en: 'Sarah, you came here before?', ja: 'サラ、前に来た。', correct: false, feedback: '文法が崩れています。Have you been here before? が正しい形です。' },
          { en: 'Okay. Sit.', ja: 'はい。座って。', correct: false, feedback: 'Sit. は犬に使う命令形に聞こえます。Please have a seat. にしましょう。' }
        ]
      },
      {
        patient: { en: 'Yes, it\'s my first time. What should I do?', ja: 'はい、初めてです。どうすればいいですか。' },
        hint: '問診票の記入をお願いしましょう。',
        options: [
          { en: 'Could you fill out this form, please? We have an English version.', ja: 'こちらの問診票にご記入をお願いできますか。英語版がございます。', correct: true, feedback: '素晴らしい。英語版があることを先に伝えると安心してもらえます。' },
          { en: 'Write this paper.', ja: 'この紙を書いて。', correct: false, feedback: 'fill out a form が「書類に記入する」の決まった言い方です。' },
          { en: 'Please wait. I am busy now.', ja: 'お待ちください。今忙しいです。', correct: false, feedback: '正直すぎます。案内を先にしましょう。' }
        ]
      },
      {
        patient: { en: 'Sure. Um, what does this question mean? "Current symptoms"?', ja: 'わかりました。この質問はどういう意味ですか。「現在の症状」。' },
        hint: '質問の意味をやさしく言い換えましょう。',
        options: [
          { en: 'It means: what problem are you having right now?', ja: '「今どんな不調がありますか」という意味です。', correct: true, feedback: 'それ、です。難しい単語を簡単な言葉で言い換えるのが最強のスキルです。' },
          { en: 'Symptoms means symptoms.', ja: '症状は症状です。', correct: false, feedback: '説明になっていません。別の言葉で言い換えましょう。' },
          { en: 'Sorry, I don\'t know.', ja: 'すみません、わかりません。', correct: false, feedback: '自院の問診票の内容は答えられるようにしておきましょう。' }
        ]
      },
      {
        patient: { en: 'Got it. My shoulders are really stiff, especially the right one.', ja: 'わかりました。肩がとても凝っていて、特に右がひどいです。' },
        hint: 'いつからかを聞きましょう。',
        options: [
          { en: 'I see. How long have you had this?', ja: 'なるほど。いつからですか。', correct: true, feedback: '短くて自然です。How long have you had this? は問診の必須フレーズです。' },
          { en: 'When you get stiff shoulder?', ja: 'いつ肩が凝る。', correct: false, feedback: '語順が崩れています。How long have you had this? が正解です。' },
          { en: 'That is because your posture is bad.', ja: 'それは姿勢が悪いからです。', correct: false, feedback: 'まだ何も見ていません。決めつけは信頼を失います。' }
        ]
      },
      {
        patient: { en: 'About six months. It got worse when I started working from home.', ja: '6ヶ月くらいです。在宅勤務を始めてから悪化しました。' },
        hint: '共感を示してから、環境について掘り下げましょう。',
        options: [
          { en: 'That makes sense. How is your desk setup at home?', ja: '納得です。ご自宅のデスク環境はどうですか。', correct: true, feedback: '共感 + 深掘り。理想的な流れです。' },
          { en: 'Working from home is bad for you.', ja: '在宅勤務は体に悪いです。', correct: false, feedback: '否定から入ると心を閉ざされます。' },
          { en: 'Okay. Please lie down.', ja: 'わかりました。横になってください。', correct: false, feedback: '問診が浅いまま進めています。もう少し聞きましょう。' }
        ]
      },
      {
        patient: { en: 'Honestly, I just use my laptop on the sofa.', ja: '正直、ソファでノートパソコンを使っているだけです。' },
        hint: '責めずに受け止めて、次の確認に進みましょう。',
        options: [
          { en: 'Thank you for telling me. That is very common. Let me check your body now.', ja: '教えてくださってありがとうございます。よくあることです。ではお身体を見ていきますね。', correct: true, feedback: '責めずに受け止めています。That is very common. の一言が効きます。' },
          { en: 'That is the worst thing you can do.', ja: 'それは最悪です。', correct: false, feedback: '事実でも、言い方で信頼を失います。' },
          { en: 'You must buy a desk immediately.', ja: 'すぐに机を買わなければいけません。', correct: false, feedback: 'must は強すぎます。提案は施術後にしましょう。' }
        ]
      }
    ]
  },

  {
    id: 'low-back-intake',
    section: 'flow-intake',
    title: '腰痛の問診',
    level: '中級',
    icon: '🦴',
    description: '痛みの性質と危険なサインを聞き分ける練習です。',
    patientProfile: 'David / イギリス出身 / 40代 / 引っ越し作業後から腰痛',
    steps: [
      {
        patient: { en: 'My lower back has been killing me since I moved apartments last week.', ja: '先週引っ越してから腰がものすごく痛いです。' },
        hint: 'まず痛みの範囲を確認しましょう。脚に下りているかは最重要です。',
        options: [
          { en: 'I\'m sorry to hear that. Does the pain stay in your back, or does it go down your leg?', ja: 'それはおつらいですね。痛みは腰だけですか、脚まで下りますか。', correct: true, feedback: '完璧です。共感 + 放散痛の確認。腰痛問診の最重要ポイントです。' },
          { en: 'You lifted something too heavy.', ja: '重すぎるものを持ちましたね。', correct: false, feedback: '推測で断定しています。まず情報を集めましょう。' },
          { en: 'Do you want a massage?', ja: 'マッサージしますか。', correct: false, feedback: '安全確認の前に施術を提案してはいけません。' }
        ]
      },
      {
        patient: { en: 'It goes down my right leg, almost to my knee.', ja: '右脚に下りて、ほぼ膝まで来ます。' },
        hint: 'しびれの有無を確認しましょう。',
        options: [
          { en: 'Do you feel any numbness or tingling in that leg?', ja: 'その脚にしびれやピリピリする感じはありますか。', correct: true, feedback: 'そのとおり。神経症状の有無で対応が変わります。' },
          { en: 'That is sciatica.', ja: 'それは坐骨神経痛です。', correct: false, feedback: '診断はできません。断定を避け、質問を続けてください。' },
          { en: 'Okay, no problem.', ja: 'はい、問題ありません。', correct: false, feedback: '脚に下りる痛みは慎重に扱うべきサインです。' }
        ]
      },
      {
        patient: { en: 'A little tingling, yes. But I can still walk fine.', ja: '少しピリピリします。でも歩くのは問題ありません。' },
        hint: '危険なサインを除外する質問をしましょう。',
        options: [
          { en: 'Thank you. Any change in your bladder or bowel control?', ja: 'ありがとうございます。排尿や排便のコントロールに変化はありますか。', correct: true, feedback: '素晴らしい。答えが「はい」なら即受診案内です。必ず聞くべき質問です。' },
          { en: 'Then it is not serious.', ja: 'それなら重症ではありません。', correct: false, feedback: '判断が早すぎます。除外すべき項目が残っています。' },
          { en: 'Let\'s start the treatment.', ja: '施術を始めましょう。', correct: false, feedback: '安全確認が完了していません。' }
        ]
      },
      {
        patient: { en: 'No, nothing like that.', ja: 'いいえ、そういうことはありません。' },
        hint: '痛みの強さを数値で確認しましょう。',
        options: [
          { en: 'Good. On a scale of zero to ten, how bad is the pain right now?', ja: 'よかったです。0から10で、今の痛みはどのくらいですか。', correct: true, feedback: '数値化は言語の壁を越えます。施術前後の比較にも使えます。' },
          { en: 'Is it very painful?', ja: 'とても痛いですか。', correct: false, feedback: '「とても」の感じ方は人それぞれです。数値で聞きましょう。' },
          { en: 'It will get better soon.', ja: 'すぐ良くなりますよ。', correct: false, feedback: '根拠のない保証はしないでください。' }
        ]
      },
      {
        patient: { en: 'Right now, maybe a six. In the morning it\'s more like an eight.', ja: '今は6くらい。朝は8くらいです。' },
        hint: '悪化する動作を確認しましょう。',
        options: [
          { en: 'I see. Is it worse when you bend forward, or when you lean back?', ja: 'なるほど。前にかがむのと反るのと、どちらがつらいですか。', correct: true, feedback: '動作方向の確認は施術方針を決める鍵になります。' },
          { en: 'Morning pain is normal.', ja: '朝の痛みは普通です。', correct: false, feedback: '朝の強い痛みは重要な情報です。流さないでください。' },
          { en: 'Eight is too much. You should go to the hospital.', ja: '8は多すぎます。病院に行くべきです。', correct: false, feedback: '数値だけで判断しないでください。他の所見と合わせて考えます。' }
        ]
      },
      {
        patient: { en: 'Definitely worse bending forward. Putting on socks is a nightmare.', ja: '明らかに前かがみがつらいです。靴下を履くのが地獄です。' },
        hint: '安全確認の最後に、既往と薬を確認しましょう。',
        options: [
          { en: 'Understood. Before we start, are you taking any medication, including blood thinners?', ja: '承知しました。始める前に、血液をサラサラにする薬を含めてお薬は飲んでいますか。', correct: true, feedback: '施術前の最終確認として完璧です。' },
          { en: 'Okay, lie face down please.', ja: 'では、うつ伏せになってください。', correct: false, feedback: '薬の確認がまだです。内出血のリスクがあります。' },
          { en: 'Your disc is probably herniated.', ja: 'おそらく椎間板ヘルニアです。', correct: false, feedback: '診断名を口にしてはいけません。' }
        ]
      }
    ]
  },

  {
    id: 'assessment-explain',
    section: 'flow-assessment',
    title: '検査から状態説明まで',
    level: '中級',
    icon: '🔍',
    description: '動作を指示し、わかったことを患者様の言葉で伝える練習です。',
    patientProfile: 'Emma / オーストラリア出身 / 30代 / 猫背と巻き肩を気にしている',
    steps: [
      {
        patient: { en: 'My friend said my posture looks terrible. Can you check it?', ja: '友達に姿勢がひどいと言われました。見てもらえますか。' },
        hint: '検査の同意を取り、立ってもらいましょう。',
        options: [
          { en: 'Of course. Could you stand up and face the mirror, please?', ja: 'もちろんです。立って鏡の方を向いていただけますか。', correct: true, feedback: '鏡を使うと説明が一気に楽になります。' },
          { en: 'Yes, your posture is terrible.', ja: 'はい、姿勢はひどいです。', correct: false, feedback: '見る前に同意する必要はありませんし、terrible は失礼です。' },
          { en: 'Take off your shirt.', ja: 'シャツを脱いでください。', correct: false, feedback: '唐突すぎます。必要なら理由を説明し、同意を得てください。' }
        ]
      },
      {
        patient: { en: 'Okay, I\'m standing. Like this?', ja: 'はい、立ちました。こんな感じですか。' },
        hint: '自然に立ってもらうのが大切です。',
        options: [
          { en: 'Please stand naturally, the way you always do. Don\'t try to fix it.', ja: 'いつも通り自然に立ってください。直そうとしないでくださいね。', correct: true, feedback: 'これが重要です。意識されると本来の姿勢が見えません。' },
          { en: 'Stand up straight!', ja: 'まっすぐ立って。', correct: false, feedback: '矯正させてしまうと、普段の姿勢が観察できません。' },
          { en: 'Good enough.', ja: 'それで十分です。', correct: false, feedback: '観察の質が下がります。指示は明確に。' }
        ]
      },
      {
        patient: { en: 'Alright. So what do you see?', ja: 'はい。それで、どう見えますか。' },
        hint: '見た事実を、やさしい言葉で伝えましょう。',
        options: [
          { en: 'Your head sits a little forward, and your shoulders are rolled forward.', ja: '頭が少し前に出ていて、肩が前に巻いています。', correct: true, feedback: '事実を淡々と、簡単な言葉で。診断ではなく観察の共有です。' },
          { en: 'You have kyphosis and severe protraction.', ja: '後弯症と重度の前方突出があります。', correct: false, feedback: '専門用語すぎます。患者様には伝わりません。' },
          { en: 'You look like a hunchback.', ja: '猫背みたいですね。', correct: false, feedback: 'hunchback は侮辱的に響きます。絶対に使わないでください。' }
        ]
      },
      {
        patient: { en: 'Ugh, that sounds bad. Why is that happening?', ja: 'うわ、それは良くないですね。なぜそうなるんですか。' },
        hint: '原因と結果をつなげて説明しましょう。',
        options: [
          { en: 'Your chest muscles are tight and short, and they pull your shoulders forward.', ja: '胸の筋肉が硬く縮んでいて、肩を前に引っ張っています。', correct: true, feedback: '「原因 → 結果」の順。短い英語で最も伝わる形です。' },
          { en: 'Because you are always on your phone.', ja: 'いつもスマホを見ているからです。', correct: false, feedback: '確認していない習慣を決めつけています。' },
          { en: 'It is genetic. Nothing we can do.', ja: '遺伝です。どうにもなりません。', correct: false, feedback: '希望を奪う上に、根拠がありません。' }
        ]
      },
      {
        patient: { en: 'So can it be fixed?', ja: 'それは治せますか。' },
        hint: '過度な期待を避けつつ、前向きに伝えましょう。',
        options: [
          { en: 'We can definitely improve it. It took time to develop, so it takes time to change.', ja: '改善はできます。時間をかけてできた状態なので、変えるにも時間がかかります。', correct: true, feedback: '前向きさと現実的な見通しの両立。理想的な答え方です。' },
          { en: 'Yes, I can fix it in one session.', ja: 'はい、1回で治せます。', correct: false, feedback: '守れない約束です。信頼を失う原因になります。' },
          { en: 'Probably not.', ja: 'たぶん無理です。', correct: false, feedback: '悲観的すぎます。改善は十分に見込めます。' }
        ]
      },
      {
        patient: { en: 'Okay, that makes sense. What do we do today?', ja: 'なるほど。今日は何をしますか。' },
        hint: '今日の施術内容を順番に伝えましょう。',
        options: [
          { en: 'First, I will release your chest muscles. Then I will work on your upper back.', ja: 'まず胸の筋肉をゆるめます。次に背中にアプローチします。', correct: true, feedback: 'First / Then で順番を示すと、短い英語でも明確に伝わります。' },
          { en: 'I will do everything.', ja: '全部やります。', correct: false, feedback: '具体性がありません。何をするか伝えましょう。' },
          { en: 'Just relax, you don\'t need to know.', ja: 'リラックスしてください。知る必要はありません。', correct: false, feedback: '説明を受ける権利があります。省略しないでください。' }
        ]
      }
    ]
  },

  {
    id: 'plan-proposal',
    section: 'flow-plan',
    title: '施術プランのご提案',
    level: '上級',
    icon: '🗓️',
    description: '押し売りにならずに通院の必要性を伝える、最も難しい場面です。',
    patientProfile: 'Michael / カナダ出身 / 50代 / 慢性腰痛 / 施術後の会話',
    steps: [
      {
        patient: { en: 'Wow, that feels so much better. Thank you.', ja: 'わあ、すごく楽になりました。ありがとうございます。' },
        hint: '効果を実感してもらったので、変化を確認しましょう。',
        options: [
          { en: 'I\'m glad. Try bending forward again. Can you feel the difference?', ja: 'よかったです。もう一度前にかがんでみてください。違いを感じますか。', correct: true, feedback: '施術前後の比較は、次回予約の最も強い動機になります。' },
          { en: 'Yes, I am very good at this.', ja: 'はい、私は上手ですから。', correct: false, feedback: '自慢に聞こえます。患者様の変化に焦点を当てましょう。' },
          { en: 'Okay, that will be six thousand yen.', ja: 'では6000円です。', correct: false, feedback: '会計に飛ぶのが早すぎます。' }
        ]
      },
      {
        patient: { en: 'Yeah, I can bend much further now! Is it fixed?', ja: 'はい、かなり深く曲がります。これで治りましたか。' },
        hint: '正直に、しかし前向きに伝えましょう。',
        options: [
          { en: 'Today\'s change is real, but the muscles will tighten again with your daily habits.', ja: '今日の変化は本物です。ただ日常の習慣で筋肉はまた硬くなります。', correct: true, feedback: '誠実です。この一言があるから継続の提案が自然になります。' },
          { en: 'Yes, you are completely cured.', ja: 'はい、完全に治りました。', correct: false, feedback: '慢性症状は1回では戻ります。誤解を招きます。' },
          { en: 'No, you will need twenty sessions.', ja: 'いいえ、20回必要です。', correct: false, feedback: '根拠のない回数提示は不信感につながります。' }
        ]
      },
      {
        patient: { en: 'I see. So how often should I come?', ja: 'なるほど。どのくらいの頻度で通えばいいですか。' },
        hint: '根拠と一緒に頻度を提案しましょう。',
        options: [
          { en: 'For your condition, I recommend once a week for the first month.', ja: '今の状態でしたら、最初の1ヶ月は週1回をおすすめします。', correct: true, feedback: '期間を区切ると、患者様が判断しやすくなります。' },
          { en: 'You should come every day.', ja: '毎日来るべきです。', correct: false, feedback: '非現実的で、押し売りに聞こえます。' },
          { en: 'Whenever you want.', ja: 'いつでもどうぞ。', correct: false, feedback: 'プロとしての提案がありません。' }
        ]
      },
      {
        patient: { en: 'Honestly, that\'s a lot of money for me right now.', ja: '正直、今の私にはかなりの出費です。' },
        hint: '最も難しい場面です。押し返さず、選択肢を示しましょう。',
        options: [
          { en: 'I completely understand. Let\'s start with twice a month, and I\'ll give you home care to do in between.', ja: 'よくわかります。まず月2回から始めて、その間のセルフケアをお伝えしますね。', correct: true, feedback: '最高の対応です。予算を尊重しつつ、価値を提供し続けています。' },
          { en: 'Your health is more important than money.', ja: '健康はお金より大事です。', correct: false, feedback: '正論ですが、相手の事情を否定しています。' },
          { en: 'Okay, then there is nothing I can do.', ja: 'では、私にできることはありません。', correct: false, feedback: '突き放しています。代替案を出しましょう。' }
        ]
      },
      {
        patient: { en: 'That would be great. What should I do at home?', ja: 'それは助かります。家では何をすればいいですか。' },
        hint: 'セルフケアは絞って伝えるのがコツです。',
        options: [
          { en: 'Just one stretch. Thirty seconds each side, twice a day. Let me show you.', ja: 'ストレッチを一つだけ。左右30秒ずつ、1日2回です。お見せしますね。', correct: true, feedback: '1つに絞るのが継続の鍵です。実演もセットで完璧です。' },
          { en: 'Here is a list of fifteen exercises.', ja: '15種類の運動のリストです。', correct: false, feedback: '多すぎて結局やってもらえません。' },
          { en: 'Just rest and don\'t move.', ja: '安静にして動かないでください。', correct: false, feedback: '慢性腰痛では、動くほうが回復に有効です。' }
        ]
      },
      {
        patient: { en: 'Perfect. Can I book for two weeks from now?', ja: '完璧です。2週間後に予約できますか。' },
        hint: '予約を確定して、気持ちよくお見送りしましょう。',
        options: [
          { en: 'Of course. How about the same time on a Tuesday?', ja: 'もちろんです。火曜の同じ時間はいかがですか。', correct: true, feedback: '具体的な候補を出すと、予約が決まりやすくなります。' },
          { en: 'Maybe. Call us later.', ja: 'たぶん。後で電話してください。', correct: false, feedback: 'その場で取れる予約を逃しています。' },
          { en: 'Two weeks is too long.', ja: '2週間は長すぎます。', correct: false, feedback: '合意した頻度を否定しています。' }
        ]
      }
    ]
  },

  {
    id: 'refer-out',
    section: 'flow-explanation',
    title: '医療機関をおすすめする場面',
    level: '上級',
    icon: '🏥',
    description: '施術を断り、受診をすすめる。セラピストにとって最も勇気がいる会話です。',
    patientProfile: 'Lisa / ドイツ出身 / 60代 / 転倒後の腰痛 / 未受診',
    steps: [
      {
        patient: { en: 'I fell down the stairs two days ago and my back really hurts.', ja: '2日前に階段から落ちて、腰がとても痛いです。' },
        hint: '外傷後です。まず受診の有無を確認しましょう。',
        options: [
          { en: 'I\'m sorry to hear that. Have you seen a doctor since the fall?', ja: 'それは大変でしたね。転倒後、医療機関は受診されましたか。', correct: true, feedback: '外傷後は必ずこれを最初に確認してください。' },
          { en: 'Okay, please lie face down.', ja: 'では、うつ伏せになってください。', correct: false, feedback: '骨折の可能性を除外していません。危険です。' },
          { en: 'Falls are common at your age.', ja: 'その年齢では転倒はよくあります。', correct: false, feedback: '年齢に触れるのは失礼で、かつ何の情報にもなっていません。' }
        ]
      },
      {
        patient: { en: 'No, I thought it would just go away on its own.', ja: 'いいえ、自然に治ると思っていました。' },
        hint: '骨粗しょう症のリスクを確認しましょう。',
        options: [
          { en: 'I understand. May I ask, have you ever been told you have osteoporosis?', ja: 'なるほど。伺いますが、骨粗しょう症と言われたことはありますか。', correct: true, feedback: '重要な確認です。圧迫骨折のリスク評価につながります。' },
          { en: 'That was a mistake.', ja: 'それは間違いでした。', correct: false, feedback: '責める言い方です。事実確認を続けましょう。' },
          { en: 'It\'s fine, I can treat it.', ja: '大丈夫、治せます。', correct: false, feedback: '確認前に安請け合いしてはいけません。' }
        ]
      },
      {
        patient: { en: 'Yes, actually. My doctor mentioned it a few years ago.', ja: 'はい、実は。数年前に医師に言われました。' },
        hint: '施術を控える判断をし、理由とともに伝えましょう。',
        options: [
          { en: 'Thank you for telling me. In that case, I\'d like you to get an X-ray before any treatment.', ja: '教えてくださってありがとうございます。それでしたら、施術の前にレントゲンを撮っていただきたいです。', correct: true, feedback: '正しい判断です。理由を添えて伝えられています。' },
          { en: 'Don\'t worry, I will press gently.', ja: '心配いりません、やさしく押しますね。', correct: false, feedback: '骨粗しょう症 + 転倒は圧迫骨折を疑う組み合わせです。施術は控えてください。' },
          { en: 'You should have told me earlier.', ja: 'もっと早く言ってください。', correct: false, feedback: '責めても状況は改善しません。' }
        ]
      },
      {
        patient: { en: 'Really? I came all this way. Can\'t you just do something light?', ja: '本当に。せっかく来たのに。軽くでもできませんか。' },
        hint: '押し切られない。しかし冷たくならない。ここが腕の見せどころです。',
        options: [
          { en: 'I know it\'s frustrating. But I\'d rather be safe. Your safety comes first.', ja: 'もどかしいお気持ちはわかります。ですが安全を優先させてください。', correct: true, feedback: '共感しつつ譲らない。プロとして最も大切な姿勢です。' },
          { en: 'Okay, just a little then.', ja: 'では少しだけ。', correct: false, feedback: '押し切られています。判断を曲げてはいけません。' },
          { en: 'No. Please leave.', ja: 'いいえ。お帰りください。', correct: false, feedback: '正しい判断ですが、伝え方が冷たすぎます。' }
        ]
      },
      {
        patient: { en: 'I guess you\'re right. Where should I go?', ja: 'そうですね。どこに行けばいいですか。' },
        hint: '具体的な行き先を示して、次につなげましょう。',
        options: [
          { en: 'Here is a nearby orthopedic clinic. Please come back with your results and we\'ll go from there.', ja: '近くの整形外科です。結果を持ってまたお越しください。そこから始めましょう。', correct: true, feedback: '完璧です。断りではなく「一度預ける」形にできています。' },
          { en: 'Any hospital is fine.', ja: 'どこの病院でもいいです。', correct: false, feedback: '不親切です。具体的な情報を用意しておきましょう。' },
          { en: 'Google it.', ja: '検索してください。', correct: false, feedback: '突き放しています。' }
        ]
      }
    ]
  }
];

export function scenarioById(id) {
  return scenarios.find((s) => s.id === id);
}
