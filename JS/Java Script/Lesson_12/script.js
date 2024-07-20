let elem = document.createElement("h2");
elem.innerHTML = 'Learning JS!';
let style = document.createElement('style');
style.innerHTML = 'BODY {position:fixed; top:10px; left:10px; width:1000px; text-align:center; border: 3px dashed #4affff; font-size: large; color: blueviolet;}';
let head = document.getElementsByTagName('head')[0];
head.appendChild(style);
document.body.append(elem);

//-----------------------------------------------------------------------

function Human(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.getInfo = function (){
       return "Я " + "<b>"+this.name+"</b>" + ". " + "Мне " + this.age + "лет. Я работаю " + "<b>"+this.job+"</b>" + "<b>" + "ом" +"</b>" + ".";
        
    }
} 

let alik = new Human("Алик", 26, "парикмахер");

let stanislav = new Human("Станислав", 29, "Программист");

let sergei = new Human("Сергей", 35, "Менеджер");

document.write(alik.getInfo() + "<br>");
document.write(stanislav.getInfo() + "<br>");
document.write(sergei.getInfo() + "<br>");

document.write("<br>");

//--------------------------------------------------------------------------

function Automobile(color, model, year, manufact){
    this.color = color;
    this.model = model;
    this.year = year;
    this.manufact = manufact;
    this.whatColor = function(){
        return "Цвет машины: " + this.color + "." + "<br";
    }
    this.autoInfo = function(){
        return "Модель машины: " + manufact + " " + model + "." + "<br>" + "Год выпуска: " + year + "." + "<br>" + "Производитель автомобиля: " + manufact + ".";
            }
    }


let nissan = new Automobile("красный", "Skyline", 2007, "Nissan");
let toyota = new Automobile("черный", "Corolla", 2009, "Toyota");
let volkswagen = new Automobile("синий", "Golf", 2009, "Volkswagen");


document.write(nissan.whatColor() + " " + "<br>" + nissan.autoInfo() + "<br>" + "<br>");
document.write(toyota.whatColor() + " " + toyota.autoInfo() + "<br>" + "<br>");
document.write(volkswagen.whatColor() + " " + volkswagen.autoInfo() + "<br>" + "<br>");
