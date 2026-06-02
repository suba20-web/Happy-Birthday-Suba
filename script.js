const music =
document.getElementById("bgMusic");

document
.getElementById("startBtn")
.addEventListener("click",()=>{

music.play();

document
.getElementById("intro")
.style.display="none";

document
.getElementById("dobPage")
.classList.remove("hidden");

});

function checkDOB(){

const value =
document
.getElementById("dobInput")
.value;

if(value==="2006-06-20"){

document
.getElementById("dobPage")
.classList.add("hidden");

document
.getElementById("welcomePage")
.classList.remove("hidden");

}else{

alert(
"Oops! Only Suba can enter 💜"
);

}

}

function nextPage(id){

document
.querySelectorAll(".page")
.forEach(page=>{

page.classList.add("hidden");

});

document
.getElementById(id)
.classList.remove("hidden");

}

function startCountdown(){

let num=5;

const countdown=
document.getElementById("countdown");

const timer=
setInterval(()=>{

num--;

countdown.innerHTML=num;

if(num===0){

clearInterval(timer);

document
.getElementById("countdownPage")
.classList.add("hidden");

document
.getElementById("finalPage")
.classList.remove("hidden");

}

},1000);

}
