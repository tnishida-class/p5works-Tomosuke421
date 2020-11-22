// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",200,100,60);
}

function balloon(t,c,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 8;
  fill(c);
  noStroke();
  rect(0, 0, w + p * 2, h + p * 2);
  fill(0);
  text(t, p, h + p);
  fill(c);
  noStroke();
  triangle(w+p*2-25,h+p*2,x,y,w+p*2-5,h+p*2);
}
