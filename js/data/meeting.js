// オンライン英会話ミーティング（練習会）のテンプレート
// 2週間に1回のオンライン練習会で、入室から退出までそのまま使える言い方を集めています。
// en: 英語 / ja: 日本語 / note: 使い分けのポイント / alts: 同じ意味の別の言い方（任意）
// partnerPhrases: 相手（ほかの参加者・講師）が言いそうなこと

export const meetingTopics = [
  {
    id: 'join',
    order: 1,
    title: '入室・最初のあいさつ',
    titleEn: 'Joining the Call',
    icon: '👋',
    summary: '画面に入った最初の30秒。ここで声を出せると、その日の練習がぐっと楽になります。',
    tips: [
      '入ったらまず "Hi everyone!" と言うだけで十分です。完璧な文はいりません。',
      '名前を呼んであいさつすると、一気に場が温まります。',
      '遅れて入ったときは、短く謝ってすぐ参加すればOKです。長い言い訳はいりません。'
    ],
    groups: [
      {
        title: '入ったときの第一声',
        phrases: [
          { en: 'Hi everyone!', ja: 'みなさん、こんにちは。', note: 'これだけで十分です。', alts: ['Hey, everyone!', 'Hello, hello!'] },
          { en: 'Good evening, everyone.', ja: 'みなさん、こんばんは。', note: '' },
          { en: 'Hi, Ken! Good to see you again.', ja: 'ケンさん、こんにちは。また会えてうれしいです。', note: '名前を入れ替えて使います。', alts: ['Nice to see you again!'] },
          { en: 'Long time no see!', ja: 'お久しぶりです。', note: '2週間ぶりなら少し大げさですが、明るく使えます。' },
          { en: 'Can you hear me okay?', ja: '声は聞こえていますか。', note: '入ってすぐの確認に。', alts: ['Can everyone hear me?'] },
          { en: 'Am I the first one here?', ja: '私が一番乗りですか。', note: '' }
        ]
      },
      {
        title: '遅れて入ったとき・途中で抜けるとき',
        phrases: [
          { en: 'Sorry I\'m late!', ja: '遅れてすみません。', note: '短く謝って、すぐ参加しましょう。', alts: ['Sorry, I\'m a little late.'] },
          { en: 'Sorry, my last patient ran a little over.', ja: 'すみません、前の患者様の施術が少し延びてしまって。', note: 'run over = 予定より長引く' },
          { en: 'What did I miss?', ja: '何を話していましたか。', note: '', alts: ['Where are we now?'] },
          { en: 'I might have to leave a little early today.', ja: '今日は少し早めに抜けるかもしれません。', note: '最初に伝えておくと親切です。' },
          { en: 'I need to step away for a minute. I\'ll be right back.', ja: '少し席を外します。すぐ戻ります。', note: '', alts: ['Be right back!'] },
          { en: 'Sorry about that. I\'m back.', ja: 'すみません、戻りました。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'Hey! How\'s it going?', ja: 'やあ、調子はどう？' },
      { en: 'Good to see you!', ja: '会えてうれしいです。' },
      { en: 'We\'re just waiting for a couple more people.', ja: 'あと何人か待っているところです。' },
      { en: 'No worries, we just started.', ja: '大丈夫、今始めたところです。' },
      { en: 'You\'re on mute.', ja: 'ミュートになっていますよ。' }
    ]
  },

  {
    id: 'tech',
    order: 2,
    title: '音声・画面のトラブル',
    titleEn: 'Tech Check & Trouble',
    icon: '🎧',
    summary: '聞こえない・映らない・固まった。オンラインならではの困りごとを英語で伝えます。',
    tips: [
      'トラブルは誰にでも起きます。"Sorry, technical problems!" と笑って言えれば十分です。',
      '声が届かないときは、チャットに書くのも立派な英語練習です。',
      '自分の声が聞こえているか不安なときは、遠慮なく確認しましょう。'
    ],
    groups: [
      {
        title: '音声の確認',
        phrases: [
          { en: 'Can you hear me?', ja: '聞こえますか。', note: '', alts: ['Is my audio okay?'] },
          { en: 'I can\'t hear you very well.', ja: 'あまりよく聞こえません。', note: '' },
          { en: 'I think you\'re on mute.', ja: 'ミュートになっていると思います。', note: '', alts: ['You\'re muted.'] },
          { en: 'Sorry, I was on mute.', ja: 'すみません、ミュートになっていました。', note: '' },
          { en: 'Your voice is breaking up.', ja: '声が途切れています。', note: 'break up = 途切れる' },
          { en: 'There\'s a bit of an echo.', ja: '少しエコーがかかっています。', note: '' },
          { en: 'Could you speak a little louder?', ja: 'もう少し大きな声でお願いできますか。', note: '' }
        ]
      },
      {
        title: '画面・接続の確認',
        phrases: [
          { en: 'Your screen froze.', ja: '画面が固まっています。', note: '', alts: ['You froze for a second.'] },
          { en: 'Sorry, my connection is bad today.', ja: 'すみません、今日は回線が悪くて。', note: '', alts: ['My internet is acting up.'] },
          { en: 'Let me turn my camera off for a bit.', ja: '少しカメラをオフにしますね。', note: '回線が重いときに。' },
          { en: 'I\'ll leave and come back in.', ja: '一度抜けて、入り直します。', note: '', alts: ['Let me rejoin.'] },
          { en: 'Can you see my screen?', ja: '私の画面は見えていますか。', note: '画面共有のとき。' },
          { en: 'I\'ll share my screen.', ja: '画面を共有します。', note: '' },
          { en: 'Can you stop sharing your screen?', ja: '画面共有を止めてもらえますか。', note: '' },
          { en: 'I\'ll put it in the chat.', ja: 'チャットに書きますね。', note: '聞き取れない単語はチャットで確認すると確実です。', alts: ['Could you type it in the chat?'] }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'You\'re breaking up a little.', ja: '少し途切れています。' },
      { en: 'Can you hear me now?', ja: '今は聞こえますか。' },
      { en: 'I think we lost him.', ja: '彼が落ちたみたいです。' },
      { en: 'You\'re back!', ja: '戻ってきましたね。' },
      { en: 'Your camera is off.', ja: 'カメラがオフになっていますよ。' }
    ]
  },

  {
    id: 'small-talk',
    order: 3,
    title: '近況・雑談（ウォームアップ）',
    titleEn: 'Small Talk',
    icon: '☕',
    summary: '本題の前の軽い雑談。ここで口を温めておくと、ロールプレイで言葉が出やすくなります。',
    tips: [
      '質問されたら、答えのあとに "How about you?" と返すだけで会話が続きます。',
      '「最近あった患者様の話」は、話題として一番盛り上がります（個人が特定されない範囲で）。',
      '短く答えても大丈夫。"Pretty good!" "Busy!" だけでも立派な返事です。'
    ],
    groups: [
      {
        title: '近況を聞く',
        phrases: [
          { en: 'How have you been?', ja: '最近どうでしたか。', note: '2週間ぶりのあいさつにぴったり。', alts: ['How\'s everything?', 'What\'s new?'] },
          { en: 'How was your week?', ja: '今週はどうでしたか。', note: '' },
          { en: 'Have you been busy at work?', ja: 'お仕事は忙しかったですか。', note: '', alts: ['Busy at the clinic?'] },
          { en: 'Did you do anything fun on the weekend?', ja: '週末は何か楽しいことをしましたか。', note: '' },
          { en: 'How about you?', ja: 'あなたはどうですか。', note: '会話を返す万能の一言。', alts: ['What about you?', 'And you?'] }
        ]
      },
      {
        title: '自分の近況を話す',
        phrases: [
          { en: 'Pretty good, thanks!', ja: 'まあまあ元気です。', note: '', alts: ['Not bad!', 'Good, thanks!'] },
          { en: 'It\'s been a busy couple of weeks.', ja: 'この2週間はバタバタしていました。', note: '' },
          { en: 'I had a patient from overseas this week.', ja: '今週、海外の患者様が来ました。', note: '一番盛り上がる話題です。' },
          { en: 'I actually used a phrase from last time!', ja: '前回練習したフレーズを実際に使えました。', note: '' },
          { en: 'I tried to say something, but it didn\'t come out.', ja: '言おうとしたのですが、言葉が出てきませんでした。', note: '失敗談も立派な練習の題材です。' },
          { en: 'I\'m a little tired today, but I\'m excited to practice.', ja: '今日は少し疲れていますが、練習が楽しみです。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'Pretty busy, but good.', ja: '忙しいけど元気です。' },
      { en: 'Same old, same old.', ja: '相変わらずです。' },
      { en: 'Oh, really? How did it go?', ja: 'へえ、本当に？どうでした？' },
      { en: 'That\'s great!', ja: 'すごいですね。' },
      { en: 'That happens to me too.', ja: '私もそうなります。' }
    ]
  },

  {
    id: 'agenda',
    order: 4,
    title: '今日の進め方を決める',
    titleEn: 'Planning the Session',
    icon: '🗒️',
    summary: '司会役になったときの進行フレーズ。順番・テーマ・時間配分を決めます。',
    tips: [
      '司会は「テーマ → 順番 → 時間」の3つを言えれば十分です。',
      '"Let\'s 〜" を使えば、ほとんどの進行がこなせます。',
      '迷ったら "What do you all think?" とみんなに振りましょう。'
    ],
    groups: [
      {
        title: '始める',
        phrases: [
          { en: 'Okay, shall we get started?', ja: 'では、始めましょうか。', note: '', alts: ['Let\'s get started!', 'Okay, let\'s begin.'] },
          { en: 'Thanks for joining today, everyone.', ja: '今日は参加してくれてありがとうございます。', note: '' },
          { en: 'I\'ll be the host today.', ja: '今日は私が司会をします。', note: '', alts: ['I\'ll run things today.'] },
          { en: 'Today\'s topic is the intake interview.', ja: '今日のテーマは問診です。', note: 'テーマを入れ替えて使います。' },
          { en: 'We have about sixty minutes today.', ja: '今日は60分くらいです。', note: '' }
        ]
      },
      {
        title: '順番と時間を決める',
        phrases: [
          { en: 'First, let\'s do a quick review of last time.', ja: 'まず、前回の内容を軽く復習しましょう。', note: '' },
          { en: 'Then we\'ll do role plays in pairs.', ja: 'そのあと、ペアでロールプレイをします。', note: '' },
          { en: 'Each pair gets about ten minutes.', ja: '1ペア10分くらいです。', note: '' },
          { en: 'Who wants to go first?', ja: '最初にやりたい人はいますか。', note: '', alts: ['Any volunteers?'] },
          { en: 'Let\'s go in alphabetical order.', ja: '名前のアルファベット順でいきましょう。', note: '' },
          { en: 'We\'ll finish with feedback.', ja: '最後にフィードバックをして終わります。', note: '' },
          { en: 'Does that sound okay?', ja: 'それでいいですか。', note: '', alts: ['Sound good?', 'What do you all think?'] }
        ]
      },
      {
        title: '時間の管理',
        phrases: [
          { en: 'We have five minutes left.', ja: '残り5分です。', note: '' },
          { en: 'Let\'s move on to the next part.', ja: '次に進みましょう。', note: '', alts: ['Let\'s move on.'] },
          { en: 'We\'re running a little behind.', ja: '少し押しています。', note: '' },
          { en: 'Let\'s take a five-minute break.', ja: '5分休憩しましょう。', note: '' },
          { en: 'Let\'s come back at eight-fifteen.', ja: '8時15分に再開しましょう。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'Sounds good to me.', ja: 'いいと思います。' },
      { en: 'I can go first.', ja: '私が最初にやります。' },
      { en: 'Can we do the phone part today?', ja: '今日は電話対応をやりませんか。' },
      { en: 'Could we have a little more time?', ja: 'もう少し時間をもらえますか。' }
    ]
  },

  {
    id: 'role-play',
    order: 5,
    title: 'ロールプレイを進める',
    titleEn: 'Role Play',
    icon: '🎭',
    summary: '患者役・セラピスト役を決めて練習する場面。始め方・止め方・やり直し方を押さえます。',
    tips: [
      '役を決めるときは "You be the patient, and I\'ll be the therapist." が一番簡単です。',
      '途中で止めたいときは "Can we pause for a second?" で大丈夫です。止めるのは失礼ではありません。',
      '患者役のときは、このサイトの「患者様が言いそうなこと」をそのまま使うと練習になります。'
    ],
    groups: [
      {
        title: '役と場面を決める',
        phrases: [
          { en: 'Let\'s do a role play.', ja: 'ロールプレイをしましょう。', note: '' },
          { en: 'You be the patient, and I\'ll be the therapist.', ja: 'あなたが患者役、私がセラピスト役をやります。', note: '一番使う言い方。', alts: ['Can you be the patient this time?'] },
          { en: 'Let\'s switch roles.', ja: '役を交代しましょう。', note: '', alts: ['Now let\'s swap.'] },
          { en: 'The setting is the first visit.', ja: '場面は初回来院です。', note: '' },
          { en: 'You have lower back pain, and you\'re a little nervous.', ja: 'あなたは腰痛で、少し緊張している設定です。', note: '患者役に設定を伝えるとき。' },
          { en: 'Please speak at a natural speed.', ja: '自然なスピードで話してください。', note: '実践に近づけたいときに。' },
          { en: 'Can you go a little slower this time?', ja: '今回は少しゆっくりお願いできますか。', note: '' }
        ]
      },
      {
        title: '始める・止める・やり直す',
        phrases: [
          { en: 'Okay, ready? Let\'s start.', ja: 'では、準備はいいですか。始めましょう。', note: '', alts: ['Ready when you are.'] },
          { en: 'Can we pause for a second?', ja: 'ちょっと止めてもいいですか。', note: '', alts: ['Hold on a sec.'] },
          { en: 'Can I try that part again?', ja: 'そこをもう一度やってもいいですか。', note: '', alts: ['Let me try that again.'] },
          { en: 'Let\'s start over from the greeting.', ja: 'あいさつから最初にやり直しましょう。', note: '' },
          { en: 'Let\'s pick up from where we stopped.', ja: '止めたところから再開しましょう。', note: '' },
          { en: 'Okay, let\'s stop there.', ja: 'では、そこまでにしましょう。', note: '' }
        ]
      },
      {
        title: '言葉が出てこないとき',
        phrases: [
          { en: 'How do you say "katakori" in English?', ja: '「肩こり」は英語で何と言いますか。', note: '日本語の部分を入れ替えて使えます。' },
          { en: 'What\'s the word for it?', ja: 'あれ、何て言うんでしたっけ。', note: '', alts: ['It\'s on the tip of my tongue.'] },
          { en: 'Is it okay to say it like this?', ja: 'こういう言い方で大丈夫ですか。', note: '' },
          { en: 'Is there a more natural way to say it?', ja: 'もっと自然な言い方はありますか。', note: '練習会で一番聞いておきたい質問。' },
          { en: 'Can I look it up quickly?', ja: 'ちょっと調べてもいいですか。', note: '' },
          { en: 'Let me try to say it another way.', ja: '別の言い方で言ってみます。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'Sure, I\'ll be the patient.', ja: 'いいですよ、患者役をやります。' },
      { en: 'Should I make it harder this time?', ja: '今回は少し難しくしましょうか。' },
      { en: 'Take your time.', ja: 'ゆっくりで大丈夫ですよ。' },
      { en: 'Oh, I\'d say "stiff shoulders."', ja: '私なら "stiff shoulders" と言いますね。' },
      { en: 'That was really natural!', ja: 'すごく自然でした。' }
    ]
  },

  {
    id: 'clarify',
    order: 6,
    title: '聞き返す・確認する',
    titleEn: 'Asking Again',
    icon: '🔁',
    summary: '聞き取れない・意味がわからない。オンラインは聞き取りにくいので、聞き返しは何度でもOKです。',
    tips: [
      '聞き返しは英語力のサインではなく、相手に関心があるサインです。',
      '一部だけ聞き取れたら、その単語を繰り返すと相手が言い直してくれます（例："Two weeks?"）。',
      'スペルを聞くとき、チャットに書いてもらうのが一番確実です。'
    ],
    groups: [
      {
        title: '聞き返す',
        phrases: [
          { en: 'Sorry, could you say that again?', ja: 'すみません、もう一度お願いできますか。', note: '' },
          { en: 'Sorry, I missed that.', ja: 'すみません、聞き逃しました。', note: '', alts: ['Sorry, I didn\'t catch that.'] },
          { en: 'Could you say that more slowly?', ja: 'もう少しゆっくり言ってもらえますか。', note: '' },
          { en: 'What does that mean?', ja: 'それはどういう意味ですか。', note: '' },
          { en: 'How do you spell that?', ja: 'つづりを教えてもらえますか。', note: '' },
          { en: 'Could you type that in the chat?', ja: 'チャットに書いてもらえますか。', note: '' }
        ]
      },
      {
        title: '確認する',
        phrases: [
          { en: 'So you mean ...?', ja: 'つまり〜ということですか。', note: '相手の言葉を言い換えて確認します。' },
          { en: 'Just to check, we\'re doing the phone part next?', ja: '確認ですが、次は電話対応ですか。', note: '' },
          { en: 'Did I say that right?', ja: '今の言い方で合っていましたか。', note: '', alts: ['Was that okay?'] },
          { en: 'Got it, thanks.', ja: 'わかりました、ありがとう。', note: '', alts: ['Okay, I see.', 'That makes sense.'] }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'No problem. I said ...', ja: 'いいですよ。〜と言いました。' },
      { en: 'Let me put it another way.', ja: '別の言い方をしますね。' },
      { en: 'Does that make sense?', ja: 'わかりますか。' },
      { en: 'I\'ll type it in the chat.', ja: 'チャットに書きますね。' }
    ]
  },

  {
    id: 'feedback',
    order: 7,
    title: 'フィードバック・振り返り',
    titleEn: 'Feedback',
    icon: '💡',
    summary: 'ロールプレイのあとに感想を伝え合う場面。ほめる → 提案する、の順にすると角が立ちません。',
    tips: [
      'まず良かったところを1つ。そのあと "Maybe you could 〜" で提案すると柔らかく伝わります。',
      'もらったフィードバックには "Thanks, that\'s really helpful!" と返しましょう。',
      '覚えたい表現は、その場でこのサイトのお気に入り（★）に入れておくと復習しやすくなります。'
    ],
    groups: [
      {
        title: 'ほめる',
        phrases: [
          { en: 'That was great!', ja: 'すごく良かったです。', note: '', alts: ['Nice job!', 'Well done!'] },
          { en: 'Your pronunciation was really clear.', ja: '発音がとても聞き取りやすかったです。', note: '' },
          { en: 'I liked how you explained the cause.', ja: '原因の説明の仕方が良かったです。', note: '' },
          { en: 'You sounded really natural.', ja: 'とても自然に聞こえました。', note: '' },
          { en: 'You made the patient feel relaxed.', ja: '患者さんが安心できる感じでした。', note: '' }
        ]
      },
      {
        title: '提案する',
        phrases: [
          { en: 'Maybe you could ask about the pain scale too.', ja: '痛みのスケールも聞くといいかもしれません。', note: '"Maybe you could 〜" で柔らかい提案に。' },
          { en: 'One small thing — you could say "lower back" instead of "waist."', ja: '一つだけ。"waist" より "lower back" のほうがいいかもしれません。', note: '' },
          { en: 'You could slow down a little.', ja: 'もう少しゆっくりでもいいと思います。', note: '' },
          { en: 'Next time, try adding a "Just so you know."', ja: '次は "Just so you know" を付けてみてください。', note: '' }
        ]
      },
      {
        title: '振り返る',
        phrases: [
          { en: 'Thanks, that\'s really helpful!', ja: 'ありがとう、すごく参考になります。', note: '' },
          { en: 'What was the hardest part for you?', ja: '一番難しかったところはどこですか。', note: '' },
          { en: 'For me, the hardest part was listening.', ja: '私は聞き取りが一番難しかったです。', note: '' },
          { en: 'I learned a new phrase today.', ja: '今日は新しいフレーズを覚えました。', note: '' },
          { en: 'I want to practice this part more.', ja: 'この部分をもっと練習したいです。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'You did really well.', ja: 'とても上手でした。' },
      { en: 'Maybe try to make eye contact with the camera.', ja: 'カメラを見て話すといいかもしれません。' },
      { en: 'I think "How much pressure do you like?" sounds more natural.', ja: '"How much pressure do you like?" のほうが自然だと思います。' },
      { en: 'Good point. I\'ll try that.', ja: 'いい指摘ですね。やってみます。' }
    ]
  },

  {
    id: 'closing',
    order: 8,
    title: '次回の予定・退出',
    titleEn: 'Wrapping Up',
    icon: '🚪',
    summary: '次回の日程と宿題を決めて、気持ちよく退出するまで。',
    tips: [
      '最後に次回の日程を確認しておくと、2週間後もスムーズに集まれます。',
      '退出のあいさつは "Thanks, everyone! See you next time!" の一言で十分です。',
      '「次回までにやること」を一つ決めて口に出すと、続けやすくなります。'
    ],
    groups: [
      {
        title: 'まとめる',
        phrases: [
          { en: 'Okay, let\'s wrap up.', ja: 'では、そろそろまとめましょう。', note: 'wrap up = 締めくくる', alts: ['That\'s about it for today.'] },
          { en: 'Thanks for your hard work today.', ja: '今日はお疲れさまでした。', note: '「お疲れさま」に一番近い言い方。', alts: ['Great work today, everyone.'] },
          { en: 'Any last questions?', ja: '最後に質問はありますか。', note: '' },
          { en: 'For next time, let\'s each practice the screening phrases.', ja: '次回までに、各自スクリーニングのフレーズを練習しておきましょう。', note: '宿題を決めるとき。' }
        ]
      },
      {
        title: '次回の予定を決める',
        phrases: [
          { en: 'The next session is in two weeks.', ja: '次回は2週間後です。', note: '' },
          { en: 'Does the same time work for everyone?', ja: 'みなさん同じ時間で大丈夫ですか。', note: '', alts: ['Same time next time?'] },
          { en: 'I can\'t make it next time, sorry.', ja: '次回は参加できません、すみません。', note: '' },
          { en: 'Who wants to host next time?', ja: '次回の司会をやりたい人はいますか。', note: '' },
          { en: 'I\'ll send the link in the group chat.', ja: 'グループチャットにリンクを送ります。', note: '' }
        ]
      },
      {
        title: '退出のあいさつ',
        phrases: [
          { en: 'Thanks, everyone! See you next time!', ja: 'みなさん、ありがとうございました。また次回！', note: 'これだけ言えれば完璧です。', alts: ['See you in two weeks!', 'Bye, everyone!'] },
          { en: 'Have a good night!', ja: 'おやすみなさい。', note: '夜の練習会の締めに。', alts: ['Have a good one!'] },
          { en: 'Take care!', ja: 'お元気で。', note: '' },
          { en: 'I have to go now. Bye!', ja: 'そろそろ失礼します。またね。', note: '' }
        ]
      }
    ],
    partnerPhrases: [
      { en: 'Thanks, that was fun!', ja: 'ありがとう、楽しかったです。' },
      { en: 'See you in two weeks!', ja: 'また2週間後に。' },
      { en: 'Same time works for me.', ja: '同じ時間で大丈夫です。' },
      { en: 'Bye! Have a good night!', ja: 'じゃあね、おやすみなさい。' }
    ]
  }
];

/**
 * 入室から退出までの通し台本。
 * A = 自分（司会） / B = 相手。実際の練習会の流れに沿って並べています。
 */
export const meetingScript = [
  { step: '入室', who: 'A', en: 'Hi everyone! Can you hear me okay?', ja: 'みなさん、こんにちは。声は聞こえますか。' },
  { step: '入室', who: 'B', en: 'Yes, loud and clear! How\'s it going?', ja: 'はい、よく聞こえます。調子はどう？' },
  { step: '雑談', who: 'A', en: 'Pretty good, thanks. How have you been?', ja: 'まあまあです。最近どうでした？' },
  { step: '雑談', who: 'B', en: 'Busy! I had a patient from Australia this week.', ja: '忙しかったです。今週オーストラリアの患者さんが来ました。' },
  { step: '雑談', who: 'A', en: 'Oh, really? How did it go?', ja: 'へえ、本当に？どうでした？' },
  { step: '雑談', who: 'B', en: 'Okay, but I couldn\'t explain the cause very well.', ja: 'まあまあ。でも原因の説明がうまくできませんでした。' },
  { step: '進め方', who: 'A', en: 'Then let\'s practice that today. Shall we get started?', ja: 'じゃあ今日はそこを練習しましょう。始めましょうか。' },
  { step: '進め方', who: 'A', en: 'First, a quick review. Then role plays, and we\'ll finish with feedback.', ja: 'まず軽く復習、次にロールプレイ、最後にフィードバックです。' },
  { step: '進め方', who: 'B', en: 'Sounds good.', ja: 'いいですね。' },
  { step: 'ロールプレイ', who: 'A', en: 'You be the patient, and I\'ll be the therapist. You have stiff shoulders.', ja: 'あなたが患者役で、私がセラピスト役。肩こりの設定です。' },
  { step: 'ロールプレイ', who: 'B', en: 'Got it. Ready when you are.', ja: '了解。いつでもどうぞ。' },
  { step: 'ロールプレイ', who: 'A', en: 'Hi, come on in. What brings you here today?', ja: 'こんにちは、どうぞ。今日はどうされました？' },
  { step: 'ロールプレイ', who: 'B', en: 'My shoulders are rock hard. It gets really bad after work.', ja: '肩がガチガチで。仕事のあとがひどいんです。' },
  { step: 'ロールプレイ', who: 'A', en: 'Sorry, can we pause for a second? How do you say "zutsuu" again?', ja: 'ごめん、ちょっと止めていい？「頭痛」って何だっけ？' },
  { step: 'ロールプレイ', who: 'B', en: 'Headache.', ja: 'Headache です。' },
  { step: 'ロールプレイ', who: 'A', en: 'Thanks. Do you get headaches along with it?', ja: 'ありがとう。一緒に頭痛も出ますか。' },
  { step: 'フィードバック', who: 'B', en: 'That was great! Your questions were really clear.', ja: 'すごく良かったです。質問がとてもわかりやすかった。' },
  { step: 'フィードバック', who: 'B', en: 'Maybe you could ask about the pain scale too.', ja: '痛みのスケールも聞くといいかも。' },
  { step: 'フィードバック', who: 'A', en: 'Thanks, that\'s really helpful! Now let\'s switch roles.', ja: 'ありがとう、参考になります。じゃあ役を交代しましょう。' },
  { step: 'まとめ', who: 'A', en: 'Okay, let\'s wrap up. Thanks for your hard work today.', ja: 'では、まとめましょう。今日はお疲れさまでした。' },
  { step: '次回', who: 'A', en: 'The next session is in two weeks. Does the same time work for everyone?', ja: '次回は2週間後です。同じ時間で大丈夫ですか。' },
  { step: '次回', who: 'B', en: 'Same time works for me.', ja: '同じ時間で大丈夫です。' },
  { step: '退出', who: 'A', en: 'Great. Thanks, everyone! See you next time!', ja: 'よかった。みなさんありがとう、また次回！' },
  { step: '退出', who: 'B', en: 'Bye! Have a good night!', ja: 'じゃあね、おやすみなさい。' }
];

export function meetingTopicById(id) {
  return meetingTopics.find((t) => t.id === id);
}

export function allMeetingPhrases() {
  const out = [];
  for (const t of meetingTopics) {
    for (const g of t.groups) {
      for (const p of g.phrases) {
        out.push({ ...p, source: t.title, group: g.title, topicId: t.id, kind: 'self' });
      }
    }
    for (const p of t.partnerPhrases || []) {
      out.push({ ...p, source: t.title, group: '相手の発言', topicId: t.id, kind: 'partner' });
    }
  }
  return out;
}
