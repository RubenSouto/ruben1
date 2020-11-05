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

const tabelle = $("#tabelle");
var numbers = [];

var data = {
    timeout: 1000,

    gesSpalte: 10,
    aktuelleSpalte: 1,
    aktuelleZeile: 1,

    anzahl: null,
    zahlen : [],

    aktuellePrimzahl: null,
    //zuletztGesiebtesZahlenfeld: null
}

var oktopus = {
    initEverything: function () {
        oktopus.dataClear();
        oktopus.dataInit();
        view.init();
        view.render();
    },

    dataClear: function (){
        $("#tabelle > tbody").empty();
        data.zahlen = [];
        data.aktuelleSpalte = 1;
        data.aktuelleZeile = 1;
    },

    dataInit: function () {
        // var zeile;
        data.anzahl = $("#userInput").val();
        // zeile = tabelle.insertRow(data.aktuelleZeile);

        for(var i = 2; i <= data.anzahl; i++){

            if(data.aktuelleSpalte == data.gesSpalte){
                data.zahlen.push({zeile: data.aktuelleZeile, spalte: data.aktuelleSpalte, nummer: i, ausgesiebt: false});
                data.aktuelleSpalte = 1;
                data.aktuelleZeile++;
            }

            else{
                data.zahlen.push({zeile: data.aktuelleZeile, spalte: data.aktuelleSpalte, nummer: i, ausgesiebt: false});
                data.aktuelleSpalte++;
            }
        }

        // array wird mit nummern befüllt für oktopus.aussieben
        for (var i = 2; i < data.anzahl; i++) {
            numbers.push(i);
        }      
    },

    nextPrimzahl: function () {
        for (var i = 0; i < data.anzahl; i++) {
            setTimeout(oktopus.aussieben(data.aktuellePrimzahl), data.timeout);  
        }
    },

    // aussieben muss noch fertig gemacht werden
    aussieben: function (){
        data.aktuellePrimzahl = numbers.shift();

        for (var i = 0; i <= data.zahlen.length; i++){
            if (numbers[i] % data.aktuellePrimzahl == 0){
                numbers.splice(i, 1);
                data.zahlen[i].ausgesiebt = true;
            }
        }       
        view.render() 
    }
}

var view = {

    init: function() {
        for (var i = 0; i < data.aktuelleZeile; i++) {
            $('#tabelle > tbody').append('<tr></tr>');

            for (var y = 0; y < data.gesSpalte; y++) {
                $('#tabelle > tbody tr:last').append('<td>1</td>');//.attr(/{{id}}/g, "zeile" + i + "Spalte"+ y);
            }
        }
    },


    render: function(){
        for (var i = 0; i < data.zahlen.length; i++) {
            if (data.zahlen[i].ausgesiebt == false) {
                $("#zeile"+ data.zahlen[i].zeile + "Spalte"+ data.zahlen[i].spalte).html(data.zahlen[i].nummer);
            }
        }
    }
}