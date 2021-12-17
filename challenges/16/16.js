function decodeNumbers(symbols) {
    const numbers = {".": 1, ",": 5, ":": 10, ";": 50,  "!": 100};
    let result = 0

    for (let i = 0; i < symbols.length; i++) {
        let currSymbol = symbols[i];
        let nextSymbol = symbols[i + 1];

        result = (numbers[currSymbol] < numbers[nextSymbol])
            ? result -= numbers[currSymbol]
            : result += numbers[currSymbol];

    }
    return result;
}
