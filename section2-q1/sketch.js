// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    noFill();
    ellipse(50,50,i*10,i*10);
if(i<5){stroke(0,0,255)}
else{stroke(255,0,0)}

  }
}
