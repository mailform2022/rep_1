/* 
let i = 0;

while(i <= 30){
    if(!(i%3)){
        document.write("Делится на 3 без остатка: " + i + "<br>");
        }
    i++;
} */

let sum = 0;
let mul = 1;

for(let i = 5; i<=10; i++){
sum += i;
if(!(i%2)){
mul *= i;
}
}
document.write("Сумма чисел: " + sum + "<br>" + "Произведение чисел: " + mul + "<br>");
