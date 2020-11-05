/**
 * Erstellt Array mit Zahlen (0 -max)
 * Alle Primzahlen kommen in den Array: primZahlen
 * dieser wird zurück gegeben
 
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
*/

var tabelle = $("#tabelle");
var numbers = [];

var data = {
    timeout: 1000,

    gesSpalte: 9,
    aktuelleSpalte: 0,
    aktuelleZeile: 0,

    anzahl: null,
    zahlen : [],

    aktuellePrimzahl: null,
    zuletztGesiebtesZahlenfeld: null
}

var oktopus = {
    initEverything: function () {
        oktopus.dataClear();
        oktopus.dataInit();
        view.init(data.anzahl);
        view.render(data.zahlen);
    },

    dataClear: function (){
        data.zahlen = [];
        data.aktuelleSpalte = 0;
        data.aktuelleZeile = 0;
    },

    dataInit: function () {
        var zeile;
        data.anzahl = $("#userInput").val();

        for(var i = 2; i <= data.anzahl; i++){
            if(data.aktuelleSpalte == data.gesSpalte){
                data.zahlen.push({aktuelleZeile: data.aktuelleZeile, aktuelleSpalte: data.aktuelleSpalte, nummer: i, ausgesiebt: false});
                data.aktuelleSpalte = 0;
                zeile = tabelle.insertRow(aktuelleZeile);
                data.aktuelleZeile++;
            }

            else{
                data.zahlen.push({aktuelleZeile: data.aktuelleZeile, aktuelleSpalte: data.aktuelleSpalte, nummer: i, ausgesiebt: false});
                
                data.aktuelleSpalte++;
            }
        }

        for (var i = 2; i < data.anzahl; i++) {
            numbers.push(i);
        }      
    },

    nextPrimzahl: function () {
        for (var i = 0; i < data.anzahl; i++) {
            setTimeout(oktopus.aussieben(data.aktuellePrimzahl), data.timeout);  
        }
    },

    aussieben: function (aktuellePrimzahl){

        data.aktuellePrimzahl = numbers.shift();

        for (var i = 0; i <= numbers.length; i++){
            if (numbers[i] % data.aktuellePrimzahl == 0){
                numbers.splice(i, 1);
            }
        }        
    }
}

var view = {

    init: function(anzahl) {
        
        for (var i = 1; i <= anzahl; i++) {
            if (i % 10 == 0) {
                tabelle.insertRow();
            }
        }
        console.log(data.zahlen);
    },


    render: function(zahlen){

    }
}