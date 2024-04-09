let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");


let started=false;
let level=0;
document.addEventListener("keypress",function(){
      if(started== false){
        console.log("game is started");
        started=true;
        
        levelUp();
      }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    
    level++;
    h2.innerText=`Level ${level}`;
//random button
let randomIdx=Math.floor(Math.random()*3);
let randomColor=btns[randomIdx];
let randomBtn=document.querySelector(`.${randomColor}`);
gameSeq.push(randomColor);
console.log(gameSeq);
    btnFlash(randomBtn);

}
function checkAns(idx){
// console.log(`current `,level);

if(userSeq[idx]==gameSeq[idx]){
   if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,500);
   }
   
}else{
    h2.innerHTML=`game over!! <b> Your score is ${level}</b> <br>Press Any key to Start.`;
    document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
   },200);
    reset();
}
}
function btnPress(){
   
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}