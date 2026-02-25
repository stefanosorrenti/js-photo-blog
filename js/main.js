//console.log('work');

//HUMAN CODE
/*
Cosa devo fare?

-Identifico il markup
-Collezziono i dati che mi servono
-Chiamata AJAX
-Svolgo la logica AJAX (Selezionando i giusti elementi)
-Modifico il markup

*/


//Identifico il markup

/*
<div class="col-12 col-md-6 col-lg-4">
    <div class="card rounded-0">
        <div class="card-body position-relative">
                <img src="./assets/img/pin.svg" class="card-pin">
                <img src="https://pbs.twimg.com/media/G3Y8BbmXEAAfY4W.jpg" class="card-img-top rounded-0">
                <p class="card-text">
                    ci provo si sisisisiisii
                </p>
        </div>
    </div>
</div>
*/


//Collezziono i dati che mi servono

//DATA
const section = document.querySelector('.container section');
console.log(section);

const cardsEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';

//Chiamata AJAX
fetch(cardsEndpoint)
    .then(data => data.json())
    .then(cardsInfo => {    //SVOLGO LA LOGICA NELL'AJAX
        console.log(cardsInfo);
        //console.log(typeof cardsInfo);
        cardsInfo.forEach(card => {
            //console.log(card);
            //console.log(card.title);
            //console.log(card.date);
            
            const markup = `<div class="col-12 col-md-6 col-lg-4">
                                <div class="card rounded-0">
                                    <div class="card-body position-relative">
                                        <img src="./assets/img/pin.svg" class="card-pin">
                                        <img src="${card.url}" class="card-img-top rounded-0">
                                        <p class="card-text">${card.title}, in data ${card.date}</p>
                                    </div>
                                </div>
                            </div>`

            //console.log(markup);
            section.innerHTML += markup
        });

    })