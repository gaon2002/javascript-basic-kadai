// 課題7章をswichを使って実施

// numを代入できるように設定
num = 30

// 変数numの値によって、出力する文字列を切り替える
switch(num){
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