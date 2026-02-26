//console.log('work');

//HUMAN CODE
/*
Cosa devo fare?
//MACRO AEREE
// -Identifico il markup
-Collezziono i dati che mi servono
-Chiamata AJAX
-Svolgo la logica AJAX (Selezionando i giusti elementi)
-Modifico il markup




CONSEGNA 2:
Mini TASKS:
1) Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
2) Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

//COSA DEVO FARE
    -Seleziono gli elementi
    -Salvo gl ielementi
    -Aggiungo un evento in ascolto
    -Imposto la logica



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
//DOM NODES SELECTION
const section = document.querySelector('.container section'); 
const overlay = document.querySelector('.overlay')
const overlayButton = document.querySelector('.overlay button')
const overlayImg = document.getElementById('overlay-img')

//console.log(section);
//console.log(overlay);
//console.log(overlayButton);
//console.log(overlayImg.src);








const cardsEndpoint = 'https://lanciweb.github.io/demo/api/pictures/'; //Salvo il mio endpoint

//Chiamata AJAX

fetch(cardsEndpoint)

.then(data => data.json()) //PROMISE

.then(cardsInfo => {    //PROMISE
    
    //SVOLGO LA LOGICA NELL'AJAX
    //console.log(cardsInfo);
    //console.log(typeof cardsInfo);
    cardsInfo.forEach(card => {
        //console.log(card);
        //console.log(card.title);
        //console.log(typeof card.date);
        
        //Markup precedentemente identificato
        const markup = `<div class="col-12 col-md-6 col-lg-4">
        <div class="card rounded-0 shadow-lg">
        <div class="card-body position-relative">
        <img src="./assets/img/pin.svg" class="card-pin">
        <img  id= "card-img" src="${card.url}" class="card-img-top rounded-0">
        <span class = "card-date mt-3">${card.date}</span>
        <h2 class="card-text fs-4 fw-bold fw-max">${card.title.toUpperCase()}</h2>
        </div>
        </div>
        </div>`
        
        //console.log(markup);
        section.innerHTML += markup //Modifico il markup
    });
    
    const images = document.querySelectorAll('.card-body #card-img')
    //const cardsImg = document.querySelectorAll('card-img')
    //console.log(images);
    
    
    
    images.forEach(image => {
        //console.log(image.src);
        
        
        image.addEventListener('click', function(){
            overlay.className = 'overlay'
            overlayImg.src = image.src
            
        })
        
    })
    //console.log(imgsObj);
    overlayButton.addEventListener('click', function(){
        overlay.className += ' d-none'
        
    })
    
    
})





//FUNCTIONS

