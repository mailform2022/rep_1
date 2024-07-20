document.write('<h1 id="clock">Часы на JavaScript</h1>');
let h1 = document.querySelector("#clock");
h1.style.textAlign = "center";
h1.style.fontSize = "24pt";
h1.style.fontStyle = "italic";
h1.style.fontWeight = "bold";
h1.style.color = "blue";

//---------------------------------------------------------------

document.write('<div id="div"></div>');
let div = document.querySelector("#div");
div.style.textAlign="center";


let t = setInterval((() => currentTime()), 1000);

function currentTime(){
    
    div.innerHTML = liveTime();
}



let flag, dot;

function liveTime() {

    let img = ['<img src="c0.gif">', '<img src="c1.gif">', '<img src="c2.gif">', '<img src="c3.gif">', '<img src="c4.gif">', '<img src="c5.gif">', '<img src="c6.gif">', '<img src="c7.gif">', '<img src="c8.gif">','<img src="c9.gif">'];

let d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let sec = d.getSeconds();

 if(hours < 10){
    hours = "0" + hours;
 }
 if(minutes < 10){
    minutes = "0" + minutes;
 }
 if(sec < 10){
    sec = "0" + sec;
 }
if(!flag){
dot = '<img src="dv.png" id="dot2">';
}
else {
    dot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
}
flag = !flag;
 
 return (img[hours.toString()[0]] + img[hours.toString()[1]] + dot + img[minutes.toString()[0]] + img[minutes.toString()[1]]  + dot + img[sec.toString()[0]] + img[sec.toString()[1]]);
}