
let array = new Array('2.jpg', '3.jpg', '4.jpg');

document.write("<div> </div>");
let bord = document.querySelector("div");
bord.style.textAlign="center";
bord.style.border="1px solid black";

bord.insertAdjacentHTML("afterbegin", "<img id='sl0' src='" + array[0] + "'> ");
bord.insertAdjacentHTML("beforeend", "<img id='sl1' src='" + array[1] + "'> ");
bord.insertAdjacentHTML("beforeend", "<img id='sl2' src='" + array[2] + "'> ");
bord.insertAdjacentHTML("beforeend", '<p> <label for="firstIn"> ПОМЕНЯТЬ </label> <input type="text" id="firstIn" value="1" maxLength="1"> <label for="secondIn"> НА </label> <input type="text" id="secondIn" value="2" maxLength="1"></p>');
bord.insertAdjacentHTML("beforeend", "<input type='button' id='res' value='ПОМЕНЯТЬ' >");

let sl0 = bord.querySelector('#sl0');
sl0.style.margin='30px 30px';
let sl1 = bord.querySelector('#sl1');
sl1.style.margin='30px 30px';
let sl2 = bord.querySelector('#sl2');
sl2.style.margin='30px 30px';

let arrName = [sl0, sl1, sl2];

let p = bord.querySelector('p');
p.style.marginTop='100px';

let button = bord.querySelector('#res');
button.style.margin="50px auto";
button.style.width='200pt';
button.style.fontSize='18pt';
button.style.fontWeight='bold';

button.addEventListener('click', changeImg)

function changeImg(){
    let temp;
    
    let firstIn = p.querySelector('#firstIn').value;
    let secondIn = p.querySelector('#secondIn').value;
    if((firstIn > 0) && (firstIn <= 3) && (secondIn >= 0) && (firstIn <= 3)){
        temp = arrName[firstIn - 1].src;
         arrName[firstIn - 1].src = arrName[secondIn - 1].src;
         arrName[secondIn - 1].src = temp;
    }
    else {
      alert("Вы ввели не корректное значение!!!");  
    }
}

