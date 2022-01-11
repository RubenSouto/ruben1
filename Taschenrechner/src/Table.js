class Table{
  setZeichen(){
    this.zeichen = ["", "%", "CE", "C", "Delete", "1/x", "^2", "2Wurzel", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
  }

  generate(){
    this.setZeichen();
    var height = 0;
    var width = 0;
    var content = "<table id='table'>";
    var counter = 0;
    
    while(height < 7){
      content += "<tr>";
      if (height == 0) {
        //Oberste Reihe leer lassen
        content += "<th id="+counter+">"+this.zeichen[counter]+"</th>";
        counter++;
      }
      else{

        while(width < 4){
          //Zellen mit richtigen Werten befüllen
          content += "<td id="+counter+">"+this.zeichen[counter]+"</td>";
          counter++;
          width++;
        }

      }
      content += "</tr>";
      width = 0;
      height++;
    }
    content += "</table>";
    return content;
  }
}
