var loecher = 4;
var table = "";
var idMushroom = "";
var idNail = "";
var row = 1;

class model{
    constructor(){
        console.log("model");
        return this.createTable();
    }

    *createTable() {
        table = "<svg viewBox='0 0 1000 120'> <circle class='mushroom' cx='255' cy='55' r='35'/><circle class='mushroom' cx='365' cy='55' r='35'/><circle class='mushroom' cx='475' cy='55' r='35'/><circle class='mushroom' cx='585' cy='55' r='35'/>"
        for (let index = 0; index < 12; index++) {
            row++;
            idMushroom = `${index}` + row;
            idNail = `${index}` + row;
            table += "<svg viewBox='0 0 1000 120'> <circle class='mushroom' cx='255' cy='55' r='35'/><circle class='mushroom' cx='365' cy='55' r='35'/><circle class='mushroom' cx='475' cy='55' r='35'/><circle class='mushroom' cx='585' cy='55' r='35'/>"
            table += "<circle class='nail' cx='680' cy='30' r='15'/><circle class='nail' cx='680' cy='80' r='15'/><circle class='nail' cx='730' cy='30' r='15'/><circle class='nail' cx='730' cy='80' r='15'/></svg>"
        }
        return table;
    }

}