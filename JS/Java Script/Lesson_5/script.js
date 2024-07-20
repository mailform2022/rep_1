let p = document.querySelector("p");
p.style.fontSize = "24px";
p.style.fontStyle = "italic";
p.style.fontWeight = "bold";
p.style.color = "blue";
p.style.textAlign = "center";


//----------------------------------------------------------------------


let month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль",
"август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
let a, b, c;


divGenerator(month);




//---------------------------------------------------------------------


function divGenerator(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("<div Class='raduga'> </div>");
        }
        let div = document.querySelectorAll(".raduga");
        //div.style.border =  "5px solid black";
        div[i].innerHTML = arr[i];
        div[i].style.backgroundColor = `rgb(${colors()}, ${colors()}, ${colors()})`;
        div[i].style.textAlign = "center";
    }


//rgb(red, green, blue)
//console.log();

function colors(){
    
    return Math.floor(Math.random() * 255);
}
}