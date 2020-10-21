//Speichert die Länge des Arrays als Zahl (Anzahl Katzen)
var numberOfCats = 5;

// Array der alle Klicks speichert
var numbers = [];

//Wird gebraucht um Namen temporär zu speichern um diese zu setzen
var name;

//Array wird mit allen Katzen-Divs gefüllt
var elements = [];

/**
 * Erhöht die Klick-Anzahl des zur Katze gehörenden Index
 * @param {*} index
 */
function increaseNumber(index){
    numbers[index]++;
    document.getElementById("click" + index).innerHTML = numbers[index];
}

/**
 *Array wird befüllt
 * Methode für abfrage der Namen wird aufgerufen
 */
function createAllVariables(){
    for(var i = 0; i < numberOfCats; i++){
        numbers[i] = 0;
        setCatName(i);
    }
}

/**
 * Benutzer wird nach Namen für alle Katzen gefragt
 * @param {*} index 
 */
function setCatName(index){
    name = window.prompt("Enter Name of Cat" + index + ":");
    document.getElementById("name" + index).innerHTML = name;
    document.getElementById("ausw" + index).innerHTML = name;
}

/**
 * Je nach Namen der gedrückt wird werden die entsprechenden Divs ein/-ausgeblendet
 * @param {*} index 
 */
function hideDivs(index){
    elements = document.getElementsByClassName("cat");
    for (var i = 0; i < elements.length; i++) {
        if(i == index){
            document.getElementById("cat" + i).style.display = 'inline-block';
        }
        else{
            document.getElementById("cat" + i).style.display = 'none';
        }
    }
}