// お電話対応の英会話
// 電話は身振りが使えず、聞き返しもしづらいため、現場より難しい場面です。
// 「決まった言い方」を用意しておくことが何よりの対策になります。

export const phoneTopics = [
  {
    id: 'basics',
    order: 1,
    title: '電話の受け答えの基本',
    titleEn: 'Answering the Phone',
    icon: '📞',
    summary: '最初の一言と、聞き取れないときの逃げ道。ここだけ覚えておけば、あとは何とかなります。',
    tips: [
      '電話は相手の口元が見えず、身振りも使えません。現場より難しくて当然です。落ち込まないでください。',
      '聞き取れないのは自分の英語力のせいだけではありません。電波・雑音・早口が重なっています。堂々と聞き返しましょう。',
      '困ったら「メールかSMSで送ってください」に逃げるのが最も確実です。恥ずかしいことではありません。'
    ],
    groups: [
      {
        title: '電話に出る',
        phrases: [
          { en: 'Hello, Naoru Seitai. How may I help you?', ja: 'お電話ありがとうございます、ナオル整体です。', note: '最初の一言。これだけは丸暗記してください。' },
          { en: 'Thank you for calling Naoru Seitai.', ja: 'お電話ありがとうございます、ナオル整体です。', note: '少し丁寧な言い方。' },
          { en: 'This is Tanaka speaking.', ja: '田中が承ります。', note: '名前の部分を入れ替えてください。' },
          { en: 'How can I help you today?', ja: '本日はどのようなご用件でしょうか。', note: '' },
          { en: 'Good morning. Naoru Seitai, this is Tanaka.', ja: 'おはようございます。ナオル整体の田中です。', note: '' }
        ]
      },
      {
        title: '聞き取れないとき（最重要）',
        note: 'この6つを紙に書いて電話の横に貼っておくことをおすすめします。',
        phrases: [
          { en: 'I\'m sorry, could you say that again, please?', ja: 'すみません、もう一度おっしゃっていただけますか。', note: '最も使う一言。何度使っても失礼ではありません。' },
          { en: 'Could you speak a little more slowly, please?', ja: 'もう少しゆっくりお話しいただけますか。', note: '' },
          { en: 'I\'m sorry, the line is not very clear.', ja: 'すみません、お電話が少し遠いようです。', note: '自分のせいにせず、回線のせいにできる便利な言い方。' },
          { en: 'Could you speak a little louder, please?', ja: 'もう少し大きな声でお願いできますか。', note: '' },
          { en: 'My English is still improving. Could you use simple words, please?', ja: '英語を勉強中です。簡単な言葉でお願いできますか。', note: '正直に伝えると、ほとんどの方は協力してくれます。' },
          { en: 'Would you mind sending us a message or an email instead?', ja: 'よろしければメッセージかメールでお送りいただけますか。', note: '最後の切り札。確実で、相手も助かります。' }
        ]
      },
      {
        title: '名前・つづりを確認する',
        note: '電話で最も間違えやすいのが名前です。必ずつづりを確認しましょう。',
        phrases: [
          { en: 'May I have your name, please?', ja: 'お名前を伺えますか。', note: '' },
          { en: 'Could you spell that for me, please?', ja: 'つづりを教えていただけますか。', note: '' },
          { en: 'Could you spell your last name?', ja: '苗字のつづりをお願いできますか。', note: 'last name = 苗字 / first name = 名前' },
          { en: 'Let me repeat that. S-M-I-T-H. Is that correct?', ja: '復唱します。S-M-I-T-H でお間違いないですか。', note: '復唱は必ず行ってください。' },
          { en: 'Is that "B" as in boy, or "D" as in dog?', ja: 'boy の B ですか、dog の D ですか。', note: 'B と D、M と N は電話で最も混同されます。' },
          { en: 'Is that "P" as in Peter, or "T" as in Tom?', ja: 'Peter の P ですか、Tom の T ですか。', note: '' },
          { en: 'How do you pronounce your name?', ja: 'お名前はどのように発音しますか。', note: '来院時に呼ぶために聞いておくと喜ばれます。' }
        ]
      },
      {
        title: '電話番号を聞く',
        note: '英語では番号を1桁ずつ読みます。0 は "zero" のほか "oh" とも読まれます。',
        phrases: [
          { en: 'May I have your phone number, please?', ja: 'お電話番号を伺えますか。', note: '' },
          { en: 'Could you say that one number at a time?', ja: '1桁ずつおっしゃっていただけますか。', note: '早口対策に有効です。' },
          { en: 'Let me read that back to you.', ja: '復唱いたします。', note: '' },
          { en: 'Zero, nine, zero... is that right so far?', ja: '0、9、0…ここまでよろしいですか。', note: '途中で区切って確認すると確実です。' },
          { en: 'Is that a Japanese number or an overseas number?', ja: '日本の番号ですか、海外の番号ですか。', note: '' },
          { en: 'Do you have a LINE or WhatsApp account we could use?', ja: 'LINE や WhatsApp はお使いですか。', note: '文字でやり取りできると格段に楽になります。' }
        ]
      },
      {
        title: '保留・折り返し',
        phrases: [
          { en: 'Could you hold for a moment, please?', ja: '少々お待ちいただけますか。', note: '' },
          { en: 'Let me check the schedule. One moment, please.', ja: '予約状況を確認します。少々お待ちください。', note: '' },
          { en: 'Thank you for waiting.', ja: 'お待たせいたしました。', note: '' },
          { en: 'I\'m sorry to keep you waiting.', ja: 'お待たせして申し訳ありません。', note: '' },
          { en: 'May I call you back in ten minutes?', ja: '10分後に折り返しお電話してもよろしいですか。', note: '調べる時間が必要なときに。' },
          { en: 'Let me ask my colleague. Could I call you back?', ja: 'スタッフに確認します。折り返しでもよろしいですか。', note: '自分で抱え込まず、これを使ってください。' },
          { en: 'What is the best time to reach you?', ja: '何時ごろがご都合よろしいですか。', note: '' }
        ]
      },
      {
        title: '電話を切る',
        phrases: [
          { en: 'Is there anything else I can help you with?', ja: '他にご不明な点はございますか。', note: '' },
          { en: 'Thank you for calling. We look forward to seeing you.', ja: 'お電話ありがとうございました。お待ちしております。', note: '' },
          { en: 'Please feel free to call us anytime.', ja: 'いつでもお気軽にお電話ください。', note: '' },
          { en: 'Have a nice day. Goodbye.', ja: '良い一日を。失礼いたします。', note: '' },
          { en: 'Take care. Goodbye.', ja: 'お気をつけて。失礼いたします。', note: '' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'Hi, do you speak English?', ja: 'もしもし、英語は話せますか。' },
      { en: 'I\'m calling about an appointment.', ja: '予約の件でお電話しました。' },
      { en: 'Sorry, I don\'t speak Japanese.', ja: 'すみません、日本語が話せません。' },
      { en: 'Can I ask a quick question?', ja: '少しお伺いしてもいいですか。' },
      { en: 'Sorry, I didn\'t catch that.', ja: 'すみません、聞き取れませんでした。' }
    ]
  },

  {
    id: 'booking',
    order: 2,
    title: '予約を取りたい',
    titleEn: 'Taking a Booking',
    icon: '🗓️',
    summary: '新規のご予約を受ける流れ。希望日時 → 空き確認 → お名前と連絡先 → 復唱、の順で進めます。',
    tips: [
      '日時は必ず最後に復唱してください。「木曜」と「火曜」は電話で驚くほど間違えます。',
      '曜日と日付をセットで言うと事故が減ります。"Thursday, the fifteenth" のように。',
      '初回の方には所要時間と持ち物も伝えておくと、当日がスムーズです。'
    ],
    groups: [
      {
        title: 'ご希望を伺う',
        phrases: [
          { en: 'Certainly. Have you visited us before?', ja: 'かしこまりました。当院のご利用は初めてですか。', note: '' },
          { en: 'When would you like to come in?', ja: 'いつ頃をご希望ですか。', note: '' },
          { en: 'What day works best for you?', ja: 'ご都合の良い曜日はありますか。', note: '' },
          { en: 'Do you prefer the morning or the afternoon?', ja: '午前と午後、どちらがよろしいですか。', note: '' },
          { en: 'Do you have a specific time in mind?', ja: 'ご希望のお時間はありますか。', note: '' },
          { en: 'How soon would you like to come?', ja: 'どのくらい早めのご来院をご希望ですか。', note: '' }
        ]
      },
      {
        title: '空き状況を伝える',
        phrases: [
          { en: 'Let me check our schedule. One moment, please.', ja: '予約状況を確認いたします。少々お待ちください。', note: '' },
          { en: 'We have an opening at two o\'clock on Thursday.', ja: '木曜の2時に空きがございます。', note: '' },
          { en: 'How about three o\'clock instead?', ja: '3時ではいかがでしょうか。', note: '' },
          { en: 'I\'m afraid we\'re fully booked that day.', ja: '申し訳ございません、その日は満席です。', note: '"I\'m afraid" を付けると柔らかくなります。' },
          { en: 'The closest available time is Friday at eleven.', ja: '一番近い空きは金曜の11時です。', note: '' },
          { en: 'Would Saturday morning work for you?', ja: '土曜の午前はいかがでしょうか。', note: '' },
          { en: 'We could put you on the waiting list.', ja: 'キャンセル待ちにお入れすることもできます。', note: '' }
        ]
      },
      {
        title: 'お名前と連絡先を伺う',
        phrases: [
          { en: 'May I have your name, please?', ja: 'お名前を伺えますか。', note: '' },
          { en: 'Could you spell that for me?', ja: 'つづりをお願いできますか。', note: '必ず確認してください。' },
          { en: 'And a phone number where we can reach you?', ja: 'ご連絡先のお電話番号もお願いできますか。', note: '' },
          { en: 'May I ask what brings you in?', ja: 'どのようなお悩みでしょうか。', note: '施術時間の見積もりに使えます。' },
          { en: 'How did you hear about us?', ja: '当院をどちらでお知りになりましたか。', note: '' }
        ]
      },
      {
        title: '初回のご案内',
        phrases: [
          { en: 'The first session takes about sixty minutes.', ja: '初回は60分ほどお時間をいただきます。', note: '' },
          { en: 'Please arrive about ten minutes early to fill out a form.', ja: '問診票のご記入がありますので、10分前にお越しください。', note: '' },
          { en: 'We have an English intake form, so please don\'t worry.', ja: '英語版の問診票がございますのでご安心ください。', note: '不安をやわらげる一言。' },
          { en: 'Please wear comfortable clothes, or we can lend you some.', ja: '動きやすい服装でお越しください。お貸しすることもできます。', note: '' },
          { en: 'The first session is six thousand yen.', ja: '初回は6000円です。', note: '' },
          { en: 'We accept cash and credit cards.', ja: '現金とクレジットカードがご利用いただけます。', note: '' }
        ]
      },
      {
        title: '最後に復唱する（必須）',
        note: '曜日・日付・時刻・名前をまとめて繰り返します。ここで防げる事故がとても多いです。',
        phrases: [
          { en: 'Let me confirm your appointment.', ja: 'ご予約内容を確認いたします。', note: '' },
          { en: 'Thursday, March the fifteenth, at two o\'clock, for Ms. Miller.', ja: '3月15日木曜、2時、ミラー様。', note: '曜日と日付を必ずセットで。' },
          { en: 'Is that correct?', ja: 'お間違いないでしょうか。', note: '' },
          { en: 'We\'ll send you a confirmation message.', ja: '確認のメッセージをお送りします。', note: '' },
          { en: 'If anything changes, please give us a call.', ja: 'ご変更がありましたらお電話ください。', note: '' },
          { en: 'We look forward to seeing you on Thursday.', ja: '木曜日にお待ちしております。', note: '' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'I\'d like to make an appointment.', ja: '予約を取りたいのですが。' },
      { en: 'Do you have anything available this week?', ja: '今週空いていますか。' },
      { en: 'Can I come in today?', ja: '今日行けますか。' },
      { en: 'What time do you close?', ja: '何時まで開いていますか。' },
      { en: 'Do I need to book, or can I just walk in?', ja: '予約は必要ですか、飛び込みでも大丈夫ですか。' },
      { en: 'How much is it for the first visit?', ja: '初回はいくらですか。' },
      { en: 'Is it okay if I don\'t speak Japanese?', ja: '日本語が話せなくても大丈夫ですか。' }
    ]
  },

  {
    id: 'change',
    order: 3,
    title: '予約の変更・キャンセル',
    titleEn: 'Changing or Cancelling',
    icon: '🔄',
    summary: 'まず現在のご予約を特定してから、変更先をご案内します。遅刻のご連絡もここです。',
    tips: [
      'まず「いつのご予約か」を確認してください。名前だけでは特定できないことがあります。',
      'キャンセルされても、責める言い方は絶対に避けてください。次の来院がなくなります。',
      '変更のときは、その場で次の候補を出すと再予約率が上がります。'
    ],
    groups: [
      {
        title: 'ご予約を特定する',
        phrases: [
          { en: 'Of course. May I have your name, please?', ja: 'かしこまりました。お名前を伺えますか。', note: '' },
          { en: 'When is your current appointment?', ja: '現在のご予約はいつでしょうか。', note: '' },
          { en: 'Let me find your booking. One moment, please.', ja: 'ご予約をお調べします。少々お待ちください。', note: '' },
          { en: 'I see. You\'re booked for Thursday at two, is that right?', ja: '木曜2時のご予約ですね。お間違いないですか。', note: '' },
          { en: 'I\'m sorry, I can\'t find a booking under that name.', ja: '申し訳ございません、そのお名前でご予約が見つかりません。', note: '' },
          { en: 'Could it be under a different name?', ja: '別のお名前でご予約されている可能性はありますか。', note: '' }
        ]
      },
      {
        title: '日時を変更する',
        phrases: [
          { en: 'No problem at all. When would suit you better?', ja: '全く問題ございません。いつでしたらご都合よろしいですか。', note: '"No problem at all" で相手の心理的負担が軽くなります。' },
          { en: 'Let me see what we have available.', ja: '空き状況を確認いたします。', note: '' },
          { en: 'We have Friday at eleven, or Saturday at three.', ja: '金曜11時、または土曜3時が空いております。', note: '2つ出すと決まりやすくなります。' },
          { en: 'Would either of those work for you?', ja: 'どちらかご都合よろしいでしょうか。', note: '' },
          { en: 'I\'ve moved your appointment to Friday at eleven.', ja: '金曜11時に変更いたしました。', note: '' },
          { en: 'You\'re all set. Same as before, just a different time.', ja: '変更完了です。内容はそのまま、お時間だけ変わります。', note: '' }
        ]
      },
      {
        title: 'キャンセルを受ける',
        phrases: [
          { en: 'I understand. I\'ve cancelled it for you.', ja: '承知いたしました。キャンセルいたしました。', note: '' },
          { en: 'That\'s completely fine. Thank you for letting us know.', ja: '全く問題ございません。ご連絡ありがとうございます。', note: '連絡してくれたことに感謝を。' },
          { en: 'Would you like to book another time now?', ja: '今、別のお日にちをお取りしましょうか。', note: '' },
          { en: 'No rush. Please call us whenever you\'re ready.', ja: 'お急ぎでなくて結構です。またご都合の良いときにお電話ください。', note: '' },
          { en: 'I hope you feel better soon.', ja: '早く良くなられますように。', note: '体調不良によるキャンセルのとき。' },
          { en: 'We ask for a call by the day before, but this time is fine.', ja: '本来は前日までのご連絡をお願いしておりますが、今回は結構です。', note: 'ポリシーは伝えつつ、角を立てない言い方。' }
        ]
      },
      {
        title: '遅刻のご連絡',
        phrases: [
          { en: 'Thank you for calling to let us know.', ja: 'ご連絡ありがとうございます。', note: '' },
          { en: 'How late do you think you\'ll be?', ja: 'どのくらい遅れそうですか。', note: '' },
          { en: 'That\'s fine. Please take your time and travel safely.', ja: '大丈夫です。慌てずお気をつけてお越しください。', note: '' },
          { en: 'We may need to shorten the session a little.', ja: '施術時間を少し短くさせていただくかもしれません。', note: '' },
          { en: 'If you\'re more than thirty minutes late, we may need to reschedule.', ja: '30分以上遅れる場合は、日程変更をお願いすることがあります。', note: '' },
          { en: 'Would you like to move it to a later time today?', ja: '本日の遅い時間に変更しましょうか。', note: '' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'I need to change my appointment.', ja: '予約を変更したいのですが。' },
      { en: 'Can I reschedule for next week?', ja: '来週に変更できますか。' },
      { en: 'I have to cancel my appointment today.', ja: '今日の予約をキャンセルしたいのですが。' },
      { en: 'Something came up at work.', ja: '仕事で急用ができまして。' },
      { en: 'I\'m running about fifteen minutes late.', ja: '15分ほど遅れそうです。' },
      { en: 'I\'m stuck on the train.', ja: '電車が止まってしまって。' },
      { en: 'Is there a cancellation fee?', ja: 'キャンセル料はかかりますか。' }
    ]
  },

  {
    id: 'access',
    order: 4,
    title: '場所・行き方の案内',
    titleEn: 'Giving Directions',
    icon: '🗺️',
    summary: '日本の住所は電話で伝わりません。「最寄り駅から」「目印」「地図を送る」の3つで解決します。',
    tips: [
      '住所を読み上げるのは最終手段です。番地は外国の方にはほぼ伝わりません。',
      '最も確実なのは地図のリンクを送ることです。「送ります」と言い切ってしまいましょう。',
      '駅の「出口の番号」と「目印の店」を伝えると、迷う人がほとんどいなくなります。'
    ],
    groups: [
      {
        title: '現在地を確認する',
        phrases: [
          { en: 'Where are you right now?', ja: '今どちらにいらっしゃいますか。', note: '' },
          { en: 'Are you coming by train, by car, or on foot?', ja: '電車、お車、徒歩のどれでお越しですか。', note: '' },
          { en: 'Can you see any large buildings or signs around you?', ja: '周りに大きな建物や看板は見えますか。', note: '迷子の方を助けるとき。' },
          { en: 'Which station are you at?', ja: 'どちらの駅にいらっしゃいますか。', note: '' },
          { en: 'Are you inside the station or outside?', ja: '駅の中ですか、外ですか。', note: '' }
        ]
      },
      {
        title: '駅からの道案内',
        note: '曲がる回数は2回までにおさめると、電話でも伝わります。',
        phrases: [
          { en: 'We\'re a five-minute walk from the station.', ja: '駅から徒歩5分です。', note: '' },
          { en: 'Please take the East Exit.', ja: '東口から出てください。', note: 'exit の方角は必ず伝えましょう。' },
          { en: 'Please take Exit number three.', ja: '3番出口から出てください。', note: '' },
          { en: 'Go straight for about two hundred meters.', ja: 'まっすぐ200メートルほど進んでください。', note: '' },
          { en: 'Turn right at the convenience store.', ja: 'コンビニを右に曲がってください。', note: '' },
          { en: 'Turn left at the first traffic light.', ja: '最初の信号を左に曲がってください。', note: '' },
          { en: 'Cross the street and keep going straight.', ja: '道を渡って、そのまま直進してください。', note: '' },
          { en: 'We\'re on the second floor of a white building.', ja: '白い建物の2階です。', note: '' },
          { en: 'There is a coffee shop on the first floor.', ja: '1階にコーヒーショップがあります。', note: '目印は最強の道案内です。' },
          { en: 'Look for a blue sign that says Naoru.', ja: 'Naoru と書かれた青い看板が目印です。', note: '' }
        ]
      },
      {
        title: '地図を送る（最も確実）',
        phrases: [
          { en: 'Let me send you a map. What\'s the best way to reach you?', ja: '地図をお送りします。どちらにお送りすればよいですか。', note: '' },
          { en: 'I can send you a Google Maps link by text message.', ja: 'Google マップのリンクをSMSでお送りできます。', note: '' },
          { en: 'Do you use LINE or WhatsApp?', ja: 'LINE や WhatsApp はお使いですか。', note: '' },
          { en: 'Please search for "Naoru Seitai" on Google Maps.', ja: 'Google マップで「Naoru Seitai」と検索してみてください。', note: '' },
          { en: 'I\'ve just sent it. Could you check your phone?', ja: '今お送りしました。ご確認いただけますか。', note: '' },
          { en: 'Our address is on our website as well.', ja: 'ホームページにも住所を掲載しております。', note: '' }
        ]
      },
      {
        title: '駐車場・そのほか',
        phrases: [
          { en: 'We don\'t have our own parking, I\'m afraid.', ja: '申し訳ございませんが、専用の駐車場はございません。', note: '' },
          { en: 'There is a coin parking lot right next to us.', ja: 'すぐ隣にコインパーキングがございます。', note: '' },
          { en: 'You can park your bicycle in front of the building.', ja: '自転車は建物の前に停められます。', note: '' },
          { en: 'The building has an elevator.', ja: '建物にエレベーターがあります。', note: '' },
          { en: 'There are some stairs at the entrance. Will that be okay?', ja: '入口に階段が数段ございますが、大丈夫でしょうか。', note: '足腰に不安のある方への配慮。' },
          { en: 'If you get lost, just call us again. We\'ll help you.', ja: '迷われたら、またお電話ください。ご案内します。', note: '安心してもらえる締めの一言。' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'I can\'t find your place.', ja: '場所がわかりません。' },
      { en: 'How do I get there from the station?', ja: '駅からどう行けばいいですか。' },
      { en: 'What\'s the nearest station?', ja: '最寄り駅はどこですか。' },
      { en: 'I\'m outside the station now. Which way do I go?', ja: '今、駅の外にいます。どちらに行けばいいですか。' },
      { en: 'Is there parking?', ja: '駐車場はありますか。' },
      { en: 'Can you send me the address?', ja: '住所を送ってもらえますか。' },
      { en: 'I think I\'m lost.', ja: '迷ったみたいです。' }
    ]
  },

  {
    id: 'inquiry',
    order: 5,
    title: '料金・営業時間などの問い合わせ',
    titleEn: 'General Inquiries',
    icon: '💬',
    summary: '予約以外の質問への回答です。答えを用意しておけば、電話は一気に楽になります。',
    tips: [
      'よくある質問は5つほどしかありません。答えを書き出して電話の横に置いておきましょう。',
      '料金は必ず「税込かどうか」も添えてください。トラブルの元になります。',
      '答えられない質問は、その場で作らず「確認して折り返します」で構いません。'
    ],
    groups: [
      {
        title: '料金',
        phrases: [
          { en: 'The first session is six thousand yen, tax included.', ja: '初回は税込6000円です。', note: '税込かどうかは必ず添えてください。' },
          { en: 'After that, it\'s five thousand yen per session.', ja: '2回目以降は1回5000円です。', note: '' },
          { en: 'We also have a package of five sessions for a lower price.', ja: '5回の回数券もお得にご用意しております。', note: '' },
          { en: 'There is no extra charge for the first consultation.', ja: '初回のカウンセリングに追加料金はかかりません。', note: '' },
          { en: 'We accept cash, credit cards, and IC cards.', ja: '現金、クレジットカード、交通系ICがご利用いただけます。', note: '' },
          { en: 'I\'m afraid we don\'t accept Japanese health insurance.', ja: '申し訳ございませんが、健康保険は使えません。', note: '整体は保険適用外です。必ず先に伝えましょう。' },
          { en: 'We can give you a receipt if you need one.', ja: '必要でしたら領収書をお出しできます。', note: '' }
        ]
      },
      {
        title: '時間・所要時間',
        phrases: [
          { en: 'We\'re open from ten in the morning to eight in the evening.', ja: '朝10時から夜8時まで営業しております。', note: '' },
          { en: 'We\'re closed on Sundays.', ja: '日曜は定休日です。', note: '' },
          { en: 'Our last appointment is at seven.', ja: '最終受付は7時です。', note: '' },
          { en: 'The first session takes about sixty minutes.', ja: '初回は60分ほどです。', note: '' },
          { en: 'A regular session is about forty minutes.', ja: '通常の施術は40分ほどです。', note: '' },
          { en: 'Please allow a little extra time for your first visit.', ja: '初回は少し余裕を持ってお越しください。', note: '' }
        ]
      },
      {
        title: 'よくあるご質問',
        phrases: [
          { en: 'Yes, we can help you in English.', ja: 'はい、英語で対応できます。', note: '' },
          { en: 'One of our therapists speaks some English.', ja: '英語を話せるスタッフがおります。', note: '' },
          { en: 'You don\'t need to bring anything. Just yourself.', ja: '特にお持ちいただくものはございません。', note: '' },
          { en: 'Please wear comfortable clothes, or we can lend you some.', ja: '動きやすい服装でお越しください。お貸しもできます。', note: '' },
          { en: 'You can keep your clothes on during the session.', ja: '施術中も服を着たままで大丈夫です。', note: '不安を持つ方が多い点です。先に伝えると安心されます。' },
          { en: 'We don\'t use any oil, so you won\'t need a shower.', ja: 'オイルは使いませんので、シャワーは不要です。', note: '' },
          { en: 'Children are welcome. Please let us know in advance.', ja: 'お子様連れも歓迎です。事前にお知らせください。', note: '' },
          { en: 'Yes, we have female therapists available.', ja: 'はい、女性のセラピストもおります。', note: '' },
          { en: 'Would you prefer a female therapist?', ja: '女性のセラピストをご希望ですか。', note: '' }
        ]
      },
      {
        title: '答えがわからないとき',
        phrases: [
          { en: 'That\'s a good question. Let me check for you.', ja: '確認いたしますので少々お待ちください。', note: '' },
          { en: 'I\'d like to confirm that. May I call you back?', ja: '確認のうえ、折り返しお電話してもよろしいですか。', note: '無理に答えないことが大切です。' },
          { en: 'Let me ask the therapist and get back to you.', ja: '担当者に確認して、改めてご連絡します。', note: '' },
          { en: 'I\'ll send you the details by message.', ja: '詳細をメッセージでお送りします。', note: '' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'How much does a session cost?', ja: '1回いくらですか。' },
      { en: 'What are your opening hours?', ja: '営業時間は何時から何時までですか。' },
      { en: 'Are you open on weekends?', ja: '週末は営業していますか。' },
      { en: 'Does anyone there speak English?', ja: '英語を話せる方はいますか。' },
      { en: 'Do I need to bring anything?', ja: '何か持っていくものはありますか。' },
      { en: 'What should I wear?', ja: '何を着ていけばいいですか。' },
      { en: 'Do you take insurance?', ja: '保険は使えますか。' },
      { en: 'Do you have a female therapist?', ja: '女性のセラピストはいますか。' }
    ]
  },

  {
    id: 'symptom-call',
    order: 6,
    title: '症状のご相談・対応可否',
    titleEn: 'Symptom Inquiries',
    icon: '🩺',
    summary: '「この症状でも診てもらえますか」という電話への対応です。電話で診断はできません。',
    tips: [
      '電話では身体を見ていません。「治ります」「大丈夫です」は絶対に言わないでください。',
      '判断に迷ったら、受診をすすめるのが正解です。断ることは信頼を失いません。むしろ守ります。',
      '対応できない場合も、代わりにできることを添えると印象が変わります。'
    ],
    groups: [
      {
        title: '症状を伺う',
        phrases: [
          { en: 'May I ask what\'s bothering you?', ja: 'どのような症状でお困りですか。', note: '' },
          { en: 'Where is the pain?', ja: 'どちらが痛みますか。', note: '' },
          { en: 'How long have you had it?', ja: 'いつからでしょうか。', note: '' },
          { en: 'Did it start after an injury or an accident?', ja: 'ケガや事故のあとに始まりましたか。', note: '外傷の有無は必ず確認してください。' },
          { en: 'Have you seen a doctor about it?', ja: '医療機関は受診されましたか。', note: '' },
          { en: 'Can you walk and move normally?', ja: '普通に歩いたり動いたりはできますか。', note: '緊急度の判断に有効です。' },
          { en: 'Are you in a lot of pain right now?', ja: '今、痛みは強いですか。', note: '' }
        ]
      },
      {
        title: '対応できる場合',
        phrases: [
          { en: 'That\'s something we see very often.', ja: 'よくいらっしゃる症状です。', note: '安心してもらえる一言。' },
          { en: 'We\'d be happy to take a look at it.', ja: '喜んで拝見いたします。', note: '' },
          { en: 'We\'ll check your posture and muscles when you come in.', ja: 'ご来院時に姿勢と筋肉の状態を確認いたします。', note: '' },
          { en: 'I can\'t say anything for certain over the phone.', ja: 'お電話では確かなことは申し上げられません。', note: '断定を避ける重要な一言。' },
          { en: 'We\'d need to see you in person to know more.', ja: '詳しくは直接拝見する必要がございます。', note: '' },
          { en: 'Please note that seitai is not a medical treatment.', ja: '整体は医療行為ではないことをご承知おきください。', note: '' }
        ]
      },
      {
        title: '受診をおすすめする場合',
        phrases: [
          { en: 'From what you\'ve told me, I\'d recommend seeing a doctor first.', ja: 'お話を伺う限り、まず医療機関の受診をおすすめします。', note: '' },
          { en: 'We can\'t treat that here, I\'m afraid.', ja: '申し訳ございませんが、当院では対応できかねます。', note: '' },
          { en: 'It\'s safer to have it checked properly first.', ja: 'まずきちんと検査を受けられるほうが安全です。', note: '' },
          { en: 'Once you have the results, please give us a call.', ja: '検査結果が出ましたら、またお電話ください。', note: '断りではなく「一度預ける」形にできます。' },
          { en: 'If it\'s severe, please don\'t wait. Please see a doctor today.', ja: '症状が強い場合は、今日中に受診してください。', note: '' },
          { en: 'I\'m sorry we can\'t help this time. Please take care of yourself.', ja: '今回はお力になれず申し訳ありません。お大事になさってください。', note: '' }
        ]
      },
      {
        title: '妊娠中・持病がある方',
        phrases: [
          { en: 'Are you pregnant, or could you be?', ja: '妊娠中、またはその可能性はございますか。', note: '' },
          { en: 'How many weeks along are you?', ja: '妊娠何週目でしょうか。', note: '' },
          { en: 'We can work with you, but we\'ll be very gentle.', ja: '対応できますが、やさしい施術に限らせていただきます。', note: '' },
          { en: 'Please check with your doctor first, just to be safe.', ja: '念のため、事前に主治医にご確認いただけますか。', note: '' },
          { en: 'Do you have any medical conditions we should know about?', ja: '事前に伺っておくべき持病はございますか。', note: '' },
          { en: 'Are you taking any medication?', ja: 'お薬は飲んでいらっしゃいますか。', note: '' }
        ]
      }
    ],
    callerPhrases: [
      { en: 'I have really bad back pain. Can you help?', ja: 'ひどい腰痛があります。診てもらえますか。' },
      { en: 'Do you treat sciatica?', ja: '坐骨神経痛は診てもらえますか。' },
      { en: 'I hurt my neck in a car accident.', ja: '交通事故で首を痛めました。' },
      { en: 'I\'m six months pregnant. Is it safe?', ja: '妊娠6ヶ月ですが、大丈夫ですか。' },
      { en: 'I had surgery last year. Is that a problem?', ja: '去年手術をしましたが、大丈夫でしょうか。' },
      { en: 'Will one session be enough?', ja: '1回で治りますか。' },
      { en: 'Is it painful?', ja: '痛いですか。' }
    ]
  }
];

export function phoneTopicById(id) {
  return phoneTopics.find((t) => t.id === id);
}

export function allPhonePhrases() {
  const out = [];
  for (const t of phoneTopics) {
    for (const g of t.groups) {
      for (const p of g.phrases) {
        out.push({ ...p, source: t.title, group: g.title, topicId: t.id, kind: 'staff' });
      }
    }
    for (const p of t.callerPhrases || []) {
      out.push({ ...p, source: t.title, group: 'お客様の発言', topicId: t.id, kind: 'caller' });
    }
  }
  return out;
}
