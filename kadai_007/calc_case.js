// 課題7章をswitchを使って実施

// numを代入できるように設定
let num = 55;

// 変数numの値を出力
console.log(num);

// 変数numの値によって、出力する文字列を切り替える

// case文の条件式は、単純な値を比較するために使用されるべき。
switch(true){
  case (num % 3 === 0 && num % 5 === 0):
    console.log('3と5の倍数です');
  break;
  case (num % 3 === 0):
    console.log('3の倍数です');
  break;
  case (num % 5 === 0):
    console.log('5の倍数です');
  break;
  default:
    console.log(num);
  break;
}