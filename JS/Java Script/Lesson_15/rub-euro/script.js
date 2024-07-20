let val = form1.querySelectorAll('input');

for (let i = 0; i < val.length; i++) {
    val[i].addEventListener('input', () => {
        if (+val[i].value) {
            let request = new XMLHttpRequest();
            request.open('GET', 'current.json');
            request.send();
            request.addEventListener('load', () => {
                if (request.status == 200) {
                    let data = JSON.parse(request.response);
                    for (let j = 0; j < val.length; j++) {
                        if (val[j].id != val[i].id) {
                            val[j].value = ((val[i].value * data.current[`${val[i].id}`]) / data.current[`${val[j].id}`]).toFixed(2);
                        }
                    }
                }
                else {
                    for (let j = 0; j < val.length; j++) {
                        val[j].value = 'Что-то пошло не так';
                    }
                }
            })
        }
        else {
            val[i].value='';
        }
    })
    val[i].addEventListener('click', () => {
        for (let i = 0; i < val.length; i++) {
            val[i].value = '';
        }

    })
}
