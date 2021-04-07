//array numeri

var numeri = [];

// generatore numeri

while (numeri.length < 5) {

    var numeroGenerato = generaNumeri();

    numeri.push(numeroGenerato);
}

function generaNumeri() {

    return Math.floor(Math.random() * 500) +1;
}

//numeri random

console.log(numeri);

alert(numeri);

//countdown

var timeLeft = 30;

var elem = document.getElementById('countdown');
    
var timerId = setInterval(countdown, 1000);
    
function countdown() {
    if (timeLeft == -1) {
    clearTimeout(timerId);
    doSomething();

    } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
    }
}

function doSomething() {

    //utente deve inserire i 5 numeri

    var numeriUtente = [];

    while (numeriUtente.length < 5) {

        var numInseriti = parseInt( prompt('inserisci i numeri') );

        numeriUtente.push(numInseriti);
        
    }

    console.log(numeriUtente);

}

var numeriUtente = numeriUtente;

// controllo numeri inseriti con quelli generati

// var numeroTrovato = false;

// while (numeriUtente.length < 5) {

//     var numero = parseInt(prompt('inserisci un numero'));

//     var isNumeroBomba = isBombaTrovata(numero, bombe);

//     console.log('numeri Inseriti', numeriInseriti);
// }


isNumeroTrovato();

function isNumeroTrovato(numeriUtente, numeri) {

    var i = 0;

    if ( i < numeri.length, i++) {

        var numeroArray = numeri[i];

        if (numeriInserito == numeroArray) {

            found = true;
        }
    }
}