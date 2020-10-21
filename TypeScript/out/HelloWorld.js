var message = 'Hello World';
console.log(message);

function siebDesEratothenes(range) {
    var numbers = [];
    var primZahlen = [];
    for (var x = 2; x <= range; x++) {
        numbers.push(x);
    }
    while (numbers.length > 0) {
        primZahlen.push(numbers.shift());
        for (var y = 0; y <= numbers.length; y++) {
            if (numbers[y] % primZahlen[primZahlen.length - 1] == 0) {
                numbers.splice(y, 1);
            }
        }
    }
    return primZahlen;
}
console.log(siebDesEratothenes(200));
//# sourceMappingURL=HelloWorld.js.map