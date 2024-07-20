"use strict";
// let message;
// message = "Hello, world!";

// console.log(message);

/* let a = 10;
console.log(a);

let c = 2, b = 3;

let camelCase1$ = "";
let snake_case = '';

const week = 7;
week = 9;
console.log(week); */

// let a = 10;
// console.log(a);
// a = 5;
// console.log(a);
// a = "Hello";
// console.log(a);

// let str1 = "Двойные \
// кавычки ${3 + 2}";
// let str2 = 'Одинарные \
// кавычки ${3 + 2}';
// let str3 = `Обратные 
// кавычки. ${3 + 2}. 
// ${str1}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let firstName = "Sergey";

// alert(`Hello, ${firstName}`);

// let days = 365

// let planet = "Земля"

// let peoples = "7 млрд."

// let sun = "Солнца"




// alert(`Мы живем на планете ${planet}, она делает один оборот вокруг ${sun} за ${days} дней. Население нашей планеты составляет примерно ${peoples} человек.`)

// let quations = confirm("Знаете ли вы HTML?");
// true false
// console.log(quations);
// if(quations){
//     alert("Пора учить JavaScript");
// }
// else{
//     alert("Нужно выучить!")
// }

// let res = prompt("Ваше имя?", "Алексей");
// console.log(res);
// Введенное значение null

/* Типы данных:
number - любое число (целое или вещественное)
string - строка
boolean - булево (логическое значение)
undefined - неопределенный
null 

Object
*/

// let res = null;
// console.log(res);
// console.log(typeof(res));

// let a = '4';
// let b = '3';
// console.log('+:', a+b);
// console.log('-:', a-b);
// console.log('*:', a*b);
// console.log('*:', a/b);
// console.log('%:', a%b);
// console.log('**:', a**b);

// let a = parseInt(prompt("Введите первое число:"));
// let b = +prompt("Введите второе число:");
// // a = parseInt(a);
// // b = +b;
// console.log(typeof a);
// console.log(typeof b);
// let res = a + b;
// console.log(res);
// console.log(typeof res);


// console.log("21.84");
// console.log(Number("21.84"));
// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84"));
// console.log(parseFloat("21.847894513").toFixed(3));
// console.log(+"21.84");
// console.log(+true);
// console.log(+false);

// let login = prompt("Введите логин", "admin");
// let password = prompt("Введите пароль", '123456');
// alert("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль: " + password);

// let str = "\t\tИнструкция:\nДокумент \"script.js\" файлы лежат в папке D:\\projects\\script.js";
// alert(str);

// a = prompt('Введите число:')

// b = a**2

// c = a**3

// d = a**4

// alert('Квадрат числа: '+b+'\nКуб числа: '+c+'\n4я степень: '+d)

// let a = 0, b=0;
// ++a;
// console.log(a);
// b++;
// console.log(b);

// let a = 0, b=0;
// let c = a++ + 2;
// let d = ++b + 2;
// console.log("a:", a);  // 1
// console.log("b:", b);  // 1
// console.log("c:", c);  // 2
// console.log("d:", d);  // 3

// let a = 1;
// let b = a++;
// let c = b + 5 + a;  // 1 + 5 + 2
// console.log(c);  // 8

// let a = +prompt("Введите 1 число: ", 5);
// let b = +prompt("Введите 2 число: ", 6);
// let c = +prompt("Введите 3 число: ", 7);
// let sum = a + b + c;
// alert("Сумма чисел: " + sum);

// let sum = +prompt("Введите 1 число: ", 5);
// sum += +prompt("Введите 2 число: ", 6);  // sum = sum + 6
// sum += +prompt("Введите 3 число: ", 7);  // sum = sum + 7
// // let sum = a + b + c;
// alert("Сумма чисел: " + sum);

// console.log(5 > 3);
// console.log(7 < 7);
// console.log(7 <= 7);
// console.log(7 >= 7);
// console.log(7 == 6);
// console.log(7 != 6);
// console.log(7 != '7');
// // console.log(7 === '7');
// console.log(7 !== '7');

// 7 < 3 ? alert("7") : alert("3")

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// ch == num ? alert("Угадали!") : alert("Не угадали");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// ch == num ? alert("Угадали!") : (ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше"));

/* if (условие){
    блок истины
}
else{
    блок ложь
} */

// let a = 12;
// let b = 16;
// if(a > b){
//     alert(a + " > " + b);
// }
// else{
//     alert(a + " < " + b);
// }

// False - 0, False, '', null

// res = 0; 
// console.log(Boolean(res));

// if("h"){alert("TRUE");}
// else{
// alert("FALSE");
// }

// let a = 10;
// let b = 12;
// if(a > b){
//     alert(a + " > " + b);
// }
// if(a < b){
//     alert(a + " < " + b);
// }
// if(a == b){
//     alert(a + " == " + b);
// }

// let a = 12;
// let b = 12;
// if(a > b){
//     alert(a + " > " + b);
// }
// else if(a < b){
//     alert(a + " < " + b);
// }
// else{
//     alert(a + " == " + b);
// }

// let d = prompt("Введите день недели цифрами: ");
// if(d == 1){
//     alert("День недели - понедельник");
// }


// let d = +prompt("Введите день недели цифрами:");

// if(d == 1){

//     alert("День недели - понедельник")

// }

// else if(d==2){

//     alert("День недели - вторник")

// }

// else if(d==3){

//     alert("День недели - среда")

// }

// else if(d==4){

//     alert("День недели - четверг")

// }

// else if(d==5){

//     alert("День недели - пятница")

// }

// else if(d==6){

//     alert("День недели - суббота")

// }

// else if(d==7){

//     alert("День недели - воскресенье")

// }

// else{

//     alert("Такого дня недели не существует")

// }



// let d = prompt("Введите день недели цифрами: ")

// if (d == 1){

//     alert ("День недели - понедельник")

// }

// if (d == 2){

//     alert ("День недели - вторник")

// }

// if (d == 3){

//     alert ("День недели - среда")

// }

// if (d == 4){

//     alert ("День недели - четверг")

// }

// if (d == 5){

//     alert ("День недели - пятница")

// }

// if (d == 6){

//     alert ("День недели - суббота")

// }

// if (d == 7){

//     alert ("День недели - воскресенье")

// }

// if (d>7) {

//     alert ("Такого дня недели не существует")

// }
// let pas = null;
// let login = prompt("Введите логин: ", 'admin');

// if (login) {
//     if (login == 'admin') { 

//         let pas = prompt("Введите пароль: ");
//         if (pas) {
//             if (pas == 'password') {
//                 alert("Добро пожаловать")
//             }
//             else {
//                 alert("Пароль неверен");
//             }
//         }
//         else {
//             alert("Вход отменен");
//         }
//     }
//     else {
//         alert("Я вас не знаю");
//     }
// }
// else {
//     alert("Вход отменен");
// }

