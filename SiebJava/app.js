/**
 * Erstellt Array mit Zahlen (0 -max)
 * Alle Primzahlen kommen in den Array: primZahlen
 * dieser wird zurück gegeben
 */
function Sieb() {
    var numbers = [];
    var primZahlen = [];
    var max = document.getElementById("userInput").value;
    document.getElementById("zahlen").innerHTML = "";
    
    for(var i= 2; i <= max; i++){
        numbers.push(i);
    }

    displayNumbers(numbers);

    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());

        for (var i = 0; i <= numbers.length; i++){
            if (numbers[i] % primZahlen[primZahlen.length - 1] == 0){
                numbers.splice(i, 1);
            }
        }
    }
    displayPrimaryNumbers(primZahlen);
    return primZahlen;
}

function createTable(numbers){

}

function displayPrimaryNumbers(primZahlen) {
    for (var i = 0; i < primZahlen.length; i++) {
        if(primZahlen[i -1] % 20 == 0){
            document.getElementById("primZahlen").innerHTML += primZahlen[i] + ", ";
            document.getElementById("primZahlen").innerHTML += "<br>";
        }
        else{
            document.getElementById("primZahlen").innerHTML += primZahlen[i] + ", ";
        }
    }
}

function displayNumbers(numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
        if(numbers[i -1] % 10 == 0){
            document.getElementById("zahlen").innerHTML += numbers[i] + ", ";
            document.getElementById("zahlen").innerHTML += "<br>";
        }
        else{
            document.getElementById("zahlen").innerHTML += numbers[i] + ", ";
        }
    }
}