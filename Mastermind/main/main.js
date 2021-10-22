var content = new model();
// console.log("main");
render(content.createTable());


var color = "";
var farben = content.randomizeSolution();
// console.log(farben);
for (let index = 0; index < farben.length; index++) {
    switch (farben[index]) {
        case 1: 
            color = "red";
            break;
        case 2: 
            color = "blue";
            break;
        case 3: 
            color = "yellow";
            break;
        case 4: 
            color = "violet";
            break;
        case 5: 
            color = "green";
            break;
        case 6: 
            color = "orange";
            break;
    }
    // console.log(color);
    implementSolution(index, color);
}