// let login = prompt("Введите логин:", 'admin')

// if (login == 'admin') {

//     // alert("Введите пароль: ")

//     let pass = prompt("Введите пароль:", 'password')

//     if (pass == 'password') {

//         alert("Добро пожаловать")

//     }

//     else if (pass != 'password') {

//         alert("Пароль неверен")

//     }

//     else {

//         alert("Вход отменен")

//     }

// }

// else if (login != 'admin') {

//     alert("Я вас не знаю")

// }

// else {

//     alert("Вход отменен")

// }


// if(5 == 7 || 5 > 7){
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// console.log(!!"строка");
// console.log(Boolean("строка"));

// let age = prompt("Введите возраст: ");
// if(age >= 18 && age < 70){  //  ||
//     alert("Вы можете получить права");
// }
// else{
//     alert("Правва не давать")
// }

// let age = prompt("Введите свой возраст");

// if(age < 18 || age > 69){
//     alert("Права не давать");
// }
// else{ 
//     alert("Вы можете получить права");
// }

/* 
switch(условие){
    case значение:
        код;
    break;
    default:
        код;
}
*/

// let a = +prompt("Введите результат 2 + 2: ");  // 1 === 1
// switch (a) {

//     // case 3:{
//     //     alert("Не верно");
//     //     }break;
//     case 4:
//         alert("Верно");
//         break;
//     case 3:
//     case 5:
//         alert("Не верно");
//         break; 
//     default:
//         alert('Я таких значений не знаю');         
// }


// let m = +prompt("Введите номер месяца");
// let n="Неправильный номер месяца";  // undefined
// switch(m){
//     case 1: n="Январь"; break;
//     case 2: n="Февраль"; break;

//     // default: n;
// }
// alert("Вы ввели: " + n);

// document.write("<h6 style='color: red'>Текст выведен<br> в окно браузера</h6>");
// document.write("<p style='text-align: center'><img src='1.jpg'></p>");

// Цикл - конструкция повторения

/* 
do{
    тело цикла
}while(условие);
*/

// let i=0; // переменная счетчик
// do{
//     document.write("Это номер: " + i + "<br>");
//     i=i+5;  // шаг цикла
// }while(i<5);  // условие выхода из цикла

// Итерация - один шаг цикла


// Написать цикл для ввода квадрата всех чисел от 1 до 7

// let i=1;
// do{
//     document.write("Квадрат "+  i +" равен " + i ** 2 + "<br>");
//     i++;
// }while(i<=7);

// Цикл while
/* 
while(условие){
    тело цикла;
}
*/

// let i=0;
// while(i<5){
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }

// Написать программу, выводящую только четные числа из диапазона от 1 до 20

// let i=1;

// while(i<=20){
//     if(i%2 != 0){  //   i % 2 
//         document.write(i +"<br>");
//     }
//     i++;  // 2 
// }

// Написать программу, выводящую на экран целые числа от 1 до 30, за исключением чисел кратных трем

// let i = 1

// while (i<=30){
//     if(i%3){
//         document.write(i + " ")
//     }
//     i++    
// }

//Написать программу, вычисляющую сумму чисел в заданном диапазоне
// (Например: 5 и 10. Результат: 5+6+7+8+9+10=45)

// let start = 5;
// let end = 10;

// let sum = 0;
// document.write("Переменная: "+sum+'<br>');  

// while(start <= end){
//     document.write(start + " ");  
//     sum += start;  // sum = sum + start
//     start++;
// }
// document.write("<br>Сумма: "+sum);  

// let i=3;
// while(i){  // i>0  // i!=0
//     document.write("Это номер: " + i + "<br>");
//     i--;
// }

// False - 0, False, '', null
// let a, sum=0;
// do {
//     a = +prompt("Введите число", 10);
//     if (a < 0) {
//         break;
//     }
//     sum += a;
// } while (true);

// alert(sum);

// let i = 0;
// do{
//     if(i==3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");    
//     i++;
// }while(i<10);
// document.write("<br>Цикл окончен");

// for (цикл с заданным количеством итераций)
/* 
for(инициализация_переменной; условие; изменение_переменной){
    тело цикла
}
*/

// let i=0;
// while(i<5){
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }
// document.write("<br>");

// for(let i=0; i<5; i++){
//     if(i==2){
//         continue;
//     }
//     if(i == 4){
//         break;
//     }
//     document.write("Это номер: " + i + "<br>");
// }

// Вычислить сумму четных чисел и произведение нечетных чисел в заданном диапазоне

// let sum = 0;

// let mul = 1;


// for (let i = 5; i <= 10; i++) {
//     sum += i;
//     mul *= i;
// } 
// document.write("Сумма чисел: " + sum + "<br>" + "Произведение чисел: " + mul + "<br>");

// let sum1 = 0;
// let sum2 = 1;

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         sum1 = sum1 + i;        
//     }
//     else{
//         sum2= sum2 * i
//     }
// }

// document.write(sum1 + "<br>" +sum2);
// let i=0;
// for(;;){
//     if(i == 5){
//         break;
//     }
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }
// document.write("<br>" + i);

// for(let i=0; i<4; i++){
//     document.write("+++"+ i +" <br>");
//     for(let j=0; j<2; j++){
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--"+ j +"<br>");        
//     }
// }
// let symbol = prompt("Символ");
// document.write("<table border='1'>");
// document.write("<tr>");
// for(let i=0; i<11; i++){
//     document.write("<td>" + i + "</td>");    
// }
// document.write("</tr>");
// for(let i=1; i<11; i++){  // 2
//     document.write("<tr>");
//         document.write("<td>"+i+"</td>");

//     for(let j=1; j<11; j++){  // 1
//         if((i+j)%2==0){
//             document.write("<td bgcolor='red'>"+ i*j +"</td>");     
//         }
//         else{
//             document.write("<td bgcolor='yellow'>"+ i*j +"</td>");  
//         }         
//     }
//     document.write("</tr>");    
// }
// document.write("</table>");


// Массивы

// let arr1 = [2,6,8];
// console.log(arr1);
// console.log(arr1[0]);

// let arr2 = new Array(2,6,8);
// console.log(arr2);
// console.log(arr1[0]);

// let arr3 = new Array(5); // массив на 5 элементов, но пустой 

// let arr4 = [5];  // массив на 1 элемент со значением 5

// console.log(arr3);
// console.log(arr4);

// console.log(arr1.length);

// let arr1 = [2,6,8];
// console.log(arr1);
// console.log(arr1.length);

// length = последний индекс массива + 1

// let f = [1,2,3,4,5,6];
// document.write(f + "<br>");
// document.write(f.length + "<br>");
// f.length = 3;
// document.write(f + "<br>");
// f.length = 6;
// document.write(f + "<br>");
// f.length = 0;
// document.write("Пустой список:"+ f + "<br>");

