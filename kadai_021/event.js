// JV基礎　21章課題
// ボタンがクリックされたら2秒後に表示する文章を書き換えるプログラムを記述

// HTMLからbtn要素を入手し、定数btnに代入できるようにする
const btn = document.getElementById('btn');

// HTMLからtext要素を入手し、定数Textに代入できるようにする
const text = document.getElementById('text');

// DOM操作で、HTML要素を作成
// 新しくh2要素を作成し、定数に代入する
const newText = document.createElement('h2');

// btnをクリックしたら;
btn.addEventListener ('click', () => {

  // 2秒後に文字を置き換える
  setTimeout (() => {
    // 作成したli要素にテキストを追加する
    // これだけではjavaScript内で作成したHTML要素を代入しただけ
    newText.textContent = 'ボタンをクリックしました';
  
    // newTextをtextから置き換える　(replaceChiled)
    document.body.replaceChild(newText, text);
  }, 2000)



  
})  