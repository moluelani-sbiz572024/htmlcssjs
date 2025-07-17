'use strict';

/**
 * コンポーネント・リテラオブジェクト
 */
const Comp = {
  // ストレージ格納キー
  SessKey: 'sample-data',
  // メッセージ色制御用モード
  Mode: {
    Normal:  0,   // 通常
    Success: 1,   // 成功
    Error:   2,   // エラー
  },
  // メッセージエリア
  Guide: document.getElementById('from-message'),
  Message: document.getElementById('result-mesg'),
};

/**
 * データクラス(DTO)
 */
class SimpleData
{
    /**
     * デフォルトコンストラクタ
     */
    constructor() {
      this.name = '',   // 名前
      this.mail = '';   // メール
      this.age = -1;    // 年齢
    }

    /**
     * 名前セッター
     */
    set Name(value) {
      this.name = value;
    }

    /**
     * メールセッター
     */
    set Mail(value) {
      this.mail = value;
    }

    /**
     * 年齢セッター
     */
    set Age(value) {
      this.age = value;
    }

    /**
     * 名前ゲッター
     */
    get Name() {
      return this.name;
    }

    /**
     * メールゲッター
     */
    get Mail() {
      return this.mail;
    }

    /**
     * 年齢ゲッター
     */
    get Age() {
      return this.age;
    }
}

// -------------------------------------------------------

/**
 * ユーティリティ・リテラルオブジェクト
 */
const Util = {
  /**
   * リクエストデータの設定漏れがないかをチェックする
   * @param {SimpleData} data リクエストデータ
   * @returns 
   */
  validRequestData(data) {
    if (data.Name.length === 0) {
      return false;
    }

    if (data.Mail.length === 0) {
      return false;
    }

    if (data.Age < 0) {
      return false;
    }

    return true;
  },

  /**
   * 入力フォームのクリアを行う
   * @param {Object} form 入力フォーム
   */
  clearForm(form) {
    form.Name.value = '';
    form.Mail.value = '';
    form.Age.value = '';
  },

  /**
   * 入力フォームとアプリケーションデータに指定データを設定する
   * @param {Object} form 入力フォーム
   * @param {SimpleData} data 指定データ
   */
  setForm(form, data) {
    // 入力フォームに指定データを設定する
    form.Name.value = data.name;
    form.Mail.value = data.mail;
    form.Age.value = data.age;
    
    // アプリケーションデータに指定データを設定する
    AppData.Name = data.name;
    AppData.Mail = data.mail;
    AppData.Age = data.age;
  },

  /**
   * 送信結果情報をリセットして初期状態にする
   * @param {Object} area リセット対象
   * @param {Object} reset リセット情報
   */
  resetResult(area, reset) {
    // ラベルのリセット
    area.Lbl.Name.textContent = reset.Label;
    area.Lbl.Mail.textContent = reset.Label;
    area.Lbl.Age.textContent = reset.Label;
    
    // 出力情報のリセット
    area.Out.Name.textContent = reset.Text;
    area.Out.Mail.textContent = reset.Text;
    area.Out.Age.textContent = reset.Number;
  },

  /**
   * リクエストデータを送信する
   * @param {SimpleData} data リクエストデータ
   * @param {Object} target 出力先エリア
   */
  sendData(data, target) {
    // 出力先ラベル
    target.Lbl.Name.textContent = '送信された名前';
    target.Lbl.Mail.textContent = '送信されたメール';
    target.Lbl.Age.textContent = '送信された年齢';
    
    // リクエストデータの出力
    target.Out.Name.textContent = data.Name;
    target.Out.Mail.textContent = data.Mail;
    target.Out.Age.textContent = data.Age;
    
    // 処理結果メッセージの表示
    Comp.Message.textContent = '送信されました：';
    Comp.Message.setAttribute('class', 'success-mesg');
  },

  /**
   * ガイドテキストを設定し出力する
   * @param {Number} mode 出力モード
   * @param {String} text 出力テキスト
   */
  setGuideText(mode, text) {
    switch (mode) {
      case Comp.Mode.Normal:
        Comp.Guide.setAttribute('class', 'guide-text');
        break;
      case Comp.Mode.Success:
        Comp.Guide.setAttribute('class', 'success-mesg');
        break;
      case Comp.Mode.Error:
        Comp.Guide.setAttribute('class', 'error-mesg');
        break;
      default:
    }
    Comp.Guide.textContent = text;
  },

  /**
   * 処理結果メッセージを設定し出力する
   * @param {Number} mode 出力モード
   * @param {String} text 出力テキスト
   */
  setResultMessage(mode, text) {
    switch (mode) {
      case Comp.Mode.Normal:
        Comp.Message.setAttribute('class', 'guide-text');
        break;
      case Comp.Mode.Success:
        Comp.Message.setAttribute('class', 'success-mesg');
        break;
      case Comp.Mode.Error:
        Comp.Message.setAttribute('class', 'error-mesg');
        break;
      default:
    }
    Comp.Message.textContent = text;
  },

  /**
   * ストレージに格納されているかどうかを確認する
   * @returns 格納是非（true:格納されている、false:格納されていない）
   */
  isExistStorage() {
    const _parsed = JSON.parse(sessionStorage.getItem(Comp.SessKey));
    return (_parsed != null) ? true : false;
  },

  /**
   * ストレージに格納されているデータを取得する
   * @returns 格納データ
   */
  loadStorage() {
    return JSON.parse(sessionStorage.getItem(Comp.SessKey));
  },

  /**
   * ストレージにデータを格納する
   * @param {Object} data 格納データ
   */
  saveStorage(data) {
    sessionStorage.setItem(Comp.SessKey, JSON.stringify(data));
  },

  /**
   * ストレージをクリニーングする
   */
  clearStorage() {
    sessionStorage.removeItem(Comp.SessKey);
  }
};

// -------------------------------------------------------
// エントリポイント
// -------------------------------------------------------

// 定数定義
const NORMAL = Comp.Mode.Normal;
const SUCCESS = Comp.Mode.Success;
const ERROR = Comp.Mode.Error;

// アプリケーションデータ
const AppData = new SimpleData();
