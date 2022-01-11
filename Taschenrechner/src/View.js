class View{
    loadContent(){
        var table = new Table();
        var tableContent = table.generate();
        $("#table").innerHTML += tableContent;
        alert("Hallo");
    }
}