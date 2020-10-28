

/**
 * Erstellt Array mit Zahlen (0 -max)
 * Alle Primzahlen kommen in den Array: primZahlen
 * dieser wird zurück gegeben
 * @param {number} max 
 */
function Sieb(max) {
    var numbers = [];
    var primZahlen = [];

    for(var i= 2; i <= max; i++){
        numbers.push(i);
    }

    //document.getElementById("zahlen").innerHTML = numbers;

    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());

        document.getElementById("zahlen").innerHTML = "";
        document.getElementById("primZahlen").innerHTML = "";    

        await setTimeout(() => {
            document.getElementById("primZahlen").innerHTML = primZahlen;
            document.getElementById("zahlen").innerHTML = numbers;
        }, 3000);

        await setTimeout(() => {
            for (var i = 0; i <= numbers.length; i++){
                if (numbers[i] % primZahlen[primZahlen.length - 1] == 0){
                    numbers.splice(i, 1);
                }
            }
        }, 3000);
    }
    //document.getElementById("primZahlen").innerHTML = primZahlen;
    return primZahlen;
}
console.log(Sieb(100));


function KastenErstellen(){
    var max = document.getElementById("userInput").value;
 
    console.log(Sieb(max));
}