class View{

    constructor(){
        this.loadContent();
    }

    loadContent(){
        var table = new Table();
        var tableContent = table.generate();
        $("#body").innerHTML += tableContent;
    }
}