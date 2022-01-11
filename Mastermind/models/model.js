var idMushroom = "";
var idNail = "";
var row = 0;
var solution = [];

class model{
    constructor() {
    }

    createTable() {
        var table = "<div><svg viewBox='0 0 1000 120'> <circle class='mushroom' id='1' cx='255' cy='55' r='35'/><circle class='mushroom' id='2' cx='365' cy='55' r='35'/><circle class='mushroom' id='3' cx='475' cy='55' r='35'/><circle class='mushroom' id='4' cx='585' cy='55' r='35'/></div>"

        for (let index = 0; index < 12; index++) {
            row++;

            idMushroom = "m" + 1 + row;
            idNail = "n" + 1 + row;

            table += "<div><svg viewBox='0 0 1000 120'> <circle class='mushroom' id=\"" + idMushroom + "\" cx='255' cy='55' r='35'/>"
            idMushroom = "m" + 2 + row;
            table += "<circle class='mushroom' id=\"" + idMushroom + "\" cx='365' cy='55' r='35'/>";
            idMushroom = "m" + 3 + row;
            table += "<circle class='mushroom' id=\"" + idMushroom + "\" cx='475' cy='55' r='35'/>";
            idMushroom = "m" + 4 + row;
            table += "<circle class='mushroom' id=\"" + idMushroom + "\" cx='585' cy='55' r='35'/>";

            table += "<circle class='nail' id=\"" + idNail + "\" cx='680' cy='30' r='15'/>";
            idNail = "n" + 2 + row;
            table += "<circle class='nail' id=\"" + idNail + "\" cx='680' cy='80' r='15'/>";
            idNail = "n" + 3 + row;
            table += "<circle class='nail' id=\"" + idNail + "\" cx='730' cy='30' r='15'/>";
            idNail = "n" + 4 + row;
            table += "<circle class='nail' id=\"" + idNail + "\" cx='730' cy='80' r='15'/></svg></div>";
        }

        return table;
    }

    randomizeSolution() {
        for (let index = 0; index < 4; index++) {
            solution.push(this.randomIntFromInterval(1, 6));
        }
        return solution;
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}