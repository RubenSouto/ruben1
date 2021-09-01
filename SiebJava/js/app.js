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
    updateTimeout: function () {
        slider = document.getElementById("myRange"),
        output = document.getElementById("demo"),
        output.innerHTML = slider.value/1000 + "s"; // Display the default slider value
        data.timeout = slider.value;
    },

    initSomeStuff: function ()
    {
        if (numbers.length != 0) {
            //Einzelne schritte
            view.render();
            oktopus.aussieben();
            //console.log("funktioniert");
            setTimeout(oktopus.initSomeStuff, data.timeout);
        }
    },

    initEverything: function ()
    {
        oktopus.dataClear();
        oktopus.dataInit();
        view.init();
        //setTimeout(oktopus.initSomeStuff, data.timeout);
        oktopus.initSomeStuff();
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
        if (numbers.length != 0) {
            setTimeout(oktopus.initSomeStuff(), 1000);
        }
    },

    aussieben: function ()
    {
        data.aktuellePrimzahl = numbers.shift();

        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] % data.aktuellePrimzahl == 0) {
                numbers.splice(i, 1);
            }
        }

        for (var y = 0; y < data.zahlen.length; y++) {
            if (data.zahlen[y].nummer % data.aktuellePrimzahl == 0 && data.zahlen[y].ausgesiebt == false && data.zahlen[y].nummer != data.aktuellePrimzahl) {
                data.zahlen[y].ausgesiebt = true;
            }
        }
    }
}

var view = {
    init: function()
    {
        for (var i = 0; i <= data.aktuelleZeile; i++) {
            $('#tabelle > tbody').append('<tr></tr>');

            for (var y = 0; y <= data.gesSpalte; y++) {
                var cellId = '<td id="counter" ></td>';
                var replacement = "zeile" + i + "Spalte" + y;

                cellId = cellId.replace("counter", replacement);
                $('#tabelle > tbody tr:last').append(cellId);
            }
        }
    },


    render: function()
    {
        for (var i = 0; i < data.zahlen.length; i++) {
            var cellId = "zeile" + data.zahlen[i].zeile + "Spalte"+ data.zahlen[i].spalte;
            if (data.zahlen[i].ausgesiebt == false) {
                $("#" + cellId).html(data.zahlen[i].nummer);
                //console.log(data.zahlen[i].nummer);
            }
            else{
                $("#" + cellId).html(" ");
                //console.log(data.zahlen[i].nummer);
            }
        }
    }
}