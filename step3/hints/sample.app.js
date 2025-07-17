'use strict';

/**
 * クライアントアプリケーション
 */
const App = {
  data: null,   // データ・プロパティ
  guide: null,   // ガイド・プロパティ
  mesg: null,     // メッセージ・プロパティ
  form: null,   // フォーム・プロパティ
  lbl: null,    // ラベル・プロパティ
  out: null,    // 結果出力・プロパティ
  btn: null,   // ボタン・プロパティ

  // 実行準備をする関数
  doSetup() {
    App.btn.addEventListener('click', () => {
      console.log('Hello !!');
    });
  },
};

// クライアントアプリケーションの準備
App.doSetup();