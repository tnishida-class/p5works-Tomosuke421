// 最終課題を制作しよう
let x, y, vx, vy, j;
const g=1
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=0;
  y=0;
  vx=8;
  vy=8;
  j=50;
}

function draw(){
 background(0, 128, 0);
 fill(255, 255, 0);
let i=0
while(i<8){
  textSize(hinatazaka(i))
 text("banana", i*windowWidth/8, j);
 i+=1
}
  textSize(55);
  fill(128, 0, 0);
  text("monkey", x, y);
  x +=vx;
  y +=vy;

  vy = constrain(vy + g, -vyMax, vyMax);

  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function hinatazaka(a){
  return a*8
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
