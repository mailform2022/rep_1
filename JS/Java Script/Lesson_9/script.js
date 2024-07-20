document.write("<div>");
document.write('<a href="#" id="link" class="s">Показать/Спрятать</a>');
document.write("<img src='bird.jpeg' id='bird'>");
document.write("</div>");

let b = document.querySelector('#bird');
b.style.display='block';
b.style.margin='0 auto';
b.style.paddingTop='20px';
//b.style.textAlign='center';

let a = document.querySelector('#link');
a.style.display='block';
a.style.textAlign='center';
a.style.paddingTop='50px';

let flag;
a.addEventListener('click', hideImg)

function hideImg(){

    if(!flag){
    b.style.visibility='hidden';
    }
    else{
        b.style.visibility='visible';
    }
    flag = !flag;
}