var table = "";
var idMushroom = "";
var idNail = "";
var row = 0;
var solution = [];

class model{
    constructor() {
    }

    createTable() {
        table = "<div><svg viewBox='0 0 1000 120'> <circle class='mushroom' id='1' cx='255' cy='55' r='35'/><circle class='mushroom' id='2' cx='365' cy='55' r='35'/><circle class='mushroom' id='3' cx='475' cy='55' r='35'/><circle class='mushroom' id='4' cx='585' cy='55' r='35'/></div>"
        for (let index = 0; index < 12; index++) {
            row++;
            idMushroom = "m" + `${index}` + row;
            idNail = "n" + `${index}` + row;
            table += "<div><svg viewBox='0 0 1000 120'> <circle class='mushroom' cx='255' cy='55' r='35'/><circle class='mushroom' cx='365' cy='55' r='35'/><circle class='mushroom' cx='475' cy='55' r='35'/><circle class='mushroom' cx='585' cy='55' r='35'/>"
            table += "<circle class='nail' cx='680' cy='30' r='15'/><circle class='nail' cx='680' cy='80' r='15'/><circle class='nail' cx='730' cy='30' r='15'/><circle class='nail' cx='730' cy='80' r='15'/></svg></div>"
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