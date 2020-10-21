var numberOfCats = 5;

var cat = {
    id,
    name,
    clickCount,
    isVisible
}

catArray = [];

function createAllVariables(){
    for(var i = 0; i < numberOfCats; i++){
        cat = {id:i, name:"standart", clickCount:0, isVisible:false};
        catArray[i] = cat;
        setCatName(i);
    }
}

function setCatName(id){
    catArray.forEach(cat => {
        if (cat.id == id) {
            cat.name = window.prompt("Enter Name of Cat" + id + ":");
            document.getElementById("name" + id).innerHTML = cat.name;
            document.getElementById("ausw" + id).innerHTML = cat.name;
        }
    });
}

function increaseNumber(id){
    catArray.forEach(cat => {
        if (cat.id == id) {
            cat.clickCount++;
            document.getElementById("click" + id).innerHTML = cat.clickCount;
        }
    });
}

function hideDivs(id){
    catArray.forEach(cat => {
        if (cat.id == id) {
            if (cat.isVisible == false) {
                cat.isVisible = true;
                document.getElementById("cat" + id).style.display = 'inline-block';
            }
        }
        else{
            cat.isVisible = false;
            document.getElementById("cat" + id).style.display = 'none';
        }
    });
}