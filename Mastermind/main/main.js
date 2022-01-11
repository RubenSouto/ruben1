var content = new model();
render(content.createTable());


var color = "";
var farben = content.randomizeSolution();

for (let index = 1; index <= farben.length; index++) {

    switch (farben[index-1]) {
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

    implementSolution(index, color);
}