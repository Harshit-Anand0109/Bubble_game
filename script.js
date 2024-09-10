var timer = 60;
var hitrn = 0;
var score = 0;
function increaseScore(){
    document.querySelector("#scoreval").textContent = score;
    score+=10;
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent = hitrn;
}

function makeBubble(){
    var clutter = " ";

for (var i=1; i<=102; i++){
    var ran = Math.floor(Math.random()*10)
    clutter += `<div class ="bubble">${ran}</div>`;
}
document.querySelector("#lowerportionofthebox").innerHTML = clutter;
}


function runTimer(){
     var timerint = setInterval(function(){
      if(timer > 0){
        timer--;
      document.querySelector("#timerValue").textContent = timer;
      }
      else{
        clearInterval(timerint);
        document.querySelector("#lowerportionofthebox").innerHTML = `<h1>Game Over</h1>`;
      }
    },1000);    
}

document.querySelector("#lowerportionofthebox").addEventListener("click",function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
});


runTimer();
makeBubble();
getNewHit();
increaseScore();