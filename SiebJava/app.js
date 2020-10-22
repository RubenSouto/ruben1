

/**
 * Erstellt Array mit allen Zahlen 
 * @param {number} max 
 */
function Sieb(max) {
    var numbers = [];
    var primZahlen = [];

    for(var i= 2; i <= max; i++){
        numbers.push(i);
    }

    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());

        for (var i = 0; i <= numbers.length; i++){
            if (numbers[i] % primZahlen[primZahlen.length - 1] == 0){
                numbers.splice(i, 1);
            }
        }
    }
    return primZahlen;
}


function KastenErstellen(){
    var max = document.getElementById("userInput").value;
    var array = Sieb(max);
    for(var i = 0; i < array.length; i++){
        document.getElementById("zahlen").innerHTML += array[i];
        console.log(i);
    }
}