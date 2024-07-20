let res = +prompt('1-4', 2)

document.write("<div id='image'></div>")

let img = document.getElementById("image")

img.innerHTML="img src='img/cat.jpg'"

switch(res){

    case 1:

        img.innerHTML="<img src='img/bird.jpeg'>"

        break;

    case 2:

        img.innerHTML="<img src='img/cat.jpg'>"

        break;

    case 3:

        img.innerHTML="<img src='img/dog.jpg'>"

        break;

    case 4:

        img.innerHTML="<img src='img/fish.jpeg'>"

        break;




}