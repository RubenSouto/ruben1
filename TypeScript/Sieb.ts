function Sieb(max) {
    let numbers : number[] = [];
    var primZahlen : number[] = [];

    for(var i= 0; i <= max; i++){
        numbers[i] = i;
    }

    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());

        for (var i = 0; i <= numbers.length; i++){
            if (numbers[i] % primZahlen[primZahlen.length - 1] == 0){
                numbers.splice(i, 1);
            }
        }
    }
    return primZahlen;
}
console.log(Sieb(200));