// let arr = [5,9,-3,-1,4,-8,7,2,-6, 2, 7, 8];
// // document.write(arr**2 + "<br>");
// for(let i=0; i < arr.length; i++){
//     document.write(arr[i] + "<br>");    
// }

// console.log(arr);
// console.table(arr);

// // Заменить все отрицательные значения элементов массива их модулями
// console.log((-3) * (-1));

// let arr = [5,9,-3,-1,4,-8,7,2,-6,5,3,8,6,7];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]<0){
//         arr[i] = arr[i]*(-1);
//     }
//     document.write(arr[i] + "<br>");    
// }

// let arr = [1, -2, 3, -4, 5, -6, 7];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         document.write((arr[i] * -1) + '<br>');
//         continue;
//     }
//     document.write(arr[i] + '<br>');
// }

// Посчитать в массиве сумму всех отрицательных элементов
// let arr = [5,9,-3,-1,4,-8,7,2,-6,5,3,8,6,7];
// let sum=0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]<0){
//         sum += arr[i];
//     }
// }
// document.write(sum);    

// let myArray = new Array();
// myArray[0] = 15;
// myArray[1] = 6;
// myArray[2] = 8;
// myArray[10] = 5;
// myArray[12] = 9;
// console.log(myArray);
// document.write(myArray);

// Написать программу, которая позволяет заполнить массив с клавиатуры и вывести его в обратном порядке

// let mas = new Array(5);
// for(let i=0; i<mas.length; i++){
//     mas[i]=prompt("Введите " + (i+1) + " элемент массива: ");
// }
// document.write(mas+"<br>");
// for(let i=mas.length - 1; i>=0; i--){
//     document.write(mas[i] + " ");    
// }

// let arr = [2,6,7,"Игорь", 1.5]
// let sum=1;
// for(let i = 0; i < arr.length; i++){
//     sum *= arr[i];
// }
// document.write(sum);  

// let arr = [[2,1,1,5,6],[6,3,7],[8,5,6,8]];
// // console.log(arr[0]);
// // console.log(arr.length);
// console.table(arr)
// document.write(arr[1][2]);


// let vopros = ["На ноль делить можно?", "Волга впадает в Каспийское море", "Атмосферное давление увеличивается с высотой", "2x2 будет 8",
// "Дельфин - это рыба", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];

// let prav_otvet = [false, true, false, false, false, false, false];
// let sum = 0;
// let res = new Array();

// for(let i=0; i<vopros.length; i++){
//     let otvet = confirm(vopros[i]);
//     if(otvet == prav_otvet[i]){
//         res[i] = 10;
//         sum += res[i];
//     }
//     else{
//         res[i] = 0;
//     }    
// }
// // console.log(res);
// // console.log(sum);
// document.write("<table border='1' width='500'>");
//     document.write("<tr>");
//         document.write("<th>Вопрос</th>");
//         document.write("<th>Баллы</th>");
//     document.write("</tr>");

//     for(let i=0; i<vopros.length; i++){
//         document.write("<tr>");
//             document.write("<td>" + vopros[i] + "</td>");
//             document.write("<td>" + res[i] + "</td>");
//         document.write("</tr>");
//     }

//     document.write("<tr>");
//         document.write("<th>Итого</th>");
//         document.write("<th>"+ sum +"</th>");
//     document.write("</tr>");

// document.write("</table>");


// let text1 = document.getElementById("text_1");
// // console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое с <b>html разметкой</b>";

// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое содержимое с <b>html разметкой</b>"

// let res = prompt("Выберите изображение:", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.write("<div id='image'></div>");
// let img = document.getElementById("image");

// img.innerHTML = "<img src='img/cat.jpg'>";

// let res = +prompt("Выберите изображение:", "1-птица, 2-кот, 3-собака, 4-рыба")

// document.write("<div id='image'></div>")
// let img = document.getElementById("image")
// // img.innerHTML="img src='img/cat.jpg'"
// switch(res){
//     case 1:
//         img.innerHTML="<img src='img/bird.jpeg'>"
//         break;
//     case 2:
//         img.innerHTML="<img src='img/cat.jpg'>"
//         break;
//     case 3:
//         img.innerHTML="<img src='img/dog.jpg'>"
//         break;
//     case 4:
//         img.innerHTML="<img src='img/fish.jpeg'>"
//         break;
//     default:
//         alert("Такого изображения нет")
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello tag";
// tag.style.color = "blue";
// tag.style.border = "1px solid orange";
// tag.style.padding = "10px 20px";
// tag.style.fontWeight = "bold";

// // font-weight => fontWeight
// // list-style-type => listStyleType

// tag.id = 'test';
// tag.className = 'x';

// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = "red";

// document.querySelectorAll(css)
// document.querySelector(css)

// let el = document.querySelectorAll("h2");
// console.log(el[1]);

// let lists = document.querySelectorAll('li');
// // console.log(lists.length);  // 6

// for(let i=0; i < lists.length; i++){
//     lists[i].innerHTML += "!!!";
// }

// // let purple = document.querySelectorAll('.purple li');
// let purple = document.getElementsByClassName('purple')[0].getElementsByTagName('li');
// for(let i=0; i < purple.length; i++){
//     purple[i].style.color = "purple";
// }

// let h2 = document.querySelector("ul + h2");
// h2.style.color = "purple";

// let red = document.querySelectorAll("#one");
// red[0].style.color = "red";

// let js = ['нужно', 'учить', 'JavaScript'];
// document.write(js + "<br>");

// document.write(js.pop() + "<br>");  // удаляет последний элемент из массива и возваращает удаляемый элемент
// document.write(js + "<br>"); 

// js.push("JavaScript", "!");  // добавляет элемент в конец массива
// document.write(js + "<br>"); 

// document.write(js.shift() + "<br>"); // удаляет первый элемент из массива и возваращает удаляемый элемент
// document.write(js + "<br>"); 

// js.unshift("Почему", "нужно");  // добавляет элемент в начало массива
// document.write(js + "<br>"); 

// let arr = js.slice(1,3);  // копирует участок массива от первого заданного значения до второго (не включая его)
// document.write("<br>" + arr + "<br>"); 
// document.write(js.slice(1) + "<br>");  // если второй параметр не указан, то копирование будет до конца массива

// document.write(js + "<br>"); 
// // js.splice(1, 2);  // удаляет из массива заданное количество элементов (второй параметр), начиная с заданного индекса (первый параметр)
// js.splice(0, 2, "Мы", 'изучаем');  // третий параметр и далее - добавляемые элементы
// document.write(js + "<br>"); 

// js.splice(-3, 1, "но", "очень", "интересный"); //поддерживаются отрицательные индексы
// document.write(js + "<br>"); 
// console.log(js);

// let str = js.join(" & ");  // объединяет все элементы массива в строку
// console.log(str);

// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for(let i=0; i<fio.length; i++){
//     fio[i] = prompt("Введите данные:\n" + st[i]);
// }

// alert(fio.join(" "));



// Функции

// Fuction Declaration

/* 
function имя(аргументы){
    тело функции;
}
*/


// function hello(name){
//     document.write("Hello ", name, "<br>");    
// }

// hello("Irina");
// hello("Igor");

// function test(a,b,c){
//     let res = c + b + a;
//     return res;
// }

// let n1 = 1, n2 = 2, n3 = 3, m1=3, m2=5, m3=7; 
// // let q = test(m1, m2, m3);
// // test(10, 20, 30);
// // test(n1, n2, n3);
// alert("Возвращаемое значение: " + test(m1, m2, m3));
// console.log(a);

// function test2(n, m){
//     if(m==0){
//         alert("Hello");
//         return "На 0 делить нельзя" ;
//     }
//     else{
//         return n / m;
//     }
// }

// let a1 = test2(10, 0);
// alert(a1);
// let a2 = test2(10, 2);
// alert(a2);


// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     }
//     else{
//         let last = arrayToShow.pop();
//         let str = arrayToShow.join(", ")
//         let res = str + " и " + last;
//         return res;
//     }
// }


// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');
// alert(showArrayContent(a)); // Выводим содержимое массивов,
// alert(showArrayContent(b)); // используя созданную выше функцию.
// alert(showArrayContent(c));

// Function Expression

/* 
let func = function(аргументы){
    тело функции
}
*/
// alert(test(2,3));

// function test(a, b){
//     return a+b;
// }



// let test2 = function(a, b){
//     return a+b;
// }
// alert(test2(2,4));

// Immediately Invoked Function Expression (IIFE) - анонимная (самовызывающаяся функция)

// (function(){
//     alert("Hello");
// })();

// (function(n){
//     alert(n*n);
// })(4);

// (function(n){
//     alert(n*n);
// })(5);

// Arrow Function - стрелочная функция

// function test(a, b){
//     return a+b;
// }

// alert(test(2,3));

// let test2 = (a, b) => a+b;
// alert(test2(2,4));

// let hello = n => alert("Hello " + n);

// hello("Irina")

// let test2 = (a, b) => {
//     let res = a+b;
//     return res;
// }

// alert(test2(2,4));

// Объект Math

// document.write(Math.floor(7.9) +"<br>");  // округление вниз
// document.write(Math.ceil(7.2) +"<br>");  // округление вверх
// document.write(Math.round(7.5) +"<br>");  // округление по законам математики

// (function(){
//     document.write(Math.random() + "<br>");   // от 0 до 1 
// }());


// (function(min, max){
//     document.write(Math.floor(Math.random()*(max-min)+min) + "<br>");   // от 0 до 1 
// }(2, 9));

// document.write(Math.floor(Math.random() * 9) + "<br>");  // от 0 до 9

// document.write(Math.floor(Math.random()*7+2) + "<br>");  // от 2 до 9

// // от 7 до 16
// document.write(Math.floor(Math.random()*9+7) + "<br>");
// let func = function(arr){
//     return arr[Math.floor(Math.random()*arr.length)]
// }


// let rand = ["Цикл", "Массив", "Условие", "Функция"];
// let word = func(rand);
// document.write(word);


// let month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

// for(let i=0;i<month.length;i++){
//     document.write("<div>"+ month[i] +"</div>");
//     let m = document.querySelectorAll("div")[i];
//     m.style.textAlign='center';
//     m.style.background='rgb('+randomBg()+','+randomBg()+','+randomBg()+')';
// }

// function randomBg(){
//     return Math.floor(Math.random()*256);
// }

// function ch(){
//     let j = 2;
//     let x = j*j;
//     return x
// }
// let a = ch();
// console.log(a);  // 4
// console.log(j);  // 2

// for(let i=0;i<5;i++){
//     let i = 5;
// }
// console.log(i);

// function hello(name='незнакомец'){
//     // name = name || 'незнакомец';
//     document.write("Привет, " + name + "!<br>");    
// }
// hello("Сергей");
// hello();

// function rectangle(width=300, height=200, background='red'){
//     document.write("<div id='shape'></div>");
//     let sq = document.getElementById('shape');

//     sq.style.width = width+'px';
//     sq.style.height = height+'px';
//     sq.style.background = background;

// }

// rectangle(200);

// function hello(){
//     alert("Привет");
// }

// alert(hello);

// let str = 'I\'m a Javascript programmer';

// document.write(str + "<br>");
// // document.write(str[0]);
// // document.write(str[1]);
// // document.write(str[2]);
// // document.write(str[4]);
// // str = str[4] + "y";
// document.write(str.length + "<br>");

// let s = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте.";
// counterLetter(s);

// function counterLetter(str){
//     let letter = ['а', 'б', 'в'];
//     for(let i=0; i<letter.length; i++){
//         let count = 0;
//         for(let j=0; j<str.length; j++){
//             if(str[j]==letter[i]){  // 'а' == 'a'
//                 count++; // 2
//             }
//         }
//         document.write("Символ '"+ letter[i] +"' встретился "+ count+" раз<br>");        
//     }
// }
// let n = 'Сергей'
// let s = `Привет, ${n}`;
// document.write(s);

// let str = 'I\'m a Javascript programmer';

// document.write(str + "<br>");
// document.write(str.toLowerCase()+"<br>");
// document.write(str.toUpperCase()+"<br>");

// let n = prompt("Введите имя", "александР");
// alert(showName(n));

// function showName(str){
//     let newStr = str[0].toUpperCase();  // A
//     for(let i=1; i<str.length; i++){ // лександР
//         newStr += str[i].toLowerCase();
//     }
//     return newStr;
// }

// let str = 'I\'m a Javascript programmer. ';

// // document.write(str + "<br>");

// let str1 = "Я учу Javascript. Мне нравится Javascript.";

// str = str.concat(str1);
// document.write(str + "<br>");
// document.write(str.indexOf('Javascript', 7)+"<br>");
// // возвращает позицию (индекс), на которой находится подстрока или -1, если ничего не найдено
// document.write(str.lastIndexOf('Javascript')+"<br>");
// возвращает позицию (индекс), поиск ведется с конца строки

// do{
//     let email = prompt("Введите email:", "email");
//     if(email.indexOf("@")==-1){
//         alert("Введенный email синтаксически некорректный.\nПовторите операцию!")
//     }
//     else{
//         break;
//     }
// }while(true);
// alert("Спасибо за сотрудничество");

// do{
//     let email = prompt("Введите email:", "email");
//     if(email.indexOf("@")==-1){
//         alert("Введенный email синтаксически некорректный.\nПовторите операцию!");
//         continue;
//     }
//     break;
// }while(true);
// alert("Спасибо за сотрудничество");

