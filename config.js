/* 問卷設定 —— 只有這個檔要你手動改 */
window.CONFIG = {

  /* Apps Script 部署後拿到的網址，長這樣：
     https://script.google.com/macros/s/AKfycb.../exec            */
  ENDPOINT: "https://script.google.com/macros/s/AKfycbzm2VbHPfrSfIgCBgjltlWo49WVtfMqIUQZUX2ybZ9Zm3kLKbhbmeszCh4URrXxARCyFg/exec",

  /* 空字串 = 不送出，只在瀏覽器主控台印出結果（本機測試用） */

  /* 每人是否隨機打亂題目順序。舊那批是固定順序，稽核列為問題之一 */
  SHUFFLE_ITEMS: true,

  /* 三段之間是否顯示分隔頁 */
  SHOW_SECTION_INTRO: true,

  /* 作答太快的門檻（毫秒）—— 只記錄不擋，分析時再篩 */
  FAST_MS: 1200
};
