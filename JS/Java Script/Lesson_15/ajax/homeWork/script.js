

let inputRub = document.querySelector('#rub');
let inputUsd = document.querySelector('#usd');
let inputEur = document.querySelector('#eur');
let inputCny = document.querySelector('#cny');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    request.open('GET', 'current1.json');
    request.send();
    request.addEventListener('load', ()=>{
        if (request.status == 200) {
            //  console.log(request.response);
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
            inputEur.value = (inputRub.value / data.current.eur).toFixed(2);
            inputCny.value = (inputRub.value / data.current.cny).toFixed(2);
        
        }
        else{
           
            let label = "<div id='warning'>" + " Что-то пошло не так" + "</div>";
            inputCny.insertAdjacentHTML("afterend", label);        
                        setTimeout(()=>{
                        let warn = document.querySelector("#warning");
                            warn.parentNode.removeChild(warn);
                        }, 3000);
                
                    
                

           
        }
    }
)
})

