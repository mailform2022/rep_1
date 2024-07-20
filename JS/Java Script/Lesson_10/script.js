let radio = document.form.radio;


let answ = document.querySelector('input[type="button"]');

answ.addEventListener('click', showAnswer)

function showAnswer(){
    if(radio.value != ""){
     alert(radio.value);   
    }
    else alert("Выберите загадку!")
}
//console.log(answ);