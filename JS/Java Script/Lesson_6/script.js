let p = document.querySelector("p");
p.style.textAlign="center";
p.style.fontSize = "18pt";
p.style.color = "blue";
p.style.fontStyle = "italic";
p.style.fontWeight = "bold";


//-------------------------------------------------------------------

let inp = prompt("Введите известное вам свойство .CSS", "text-align"); 

alert("В JavaScript свойство пишется так: " + ((inp.length != 0) ? converter(inp) : "Введенное свойство не корректно!"));



function converter(word){
    let a = word.split("-");
    let b = "";
    let c = "";
  
        b = a[0].toLowerCase();

    for(let i=1; i<a.length; i++){

            c = a[i][0].toUpperCase(); 

        for(let j=1; j<a[i].length; j++){
            
            c += a[i][j].toLowerCase();
            
        }
            b += c;
      //      console.log(b);
    }
      
    return b; 
}