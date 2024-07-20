// console.log("Работает");

// let request = new XMLHttpRequest();

// request.open('GET', 'data.txt'); // (method, url, async, login, pasword)
// request.send();

// request.onreadystatechange = function(){
//     if(request.readyState == 4 && request.status == 200){
//         document.write(request.response);
        
//     }
// }






let inputRub = document.querySelector('#rub');
let inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    let request = new XMLHttpRequest();

request.open('GET', 'current.json'); 
request.send();

// request.onreadystatechange = function(){
    request.addEventListener('load', ()=>{
    if(request.status == 200){
        
        let data = JSON.parse(request.response);
        inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);

        console.log(inputRub.value);

    }

    else{
        inputUsd.value = "Что-то пошло не так!"
    }
})
})








// let form = document.form1;

// let message = {
//     loading: "Загрузка",
//     success: "Спасибо! Скоро мы свяжемся",
//     failure: "Что-то пошло не так"
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let stmsg = document.createElement("div");
//     stmsg.textContent = message.loading;
//     form.append(stmsg);
    
//     let request = new XMLHttpRequest();

//     request.open('POST', 'server.php'); 
//     let formData = new FormData(form);
//     request.send(formData);

//     request.addEventListener('load', () => {
//         if(request.status == 200){
//             console.log(request.response);
//             stmsg.textContent = message.success;
//             form.reset();
//             setTimeout(()=>{
//                 stmsg.remove();
//             }, 3000)
//         }
//         else {
//             stmsg.textContent = message.failure;
//         }
//     })
// })





/* 
document.querySelector("button").addEventListener('click', req);

function req(){
    let request = new XMLHttpRequest();
    request.open("GET", "db.json");
    request.send();
    request.addEventListener('load', function(){
        if(request.status == 200){
            let data = JSON.parse(request.response);
            for(let i=0; i<data.people.length; i++){
                let card = document.createElement('div');
                card.classList.add('card'); 
                document.querySelector('.app').append(card);
                
                let icon;
                if(data.people[i].pol == 'male'){
                    icon = 'icons/mars.png';
                }
                else{
                    icon = 'icons/female.png';
                }

                card.innerHTML = `
                <img src="${data.people[i].photo}">
                <div class="name">${data.people[i].name} ${data.people[i].surname}</div>
                <div class="pol"><img src="${icon}"></div>
                <div class="age">${data.people[i].age}</div>
                `;

            }
            
            }
            else{
                console.log("Что-то пошло не так!");
                console.error("Что-то пошло не так!");
        }
    })
    this.remove();
} */



/* 
document.querySelector("#load").addEventListener('click', load);

function load(){
    let url = 'https://jsonplaceholder.typicode.com/users'
   fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
          let ul = document.querySelector("#list");
          let html = data.map(function(item){
            return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
          });   
          ul.insertAdjacentHTML("afterbegin", html.join(" "));
        } );
}

 */