// let str = 'I\'m a Javascript programmer. ';

// let str1 = "Я учу Javascript. Мне нравится Javascript.";

// str = str.concat(str1);
// document.write(str + "<br>");

// document.write(str.split(".") + "<br>");
// console.log(str.split(".", 2));  // создает массив из строки по заданному символу разделителю

// console.log(str.split("Javascript")); 
// let a = str.split("Javascript");
// document.write(a.join("Python"));

// document.write(str.slice(3, 0)+"<br>");
// // возвращает подстроку с позиции start до end (не включая его)
// // работает с отрицательными индексами

// document.write(str.substring(3, 0)+"<br>");
// возвращает подстроку с позиции start до end (не включая его)
// если start>end, то аргументы меняются местами

// background-color => backgroundColor
// list-style-type => listStyleType

// События

// function loadStr(){
//     alert("Страница загружена!");
// }

// let m = document.getElementById("mes");

// function over(){
//     m.style.color="red";
// }

// function out(){
//     m.style.color="yellow";
// }

// function change(){
//     let id = document.getElementById("id1");
//     id.style.color="blue";
// }

// function randomBg(){
//     let r = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);

//     document.body.style.background=`rgb(${r},${g},${b})`;
// }

// let newImg = document.querySelector("#newimg");
// function on(){
//     newImg.src='night.png';
// }
// function off(){
//     newImg.src='day.png';
// }

// but.onclick = function(){
//     alert("Спасибо!");
// }

// function hello() {
//     alert("Спасибо!");
// }

// but.onclick = hello;

// let el = document.querySelector("#but");

// el.addEventListener("click", function(){
//     el.innerHTML = "Новый текст";
// });

// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// })

// function change(id){
//     id.innerHTML = "Новый текст";
// }

// function setColor(a){
//    document.body.style.background = a.className; 
// }

// document.addEventListener('mousemove', function(e){
//     let c = document.querySelector("#ev");
//     let x = e.clientX;
//     let y = e.clientY;
//     c.textContent = "X = "+x+", Y = " + y;

//     c.addEventListener('dblclick', function(event){
//         event.target.style.background="red"
//     })
// })

// let input = document.querySelector("#ev");

// input.addEventListener("click", handler);

// function handler(){
//     alert("Спасибо");
//     input.removeEventListener("click", handler);
// }

// setTimeout("alert('Текст')", 3000);
// setTimeout("hello()", 3000);
// setTimeout(hello, 3000);

// function hello(){
//     alert('Текст')
// }

// setTimeout(hello, 3000, "Привет", "друг");

// function hello(h, n){
//     alert(h + ", " + n + "!")
// }

// document.write("<div id='dt'>Создание анимированного текста</div>");

// let text = document.querySelector("#dt").innerHTML;  // Создание анимированного текста
// let id = document.querySelector("#dt")  // <div id="dt">Создание анимированного текста</div>
// // console.log(id);
// let i = 0;
// window.addEventListener('load', animText);

// function animText(){
//     id.innerHTML = text.substring(0, i);
//     i++;
//     if(i > text.length){
//         i = 0;
//     }

//     setTimeout(animText, 100);
// }

// let d = new Date();
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>");  // 2023
// document.write(d.getMonth() + "<br>");  // 5, месяцы от 0 до 11
// document.write(d.getDate() + "<br>");  // 28
// document.write(d.getDay() + "<br>");  // 3, 0 - воскресенье, 6 - суббота 

// Сегодня: 28 июня 2023 года, Среда
// let day = ['Воскресенье', 'Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
// let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

// let d = new Date();
// let fullDate = "Сегодня: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() + " года, " + day[d.getDay()];
// document.write(fullDate);


// setInterval(функция, интервал);

// document.write("<input type='button' value='Start/Stop'>");
// document.querySelector('input').addEventListener('click', st);

// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// let run, act;
// function st(){  // true
//     if(!run){  // false => true
//         act = setInterval(setColor, 1000);
//     }
//     else{
//         clearInterval(act);
//     }
//     run=!run; // true
// }
// console.log(run);

// document.write("<div id='text'>Здесь будет отображаться текущее время</div>");
// window.addEventListener('load', () => setInterval(time, 1000));

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(sec<10){
//         sec = "0" + sec;
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = tim;

// }

// let a = document.querySelector("#cl");
// a.addEventListener("click", myMove);

// function myMove(){
//     // a.style.visibility = "hidden";
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 5);

//     function frame(){
//         if (pos == 350){ 
//             a.addEventListener("click", myMove);
//             // a.style.visibility = "visible";
//             clearInterval(id);
//         }
//         else{
//             a.removeEventListener("click", myMove);
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }        
//     }    
// }

// let style = prompt("Введите свойство CSS", "backgroud-color");
// alert(func(style));

// function func(str){
//     let arr = str.split("-");  
//     for(let i=1; i<arr.length; i++){
//         arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
//     }
//     return arr.join("");// arr = 'listStyleType'
// }

// backgroundColor
// listStyleType

// document.image.border = 1;


// document.image.width = 200;
// document.image.height = 50;
// document.write("<br>Ширина изображения: "+document.image.width+"<br>")
// document.write("<br>Высота изображения: "+document.image.height+"<br>")

// document.image.addEventListener('click', changeImage);

// let flag=1;
// function changeImage(){
//     if(flag){
//         document.image.src = 'blue_star.png';
//         flag = 0;
//     }
//     else{
//         document.image.src = 'golden_star.png';
//         flag = 1;
//     }
//     // flag = !flag;
// }

// let array = new Array('2.jpg', '3.jpg', '4.jpg');
// document.write("<input type='button' name='left' value='<' >");
// document.write("<img id='sl' src='" + array[0] + "'>");
// document.write("<input type='button' name='right' value='>' >");

// document.getElementsByName('right')[0].addEventListener('click', clickRight);
// document.getElementsByName('left')[0].addEventListener('click', clickLeft);
// // document.left.addEventListener('click', clickLeft);

// let image = document.getElementById('sl');
// let i = 0;

// function clickRight(){
//     i++;
//     if(i == array.length){
//         i=0;
//     }
//     image.src = array[i];
// }
// function clickLeft(){
//     i--;
//     if(i<0){
//         i=array.length-1;
//     }
//     image.src = array[i];
// }

// alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);

// let myTitle = document.querySelector("h1").innerHTML;
// console.log(myTitle);
// // let myTitle1 = document.querySelector("p").firstChild.nodeValue;
// let myTitle1 = document.querySelector("p").childNodes[0].nodeValue;
// console.log(myTitle1);

// document.querySelector("p").innerHTML = document.querySelector("h1").innerHTML;

// let h = document.querySelector(".one");
// if(h.nodeName=="DIV"){
//     h.innerHTML = "Hello new tag";
// }

