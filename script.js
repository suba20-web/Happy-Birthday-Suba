// START SONG

window.onload = () => {
document.getElementById("happySong").play();
};

// PAGE SWITCHER

function hideAllPages(){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

}

function showPage(id){

hideAllPages();

document
.getElementById(id)
.classList.add("active");

window.scrollTo(0,0);

}

// DOB CHECK

function checkDOB(){

let day =
document.getElementById("day").value;

let month =
document.getElementById("month").value
.toLowerCase();

let year =
document.getElementById("year").value;

if(
day=="20" &&
month=="june" &&
year=="2006"
){

document
.getElementById("happySong")
.pause();

document
.getElementById("velichaPoove")
.play();

showPage("welcomePage");

}else{

document
.getElementById("dobError")
.innerHTML =
"❌ Oops! Try Again";

}

}

// WELCOME

function showNameQuestion(){

document
.getElementById("velichaPoove")
.pause();

showPage("nameQuestion");

}

// BIRTHDAY QUEEN

function checkName(){

let name =
document
.getElementById("nameInput")
.value
.toLowerCase();

if(name.includes("suba")){

document
.getElementById("omanaPenne")
.play();

showPage("birthdayQueen");

}else{

alert("Wrong Answer 💜");

}

}

// DAD

function showDadQuestion(){

document
.getElementById("omanaPenne")
.pause();

showPage("dadQuestion");

}

function checkDad(){

let answer =
document
.getElementById("dadInput")
.value
.toLowerCase();

if(
answer.includes("appa") ||
answer.includes("dad")
){

document
.getElementById("aarariraro")
.play();

showPage("dadPage");

}else{

alert("Try Again 💙");

}

}

// MOM

function showMomQuestion(){

document
.getElementById("aarariraro")
.pause();

showPage("momQuestion");

}

function checkMom(){

let answer =
document
.getElementById("momInput")
.value
.toLowerCase();

if(
answer.includes("amma")
){

document
.getElementById("ammaSong")
.play();

showPage("momPage");

}else{

alert("Try Again 💜");

}

}

// SISTER

function showSisterQuestion(){

document
.getElementById("ammaSong")
.pause();

showPage("sisterQuestion");

}

function checkSister(){

let answer =
document
.getElementById("sisterInput")
.value
.toLowerCase();

if(
answer.includes("lalluu") ||
answer.includes("lalitha")
){

document
.getElementById("aazhi")
.play();

showPage("sisterPage");

}else{

alert("Try Again 👭");

}

}

// BESTIE

function showBestieQuestion(){

document
.getElementById("aazhi")
.pause();

showPage("bestieQuestion");

}

function checkBestie(){

let answer =
document
.getElementById("bestieInput")
.value
.toLowerCase();

if(
answer.includes("ammu")
){

document
.getElementById("thooriga")
.play();

showPage("bestiePage");

}else{

alert("Wrong Answer 💜");

}

}

// FRIENDS

function showFriendsPage(){

showPage("friendsPage");

document
.getElementById("adiye")
.play();

}

// TIMELINE

function showTimeline(){

document
.getElementById("adiye")
.pause();

document
.getElementById("munbevaa")
.play();

showPage("timelinePage");

}

// LETTER

function showLetter(){

document
.getElementById("munbevaa")
.pause();

document
.getElementById("kaathalae")
.play();

showPage("letterPage");

}

// COUNTDOWN

function showCountdown(){

document
.getElementById("kaathalae")
.pause();

showPage("countdownPage");

let count = 5;

let timer = setInterval(()=>{

document
.getElementById("countNumber")
.innerHTML = count;

count--;

if(count < 0){

clearInterval(timer);

showCelebration();

}

},1000);

}

// CELEBRATION

function showCelebration(){

document
.getElementById("thooriga")
.play();

showPage("celebrationPage");

}

// CAKE

function showCake(){

showPage("cakePage");

}

function cutCake(){

let cake =
document.getElementById("cake");

cake.style.transform =
"rotate(-10deg) scale(.8)";

cake.style.opacity = ".6";

setTimeout(()=>{

showPage("ratingPage");

},1500);

}

// FINAL PAGE

function showFinalPage(){

showPage("finalPage");

}

// CONFETTI EFFECT

setInterval(()=>{

let heart =
document.createElement("div");

heart.innerHTML = "💜";

heart.style.position = "fixed";

heart.style.left =
Math.random()*100+"vw";

heart.style.top = "-20px";

heart.style.fontSize =
(20+Math.random()*40)+"px";

heart.style.zIndex = "999";

document.body.appendChild(heart);

let move = setInterval(()=>{

heart.style.top =
heart.offsetTop+5+"px";

if(heart.offsetTop > window.innerHeight){

heart.remove();

clearInterval(move);

}

},20);

},700);
