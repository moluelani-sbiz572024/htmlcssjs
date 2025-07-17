'use strict';

/**
 * クライアントアプリケーション
 */
const App = {
  // デフォルト値
  Default: {
    LeftGuide: '次の情報を入力して下さい：',
    RightGuide: '送信データを待っています：',
    Label: '？？？',
    Text: 'xxxxx',
    Number: 'nnn'
  },
  // 
  Left: {
    Name: document.getElementById('simple-form-name'),
    Mail: document.getElementById('simple-form-mail'),
    Age: document.getElementById('simple-form-age'),
  },
  // 
  Right: {
    Lbl: {  //
      Name: document.getElementById('result-name-label'),
      Mail: document.getElementById('result-mail-label'),
      Age: document.getElementById('result-age-label'),
    },
    Out: {  // 
      Name: document.getElementById('result-name'),
    Mail: document.getElementById('result-mail'),
    Age: document.getElementById('result-age'),
    }
  },

  /**
   * 
   */
  doSetup() {
    // バインド（名前）
    App.Left.Name.addEventListener('change', () => {
      AppData.Name = App.Left.Name.value;
    });

    // バインド（メール）
    App.Left.Mail.addEventListener('change', () => {
      AppData.Mail = App.Left.Mail.value;
    });

    // バインド（年齢）
    App.Left.Age.addEventListener('change', () => {
      AppData.Age = App.Left.Age.value;
    });
  },

  /**
   * 送信ボタン・クリック処理
   * 左ボックスに入力したデータを右ボックスに表示させる
   */
  doSend() {
    // 入力データのチェック
    if (!Util.validRequestData(AppData)) {
      Util.setGuideText(ERROR, '未入力項目があります');
      return;
    }
    
    // データの送信（右ボックスへ）と入力データのクリア
    Util.sendData(AppData, App.Right);
    Util.clearForm(App.Left);

    // メッセージ表示
    Util.setGuideText(NORMAL, App.Default.LeftGuide);
  },

  /**
   * 初期化ボタン・クリック処理
   * 画面を初期化する
   */
  doInit() {
    // 左ボックスのクリア
    Util.setGuideText(NORMAL, App.Default.LeftGuide);
    Util.clearForm(App.Left);
    
    // 右ボックスのクリア
    Util.setResultMessage(NORMAL, App.Default.RightGuide);
    Util.resetResult(App.Right, App.Default);
    
    // 一時保管エリアのクリア
    Util.clearStorage();
  },

  /**
   * 保存ボタン・クリック処理
   * 入力データを一時保管（ブラウザ終了するまで）する
   */
  doSave() {
    // 入力データのチェック
    if (!Util.validRequestData(AppData)) {
      Util.setGuideText(ERROR, '保存するデータがないか不足しています');
      return;
    }

    // 入力データの保存と入力データのクリア
    Util.saveStorage(AppData);
    Util.clearForm(App.Left);

    // メッセージ表示
    Util.setGuideText(SUCCESS, 'データを保存しました');
  },

  /**
   * 復元ボタン・クリック処理
   * 一時保管してあるデータを画面に復元する（ブラウザ終了するまで）
   */
  doLoad() {
    // 復元データの存在チェック
    if (!Util.isExistStorage()) {
      Util.setGuideText(ERROR, '復元データがありませんでした');
      return;
    }

    // データを画面に復元
    Util.setForm(App.Left, Util.loadStorage());

    // メッセージ表示
    Util.setGuideText(SUCCESS, 'データを復元しました');
  }
};

// クライアントアプリケーションの準備
App.doSetup();