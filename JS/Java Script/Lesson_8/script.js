let array = new Array('2.jpg', '3.jpg', '4.jpg');

document.write("<input type='button' name='left' value='<' >");

document.write("<img id='sl' src='" + array[0] + "'> ");

document.write("<input type='button' name='right' value='>' >");

document.getElementsByName("right")[0].addEventListener('click', clickRight);
document.getElementsByName("left")[0].addEventListener('click', clickLeft);

let image = document.getElementById('sl');
let i = 0;

function clickRight(){
    i++;
    if(i == array.length){
        i=0;
    }
    image.src = array[i];

}

function clickLeft(){
    i--;
    if(i<0){
        i = (array.length - 1);
    }
    image.src = array[i]
}