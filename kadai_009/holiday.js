// 9章課題：16個の祝日を順番に出力する

// 配列の宣言と代入
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日",
                  "みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日",
                  "文化の日","勤労感謝の日"];

// while文を使って祝日を表示 
console.log('***while文での出力***');

let i = 0
while (i !== 16){
  console.log(holidays[i]);
  i = i += 1;
}

// for文
console.log('***for文での出力***');
for ( let i = 0; i <= 15; i ++){
  console.log(holidays[i]);
}