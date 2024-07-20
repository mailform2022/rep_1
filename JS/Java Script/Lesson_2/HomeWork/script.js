
// ЗАДАНИЕ №1

/* let cost = prompt("Ведите стоимость покупки в рублях!", 100);
let skidka = "0%";
let res = cost;

if ((cost >= 500) && (cost <= 1000)) {
    res = cost - cost * 0.03;
    skidka = "3%"
}
else if (cost > 1000) {
    res = cost - cost * 0.05;
    skidka = "5%"
}
document.write("Стоимось покупки без скидки: " + cost + " руб." + 
"<br \/>Скидка: " + skidka + "<br \/>Итоговая стоимость: " + res + " руб."); */



// ЗАДАНИЕ №2


let num1 = parseInt( prompt("Введите первое число.") ); 
let num2 = parseInt( prompt("Введите второе число.") ); 
let operator = prompt("Введите оператор '+, -, *, /, %'");
let res = "Значение не определено!"
let oper;
switch(operator) 
{ 
case "+": 
res = num1 + num2;
oper = "Сумма значений составляет: ";
break; 
 
case "-": 
res = num1 - num2;
oper = "Разность значений составляет: ";
break; 

case "*": 
res = num1 * num2;
oper = "Умножение значений составляет: ";
break; 

case "/": 
if (num2 != 0){
res = num1 / num2;
oper = "Деление значений составляет: ";
}
break; 

case "*": 
res = num1 * num2
oper = "Умножение значений составляет: ";
break; 

case "%": 
res = num1 % num2;
oper = "Остаток от деления значений составляет: ";
break; 
} 
alert(oper + " " + res);