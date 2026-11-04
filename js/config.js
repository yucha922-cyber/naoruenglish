// ログイン（Google アカウント）と管理画面の設定
//
// ここが空のままなら、ログイン機能は無効です（これまでどおり、誰でもログインなしで閲覧できます）。
// 設定手順は README の「ログインと管理画面の設定」を見てください。

/** Firebase コンソール › プロジェクトの設定 › マイアプリ に表示される値をそのまま貼り付けます */
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  appId: ''
};

/**
 * 管理画面を開ける Gmail アドレス。
 * firestore.rules の ADMIN_EMAILS にも同じアドレスを書いてください（実際のデータ保護はそちらで行います）。
 */
export const ADMIN_EMAILS = [
  // 'your.name@gmail.com'
];

/**
 * true にすると、ログインしないとサイトを閲覧できなくなります。
 * 「誰が使っているか」を把握するには true のままにしてください。
 */
export const REQUIRE_LOGIN = true;
