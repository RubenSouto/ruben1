describe("Table", function(){
  var table;

  beforeEach(function () {
    table = new Table();
    table.setZeichen();
    table.generate();
  });

  it("schould be able to generate", function(){
    //Der Table sollte dann 4 Spalten und 7 Reihen beinhalten, wobei die erste Reihe nur ein "Kästchen" beinhaltet (für Eingabe)
    expect(document.getElementById("table").childElementCount).toEqual(32);
  });

  it("should be able to generate the right Array for layout", function(){
    //Der Array soll mit den richtigen Zeichen gefüllt sein
    expect(table.zeichen[2]).toEqual("%");
    expect(table.zeichen[10]).toEqual("7");
    expect(table.zeichen[14]).toEqual("4");
    expect(table.zeichen[25]).toEqual("=");
  });

  it("should have the right layout", function(){
    //Das Layout muss mit dem Array überein stimmen, jede Zelle hat eine ID die mit der Stelle im Array gleich ist
    expect(document.getElementById("2").textContent).toEqual("%");
    expect(document.getElementById("10").textContent).toEqual("7");
    expect(document.getElementById("14").textContent).toEqual("4");
    expect(document.getElementById("25").textContent).toEqual("=");
  });
});