// let myTitle = document.querySelector("h1");
// alert(myTitle.nodeType);
// console.log(myTitle);

// let elem = document.querySelector("#root");

// let tag = document.createElement("p");  // <p></p>
// let node = document.createTextNode("Новый текст!!!")  // 'Новый текст!!!'
// tag.append(node); // <p>Новый текст!!!</p>

// elem.append(tag);  // добавляет новый элемент последним дочерним элементом внутри родительского
// elem.prepend(tag);  // добавляет новый элемент первым дочерним элементом внутри родительского
// elem.before(tag);  // добавили новый элемент до выбранного id
// elem.after(tag); // добавили новый элемент после выбранного id

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");  // <li></li>
// newItem.innerHTML = "Новый элемент списка";  // <li>Новый элемент списка</li>

// list.append(newItem);
// let i = 1;
// document.querySelector("#func2").addEventListener('click', add);
// document.querySelector("#func1").addEventListener('click', change);

// function add(){
//    let elem = document.createElement("li");
//    elem.innerHTML = "Water" + i;
//    document.querySelector("#list2").append(elem);
//    i++; 
// }


// function change(){
//     let elem = document.querySelector("#list2").lastChild;
//     document.querySelector("#list1").append(elem);
// }

// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin', '<p>До выбранного элемента</p>');
// div.insertAdjacentHTML('afterend', '<p>После выбранного элемента</p>')
// div.insertAdjacentHTML('afterbegin', '<p>Первым внутри выбранного элемента</p>')
// div.insertAdjacentHTML('beforeend', '<p>Последним внутри выбранного элемента</p>')

// let child = document.querySelector('#p1');
// // child.remove();
// let second = document.querySelector('#p2');

// second.after(child);

// let t = document.querySelectorAll("#clock img");
// console.log(t.length);
// let imgTime = ["c0.gif","c1.gif","c2.gif","c3.gif","c4.gif","c5.gif","c6.gif","c7.gif","c8.gif","c9.gif"];
// clock();

// function clock(){
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     getImage(hours, min, second);
//     setTimeout("clock()", 1000);
// }

// function getImage(h, m, s){  // 14     :44:12
//     t[0].src = imgTime[Math.floor(h/10)];
//     t[1].src = imgTime[h%10];

//     t[3].src = imgTime[Math.floor(m/10)];
//     t[4].src = imgTime[m%10];

//     t[6].src = imgTime[Math.floor(s/10)];
//     t[7].src = imgTime[s%10];
// }

// let ul = document.querySelector("ul");
// let li = ul.cloneNode(true);

// li.querySelector('li').innerHTML = "Начало клонируемых элементов";
// ul.after(li);

// let list = document.querySelector(".list");
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText('beforeend', 'планет');
// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");  // <h4></h4>
// h4.innerHTML = "Конец списка";  // <h4>Конец списка</h4>

// hr.insertAdjacentElement('afterend', h4);
// h4.id = "x";
// h4.className = 'y';


// let idRemove = setInterval(function(){
//     let li = document.querySelector("li");
//     if(li === null){
//         clearInterval(idRemove);
//         // alert("Список удален");
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>")
//     }
//     else{
//         li.remove();
//     }    
// }, 500);

// let spans = document.querySelectorAll("span");

// for (let i=0; i<spans.length; i++){
//     spans[i].addEventListener("click", function(){
//         this.parentNode.remove();
//     })
// }

// let div = document.querySelector("div");
// div.className = 'alert';
// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add("hidden");
// // activeDiv.classList.remove('hidden');

// activeDiv.classList.toggle("hidden");
// activeDiv.classList.replace('active', 'alert');

// let frogImg = document.querySelector("#green-frog");
// console.log(frogImg.id);
// console.log(frogImg.className);
// console.log(frogImg.alt);
// console.log(frogImg.title);
// console.log(frogImg.src);
// console.log(frogImg.getAttribute('src'));
// console.log(frogImg.getAttribute('data-img'));
// frogImg.src = "4.jpg";
// // frogImg.setAttribute("src", "4.jpg");
// // frogImg.removeAttribute('src');
// console.log(frogImg.hasAttribute('src'));



// let but = document.querySelector("#but");
// but.addEventListener("click", onChange);

// function onChange(){
//     let ch = document.querySelector("#change").value;
//     let on = document.querySelector("#on").value;

//     let temp;
//     let a = document.getElementById("image" + ch);
//     let b = document.getElementById("image" + on);

//     temp = a.src;  // 2.jpg
//     a.src = b.src;  // 3.jpg
//     b.src = temp;  // 2.jpg
// }

// document.form1.style.background = "silver";

// document.forms[0].style.padding = "16px";
// document.forms['form1'].style.margin = "20px";

// document.forms.form1.style.border = "2px dotted gray";

// document.form1.name1.style.color="blue";
// document.form1['name1'].style.background ="aqua";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener("click", content);

// function content(){
//     alert(txt.value);
// }

// let input = document.querySelectorAll("input[type='checkbox']");

// let numChecked, maxChecked = 3;
// for (let i=0; i<input.length; i++){
//     input[i].addEventListener('click', checkAll);   
// }

// function checkAll(){   
//     numChecked = 0; 
//     for (let i=0; i<input.length; i++){
//         if(input[i].checked){ // && input[i].type == "checkbox"
//             numChecked++;
//         }        
//     }
//     if(numChecked==maxChecked){
//         for (let i=0; i<input.length; i++){
//             if(!input[i].checked){
//                 input[i].disabled=true;
//             }
//         }
//     }
//     else{
//         for (let i=0; i<input.length; i++){
//             input[i].disabled=false;
//         }
//     }
//     console.log(numChecked);
// }

// let choose = document.querySelector("input[type='button']");

// choose.addEventListener('click', chooseColor);

// function chooseColor(){
//     // let f = document.form3;
//     document.body.style.background = document.form3.radio2.value;
// }

// Свойства select
/* 
select.options - коллекция из подэлементов <option>
select.value - значение выбранного в данных момент <option>
select.selectedIndex - номер выбранного <option>
*/

// let city = document.querySelector("#city");

// city.addEventListener("change", setImage);

// function setImage(){
//     let cities = city.selectedIndex; // [0,1,2]
//     let options = city.options;  // HTMLOptionsCollection(3)
//     let code = options[cities].value;
//     console.log(code);

//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/"+ code +".png'>"
// }

// let gas = document.querySelectorAll(".petrol");
// let res;

// for(let i=0; i<gas.length; i++){
//     gas[i].addEventListener("click", function(){
//         let gallons = document.querySelector('.gallon').value;
//         let amount = this.getAttribute('data-value');

//         res = gallons * amount;
//         console.log(res);
//         document.querySelector(".sum").innerHTML = res; 
//     })
// }

// let reg = document.querySelector(".register");

