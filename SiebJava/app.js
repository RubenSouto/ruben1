var waitVar;

/**
 * Erstellt Array mit Zahlen (0 -max)
 * Alle Primzahlen kommen in den Array: primZahlen
 * dieser wird zurück gegeben
 */
function Sieb() {
    var numbers = [];
    var primZahlen = [];
    var max = document.getElementById("userInput").value;
    
    for(var i= 2; i <= max; i++){
        numbers.push(i);
    }

    document.getElementById("zahlen").innerHTML = numbers;

    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());

        setTimeout(plsWait(primZahlen), 3000);

        for (var i = 0; i <= numbers.length; i++){
            if (numbers[i] % primZahlen[primZahlen.length - 1] == 0){
                numbers.splice(i, 1);
            }
        }
    }
    return primZahlen;
}

function createTable(numbers){

}

function plsWait(primZahlen) {
    setTimeout(printArrays(primZahlen), 3000);
}

function printArrays(primZahlen) {
    document.getElementById("primZahlen").innerHTML = primZahlen;
}