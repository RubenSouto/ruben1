class View{
    constructor(){
        var table = new Table();
        var content = table.generate()
        document.getElementById("table").innerHTML(content);
    }
}