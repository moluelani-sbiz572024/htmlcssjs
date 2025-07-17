'use strict';

/**
 * 入力データ格納クラス
 */


// 入力フォームオブジェクト


// 結果出力ラベルオブジェクト


// 結果出力オブジェクト


// メッセージエリアオブジェクト
const MessageArea = {
  Left: document.getElementById('from-message'),
  Right: document.getElementById('result-mesg'),
}

// アクションボタンオブジェクト


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