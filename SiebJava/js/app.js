/**
 * Erstellt Array mit Zahlen (0 -max)
 * Alle Primzahlen kommen in den Array: primZahlen
 * dieser wird zurück gegeben
*/

var numbers = [];

var data = {
    timeout: 1000,

    gesSpalte: 9,
    aktuelleSpalte: 0,
    aktuelleZeile: 0,

    anzahl: null,
    zahlen : [],

    aktuellePrimzahl: null,
}

var oktopus = {
    initEverything: function ()
    {
        oktopus.dataClear();
        oktopus.dataInit();
        view.init();
        view.render();
        oktopus.nextPrimzahl();
    },

    dataClear: function ()
    {
        $("#tabelle > tbody").empty();
        data.zahlen = [];
        data.aktuelleSpalte = 0;
        data.aktuelleZeile = 0;
        data.aktuellePrimzahl = null;
        numbers = [];
    },

    dataInit: function () 
    {
        data.anzahl = $("#userInput").val();

        for(var i = 2; i <= data.anzahl; i++){

            if(data.aktuelleSpalte == data.gesSpalte){
                data.zahlen.push({zeile: data.aktuelleZeile, spalte: data.aktuelleSpalte, nummer: i, ausgesiebt: false});
                data.aktuelleSpalte = 0;
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

    nextPrimzahl: function () 
    {
        while (numbers.length != 0) {
            setTimeout(oktopus.aussieben(), data.timeout);  
        }
    },

    aussieben: function ()
    {
        data.aktuellePrimzahl = numbers.shift();

        console.log(data.aktuellePrimzahl);
        for (var i = 0; i <= data.zahlen.length; i++){
            if (numbers[i] % data.aktuellePrimzahl == 0){
                numbers.splice(i, 1);
                data.zahlen[i].ausgesiebt = true;
            }
        }
        setTimeout(view.render(), data.timeout);
    }
}

var view = {
    init: function()
    {
        for (var i = 0; i <= data.aktuelleZeile; i++) {
            $('#tabelle > tbody').append('<tr></tr>');

            for (var y = 0; y < data.gesSpalte; y++) {
                var cellId = '<td id="counter"></td>';
                var replacement = "zeile" + i + "Spalte" + y;

                cellId = cellId.replace("counter", replacement);
                $('#tabelle > tbody tr:last').append(cellId);
            }
        }
    },


    render: function()
    {
        for (var i = 0; i < data.zahlen.length; i++) {
            if (data.zahlen[i].ausgesiebt == false) {
                var cellId = "zeile" + data.zahlen[i].zeile + "Spalte"+ data.zahlen[i].spalte;
                $("#" + cellId).html(data.zahlen[i].nummer);
            }   
        }
    }
}