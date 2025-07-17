'use strict';

/**
 * 入力データ格納クラス
 * 本クラスはDTO(Data Transfer Object)アーキテクチャに準拠するもの。
 */
class SendData
{
    // 次のプロパティは、アクセサメソッドを使ったアクセスのみとするため、
    // 本来は「プライベート化」すべきだが、今回はカリキュラム範囲外のため、
    // 敢えて対応しないこととする。「プライベート化」の詳細は、下記URLを参照のこと。
    // cf)
    //   https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/Private_properties
    
    /**
     * コンストラクタ
     */
    constructor() {
      this.reset();
    }

    // プロパティ・リセット
    reset() {
      this.name = '';
      this.mail = '';
      this.age = -1;
    }

    // アクセッサ：名前
    set Name(value) {
      this.name = value;
    }
    get Name() {
      return this.name;
    }

    // アクセッサ：メール
    set Mail(value) {
      this.mail = value;
    }
    get Mail() {
      return this.mail;
    }

    // アクセッサ：年齢
    set Age(value) {
      this.age = value;
    }
    get Age() {
      return this.age;
    }
}

// 入力フォームオブジェクト
const RequestData = {
  Name: document.getElementById('simple-form-name'),
  Mail: document.getElementById('simple-form-mail'),
  Age: document.getElementById('simple-form-age'),
};

// 結果出力ラベルオブジェクト
const ResultLabel = {
  Name: document.getElementById('result-name-label'),
  Mail: document.getElementById('result-mail-label'),
  Age: document.getElementById('result-age-label'),
};

// 結果出力オブジェクト
const ResultData = {
  Name: document.getElementById('result-name'),
  Mail: document.getElementById('result-mail'),
  Age: document.getElementById('result-age'),
};

// メッセージエリアオブジェクト
const MessageArea = {
  Left: document.getElementById('from-message'),
  Right: document.getElementById('result-mesg'),
};

// アクションボタンオブジェクト
const ActionButton = {
  Send: document.getElementsByClassName('btn')[0],
};

/**
 * ユーティリティオブジェクト
 */
const Util = {
  /**
   * 入力データのチェック
   * @param {SendData} data 
   * @returns 入力結果を示すオブジェクト
   * {text:エラーメッセージ, stat:結果(true|false)}
   */
  validate(data) {
    if (data.Name.length === 0) {
      return {
        text: '名前が入力されていません', 
        stat: false
      };
    }

    if (data.Mail.length === 0) {
      return {
        text: 'メールが入力されていません', 
        stat: false
      };
    }

    if (data.Age < 0) {
      return {
        text: '年齢が入力されていません', 
        stat: false
      };
    }

    return {
      text: '', 
      stat: true
    };
  },

  /**
   * ガイドテキストを所定の場所に出力する
   * @param {String} mode 出力テキストの色を示すclass属性値
   * @param {String} text 出力テキスト
   */
  setGuideText(mode, text) {
    MessageArea.Left.textContent = text;
    MessageArea.Left.setAttribute('class', mode);
  },

  /**
   * 結果メッセージを所定の場所に出力する
   * @param {String} mode 出力テキストの色を示すclass属性値
   * @param {String} text 出力テキスト
   */
  setResultMessage(mode, text) {
    MessageArea.Right.textContent = text;
    MessageArea.Right.setAttribute('class', mode);
  }
};