// reg.addEventListener("submit", function(){
//     let log = reg.login.value;
//     let pass = reg.password.value;
//     let pass2 = reg.password2.value;

//     if(log == "" || pass == "" || pass2 == ""){
//         alert("Все поля должны быть заполнены");
//     }
//     if(pass != pass2){
//         alert("Пароли не совпадают");
//     }
//     if(pass.length<6){
//         alert("Слишком короткий пароль");
//     }
// })

/* Методы:

search - возвращает позицию (индекс), на которой регулярное выражение совпадает в вызывающей строкой, либо -1, если совпадений нет

match - получает все совпадения с регулярным выражение

replace - поиск и замена

split - делит строку на массив, разбивая ее по указанной построке

test - выплняет поиск совпадений с регулярным выражение со строкой. Возвращает true или false

*/

// let reg = new RegExp("...");
// let regexp = /шаблон/gmi;

// let str = "Я ищу совпадения в 20231 году 1987469 Hello_World ё";
// let regexp = /ищу1/;
// document.write(str.search(regexp) + "<br>");  // 2 или -1
// document.write(str.match(regexp) + "<br>");  // ищу или null
// document.write(regexp.test(str) + "<br>");  // true или false


// [...] - искать любой из заданных символов, но только один раз
// document.write(str + "<br><br>");
// let regexp = /[203]/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

/* Флаги 
g (global) - искать все совпадения с шаблоном поиска (глобальный поиск)
i (ignoreCase) - регистронезависимый поиск
m (multiline) - многострочный поиск
*/
// let regexp = /я/gi;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

/*  Диапазон
[0-9] - любая цифра 
[A-Z] - буквы заглавные
[a-z] - буквы строчные
[А-ЯЁ]
[а-яё]
[А-яЁё]
*/

// let regexp = /[А-яЁё]/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));


// [^abc] - исключающий диапазон, ни один из указанных символов
// let regexp = /[^ищусовпадения]/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

/* 
{n} - количество символов идущих подряд
{n,m} - от n до m повторений
{n,} - от n до бесконечности повторений
*/

// let regexp = /[0-9]{3,}/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

// let html = `
//     <table>
//         <tr>
//             <td bgcolor="#CCC">
//                 <img src="222.png">
//             </td>
//             <td bgcolor="#003399">
//                 <img src="f23.png">
//             </td>
//             <td bgcolor="#00ccdd">
//                 <img src="fff.png">
//             </td>
//         </tr>
//     </table>
// `;
// let exp = /#([a-f0-9]{3}){1,2}/ig;
// document.write(html.match(exp));  // #CCC, #003399, #00ccdd

/* 
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перевод строки
\w (word) - любая буква (англ. алфавит), цифра или символ подчеркивания
*/

// let regexp = /\W/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

/* 
\D (digit) - все кроме цифр  [^0-9] 
\S (space) - все кроме пробельных символов, включая табуляцию и перевод строки
\W (word) - все за исключением букв, цифр или символов подчеркивания
*/

/* 
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательности ничего не должно быть)
*/

// let txt = '909'
// let regexp = /^\d{3}$/g;
// document.write(txt.match(regexp) + "<br>"); 
// console.log(txt.match(regexp));


// document.querySelector("button").addEventListener("click", function(){
//     let text = document.querySelector("#txt").value;
//     let regexp = /^[\w-]{8,}$/g;
//     alert(text.match(regexp));
// })

// dsfd34-234dsfsdfsdf

// точка - один любой символ
// let txt = '909 937. 979 9 9 9q9.'
// let regexp = /\d[.]/g;
// document.write(txt.match(regexp) + "<br>"); 
// console.log(txt.match(regexp));

/* Кол-во повторений
+ - от 1 до бесконечности {1,}
? - от 0 до 1 {0,1}
* - от 0 до бесконечности {0,}
*/

// let regexp = /\d\d?/g;
// document.write(str.match(regexp) + "<br>"); 
// console.log(str.match(regexp));

// let html = `
//     <b>text</b>
//     <img src="222.jpg">
//     <span>else</span>
//     <img src="dsfg.png">
//     <img src="df2.gif">
//     <img src="er0.png">
// `;
// let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/g;
// document.write(html.match(exp) + "<br>"); 
// jpeg

// let html = 'Дмитрий Васильев';
// let exp = /(Дмитрий) Васильев/;
// document.write(html.match(exp) + "<br>");  // Дмитрий Васильев,Дмитрий

// document.write("aaa".replace('a', 'b') + "<br>");
// document.write("aaa".replace(/a/g, 'b') + "<br>");

// let text = "I kill you black dog";
// document.write(text + "<br>");
// let exp = /(book|kill|black)/ig;
// text = text.replace(exp, "***");
// document.write("<p>"+text+"</p>");

// let st = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.write(st.match(re) + "<br>");
// document.write(st.replace(re, "$2 && $1") + "<br>");

// let text = "red color: #F00 and green color: #090";
// document.write(text + "<br>");
// let exp = /(#[a-f0-9]{3})/ig;
// text = text.replace(exp, "<b style='color:$1'>$1</b>");
// document.write("<p>"+text+"</p>");

// let text = "I like yandex.ru";
// document.write(text + "<br>");
// let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
// text = text.replace(exp, "<a href='https://$1'>$1</a>");
// document.write("<p>"+text+"</p>");

// let but = document.querySelector("#but");
// but.addEventListener('click', smsUser);


// function smsUser(){
//     let name = document.form1.your_name.value;
//     let sms = document.form1.your_message.value;
//     let regExpBBMail = /([\w.]+@[\w^.]+\.[a-z]{2,3})/ig;
//     sms = sms.replace(regExpBBMail, "<span style='color:blue'>$1</span>")
//     document.write(`
//     <fieldset>
//         <legend>Сообщение ${name}</legend>
//         <div>${sms}</div>
//     </fieldset>
//     `);

// }

// let str = "   новый текст еще     текст  ";
// str = str.replace(/^\s+|\s$/g, "");
// alert(">"+str+"<");
// let st = "25-10-2023, 21/07/2022, 13.08.2020"
// let re = st.split(/[-/.,]/);
// document.write(re + "<br>");
// console.log(re);

// let but = document.querySelector("input[type='button']");

// but.addEventListener("click", showRadio);

// function showRadio(){
//     alert(document.form3.radio2.value);
// }

// let mas = [1, 2, 3];
// mas[1] = 5;

// let obj = {c: 1, b:2, a: 3};

// console.log("mas = ", mas );
// console.log("obj = ", obj );

// document.write(mas[1] + "<br>");
// document.write(obj["b"] + "<br>");
// document.write(obj.b + "<br>");

// let car = new Object();
// car["type"] = "BMW";
// car["color"] = "white";
// document.write(car["type"] + " " + car["color"] + "<br>");
// document.write(car.type + " " + car.color + "<br>");
// console.log(car);

