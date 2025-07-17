'use strict';

/**
 * クライアントアプリケーション
 */
const App = {
  data: new SendData(),       // データ・プロパティ
  guide: MessageArea.Left,    // ガイド・プロパティ
  mesg: MessageArea.Right,    // メッセージ・プロパティ
  form: RequestData,          // フォーム・プロパティ
  lbl: ResultLabel,           // ラベル・プロパティ
  out: ResultData,            // 結果出力・プロパティ
  btn: ActionButton.Send,     // ボタン・プロパティ

  /**
   * 実行準備をする関数
   */
  doSetup() {
    // 名前・入力バインド
    App.form.Name.addEventListener('change', () => {
      App.data.Name = App.form.Name.value;
    });

    // メール：入力バインド
    App.form.Mail.addEventListener('change', () => {
      App.data.Mail = App.form.Mail.value;
    });

    // 年齢：入力バインド
    App.form.Age.addEventListener('change', () => {
      App.data.Age = App.form.Age.value;
    });

    // アクションボタン・イベントハンドラー
    App.btn.addEventListener('click', (evt) => {
      App.doSend();
    });
  },

  /**
   * 入力データを結果出力エリアに出力する
   */
  doSend() {
    let checked = Util.validate(App.data);
    if (!checked.stat) {
      Util.setGuideText('error-mesg', checked.text);
      return;
    }

    Util.setGuideText('guide-text', '次の情報を入力して下さい：');

    App.lbl.Name.textContent = '送信された名前';
    App.lbl.Mail.textContent = '送信されたメール';
    App.lbl.Age.textContent = '送信された年齢';

    App.out.Name.textContent = App.data.Name;
    App.out.Mail.textContent = App.data.Mail;
    App.out.Age.textContent = App.data.Age;

    Util.setResultMessage('success-mesg', '送信されました');

    App.data.reset();
    App.form.Name.value = '';
    App.form.Mail.value = '';
    App.form.Age.value = '';
  }
};

// クライアントアプリケーションの準備
App.doSetup();