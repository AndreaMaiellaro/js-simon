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

    } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
    }
}

//utente deve inserire i 5 numeri

var numeriUtente = [];

while (numeriUtente.length < 5) {

    var numInseriti = parseInt( prompt('inserisci i numeri') );

    numeriUtente.push(numInseriti);
}

console.log(numeriUtente);

// //controllo numeri inseriti con quelli generati

// function findCommonElement(numeri, numeriUtente) {
      
// // Loop for array1
// for(let i = 0; i < numeri.length; i++) {
          
//     // Loop for array2
//     for(let j = 0; j < numeriUtente.length; j++) {
                
//         // Compare the element of each and
//         // every element from both of the
//         // arrays
//             if(numeri[i] === numeriUtente[j]) {
//             // Return if common element found
//                 return true;
//             }
//         }
//     }
//     return false;
// }