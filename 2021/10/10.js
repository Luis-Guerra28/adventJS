function getCoins(change) {
    let coins = [50, 20, 10, 5, 2, 1];
    let result = [];
    coins.forEach((coin, i) => {
        result[i] = Math.floor(change / coin);
        change %= coin;
    })
    return result.reverse();
}
