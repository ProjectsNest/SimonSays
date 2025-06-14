let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "green", "orange"];

let start = false;
let lvl = 0;
let h3 = document.querySelector("h3");
let btn = document.querySelector("button");

let max = 0;
let Hs = document.createElement("h3");
Hs.innerText = `Highest Score: ${max}`;
document.querySelector("body").appendChild(Hs)


document.addEventListener("keypress",function(){
   if(start == false) {
        console.log("game started");
        start = true;
        levelUp();
   }
});

function levelUp(){
    if(max < lvl){
        max = lvl;
        Hs.innerText = `Highest Score: ${max}`;
    }
    userSeq = [];
    lvl++;
    h3.innerText = `Level ${lvl}`;

    let i = Math.floor(Math.random()*3);
    let randbtn = btns[i];
    let selbtn = document.querySelector(`.${randbtn}`)
    gameSeq.push(randbtn);
    console.log("GameSeq: ",gameSeq);
    btnFlash(selbtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function btnPress(){
    let btn = this;
    btnFlash(btn);
    let color = btn.getAttribute("id")
    userSeq.push(color);
    console.log("UserSeq: ",userSeq);
    MatchingSeq(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function MatchingSeq(idx){
        if(gameSeq[idx] === userSeq[idx]){
            if(gameSeq.length == userSeq.length){
                setTimeout(levelUp,1100);
            }
        }else{
            h3.innerText = `Game Over! Your score is ${lvl-1}`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
              document.querySelector("body").style.backgroundColor = "white";  
            },500);
            setTimeout(reset,1500);
        }
}

function reset(){
    start  = false;
    gameSeq = [];
    userSeq = [];
    lvl = 0;
    h3.innerText = `Press any Key to start again`;
}