// let menu = {};
// menu.width = 300;
// menu.height = 200;
// menu.title = "Menu";
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");


// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
// document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// // delete(menu.width);
// // delete menu.width;
// // document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// for(let key in menu){
//     document.write("<br>Ключ = " + key + ", значение = " + menu[key]);    
// }

// // document.write("<br>Имена ключей: " + Object.keys(menu));
// // document.write("<br>Количество ключей: " + Object.keys(menu).length);


// // console.log(Object.keys(menu))

// Object.keys(menu).forEach(function(i){
//     document.write("<br>" + i + " => " + menu[i]);    
// })

// let obj = {
//     name: "Игорь",
//     colors: {
//         first: "yellow",
//         second: "black"
//     },
//     color: [
//         "white",
//         "red",
//         "orange",
//         "blue"
//     ],
//     hello: function(){
//         document.write("Привет");

//     }
// }

// let fil = Object.keys(obj.colors).map(function(elem){
//         return elem + ": " + obj.colors[elem] + "<br>";
//     })

// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;
// })

// let fil = obj.color.map(function(elem, index, all){
//     return "color: " + elem + " " + index + " Массив: " + all + "<br>";
// })

// let fil = obj.color.map(elem => elem.toUpperCase())

// document.write("<br>" + fil + "<br>");


// document.write(obj.name + " " + obj.color[1] + " " + obj.colors.second + "<br>");
// obj.hello();

// // Object.keys(obj).forEach(function(i){
// //     document.write("<br>" + i + " => " + obj[i]);    
// // })

// console.log(obj);

// let calc = {
//     num1: 5,
//     num2: 7,
//     // res: 0,
//     func: function(){
//         // calc.res = calc.num1 * calc.num2;
//         this.res = this.num1 * this.num2;
//     }
// }

// calc.func()
// document.write(calc.res);
// // document.write(calc.num1);

// let x = 15, y = 10;

// // let coords = {
// //     x: x,
// //     y: y,
// //     calcSq: function(){
// //         document.write(this.x * this.y);        
// //     }
// // }

// let coords = {
//     x, y, calcSq(){
//         document.write(this.x * this.y);        
//     }
// }
// document.write(x + "<br>");
// document.write(coords.x + "<br>");

// coords.calcSq();

// Деструктуризация 

// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: 'Pavlova'
//     },
//     psw: 'qwerty',
//     role: 'guest'
// }
// // let log = user.login.firstName;
// // let {login: {firstName: f, lastName: l}, ...rest} = user;
// // document.write(f + " " + l + " " + rest.psw + "<br>");
// document.write(psw);

// let number = [3,5,6];
// let [,,c] = number;
// document.write(c);
// document.write(number[2]);

// Функция-конструктор
// function Car(name, year){
//     this.name = name;
//     this.year = year;
// }

// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }

// function Car(name, year) {
//     this.name = name;
//     this.year = year;
//     this.getAge = function () {
//         return new Date().getFullYear() - this.year;
//     }
// }

// let ford = new Car('Ford', 2019);
// console.log(ford);
// console.log(ford.getAge())


// let bmw = new Car('BMW', 2017);
// console.log(bmw);
// console.log(bmw.getAge())

// document.write(ford.name);
// document.write(bmw.name);

// function User(name, age, job){
//     this.name = name,
//     this.age = age,
//     this.job = job
//     this.who = function(){
//         document.write("Я <b>"+this.name+"</b> мне <b>" + this.age + " </b>лет."+" Я работаю <b>"+this.job+"ом</b>"+"."+"<br>");
//     }
// }

// let dmi = new User('Дмитрий', 26, 'Дизайнер');
// dmi.who();

// let sta = new User('Станислав', 29, 'Программист');
// sta.who();

// let ser = new User('Сергей', 35, 'Менеджер');
// ser.who();

// let form = document.form1;
// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     // console.log(title, text);
//     saveForm({title, text, description}); // {title: title, text: text}
// })

// function saveForm(obj){ //{title, text, description}
//     // let {title, text, description} = obj;
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         // title, text, description
//         ...obj
//     }

//     console.log("Form data: ", formData);
// }

// class User{
//     //свойства
//     constructor(name){
//         this.name = name;
//     }
//     //методы
//     sayHi(){
//         document.write("Hello, " + this.name + "!");        
//     }    
// }

// let user1 = new User(30);
// user1.sayHi()
// document.write("<br>" + user1.name);

// // alert(typeof User)
// console.log(user1);

// class User{
//     constructor(login){
//         this.login = login;
//     }
//     get login(){
//         return this._login;
//     }
//     set login(value){
//         if (value.length < 6){
//             alert("Логин слишком короткий")
//             return
//         }
//         this._login = value;
//     }
// }

// let user1 = new User(4);
// alert(user1.login);
// user1.login = '46541413';
// alert(user1.login);

// родительский класс
// class Header{
//     constructor(img, h1, h2){
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }
//     render(id){
//         this.out = `
//             <img src="${this.src}">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//         `
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// // дочерний класс
// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2)
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel
//     }
//     set tel(t){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         }
//         else{
//             alert("Некорректный номер телефона");
//             return;
//         }
//     }
//     render(id){
//         super.render(id);
//         this.out += `
//             <h3>${this.tel}</h3>
//         `
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img1 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
// let header1 = new Header(img1, "Заголовок", "Описание");
// header1.render('header');

// let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-64.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render('header2');


// let img3 = "https://cdn1.iconfinder.com/data/icons/application-file-formats/128/javascript-64.png";
// let header3 = new HeaderExt(img3, "Третий заголовок", "Новое описание", "+7 901 456-78-56");

// header3.tel = "Hello";
// // header3.tel = "+7 999 555-44-33";
// header3.render('header-ext');

// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

// console.log(info);
// document.write(info+ "<br>");

// /* 
// JSON.parse() - преобразовывает объект JSON в объект JS
// JSON.stringify() - преобразовывает объект JS в объект JSON
// */

// let person = JSON.parse(info );

// console.log(person);
// document.write(person + "<br>");

// person.first_name = "Petr";
// document.write(person.first_name + "<br>");

// delete(person.age);

// person.work = "programmer";

// // delete(person.children[1]);
// person.children.splice(1,1);
// person.children.push("Ira");

// for(let i in person){
//     document.write(i + ": " + person[i] + "<br>");

// }
// console.log(person);

// let personString = JSON.stringify(person);
// console.log(personString);
// document.write(personString + "<br>");

// https://jsonplaceholder.typicode.com/todos

document.querySelector("#load").addEventListener('click', load);

function load(){
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let ul = document.querySelector('#list');
            let html = data.map(function(item){
                return "<li>"+ item.id + " " + item.name + " " + item.email +  "</li>"
            })
            ul.insertAdjacentHTML("afterbegin", html.join(" "))
        })
}

