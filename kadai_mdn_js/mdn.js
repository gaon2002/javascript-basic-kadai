// 今日の日付を取得し、表示させる


// JavaScriptのDate()関数において、newをつけるとDateオブジェクトのインスタンスが作成される。
const today = new Date();

// 年月日それぞれのデータを定義
const year = today.getFullYear();
// なぜ、月だけ0から始めるのか
const month = today.getMonth() + 1;
const date = today.getDate();

// 年月日を出力
// シングルorダブルクオーテーションではなく、バッククオートを使う
console.log(`${ year }年${ month }月${ date }日`);
// もしくは+記号を使う
console.log(year + '年' + month + '月' + date + '日');
