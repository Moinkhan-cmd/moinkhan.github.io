let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");   

document.addEventListener("keypress", function(){             
    if(started == false){
        console.log("Game is started")
        started= true;

        levelUp();
    }
});

function gameFlash(btn){                                              
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    
    }, 200);
}
 
function userFlash(btn){                                              
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    
    }, 200);
}

function levelUp() {
    userSeq = [];                                                                 
    level++;
    h2.innerText = `Level ${level}`; 

    //random btn choose
    let random = Math.floor(Math.random() * btns.length);
    let randClr = btns[random];
    let randbtn = document.querySelector(`.${randClr}`);
    // console.log(random);
    // console.log(randClr);
    // console.log(randbtn);
    gameSeq.push(randClr);
    console.log(gameSeq);
        gameFlash(randbtn); 
    
}

function checkAns(idx){
    // console.log("curr level", level);
    

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
          setTimeout(levelUp, 1000);
        }

    }else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}