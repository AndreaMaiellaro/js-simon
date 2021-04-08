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

    var indovinati = [];

    for (var i = 0; i < numeriUtente.length; i++ ) {
        var thisNumeriUtente = numeriUtente[i];

        if (numeri.includes(thisNumeriUtente) == true ) {
            indovinati.push(thisNumeriUtente);
        }
    }
    console.log(indovinati);

    alert("hai indovinato " + indovinati.length + "numeri. i numeri sono: ")
    alert(indovinati);

}