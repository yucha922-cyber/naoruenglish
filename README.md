# naoruenglish

英語学習のためのプロジェクトです。

## ステータス

準備中です。内容は順次追加していきます。

## 開発の進め方

このリポジトリは **`main` を唯一の本流ブランチ** として運用します。

- `main` … 公開される本流。常に安定した状態を保ちます。
- 作業ブランチ … 変更ごとに一時的に作り、PR で `main` にマージしたら削除します。

### 変更の流れ

```bash
# 1. 最新の main から作業ブランチを作る
git checkout main
git pull origin main
git checkout -b <作業ブランチ名>

# 2. 変更をコミットしてプッシュ
git add .
git commit -m "変更内容の説明"
git push -u origin <作業ブランチ名>

# 3. GitHub 上で main 宛の PR を作成 → マージ

# 4. マージ後、作業ブランチを削除
git checkout main
git pull origin main
git branch -d <作業ブランチ名>
git push origin --delete <作業ブランチ名>
```

PR を作成すると `.github/pull_request_template.md` の内容が自動で反映されます。

## 公開時の注意

このリポジトリは **public（誰でも閲覧可能）** です。以下は絶対にコミットしないでください。

- API キー、アクセストークン、パスワード
- `.env` などの環境変数ファイル（`.gitignore` で除外済み）
- 個人情報、非公開の学習教材など第三者の著作物

一度コミットした情報は履歴に残るため、削除しても完全には消えません。誤ってコミットした場合は速やかに該当キーを無効化してください。

## ライセンス

[MIT License](LICENSE)
