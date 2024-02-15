// JavaScriptの基礎を学ぼう_14章課題

// 2乗は　「〇**2」と記述する。　「Math.pow」と同じ。

const calcurateSquare = (square) => {
  // 引数で渡した値を二乗　(関数の実行結果を返す)
  return square ** 2;
}
// 関数calcurateSquareを呼び出し、引数3を渡す
const result = calcurateSquare(3)

// 戻り値を出力
console.log(result);