function maxProfit(prices) {
    var remanente = -1;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let resta = prices[j] - prices[i];

            if ((resta > 0) && (remanente < resta)) remanente = resta;
        }
    }
    return remanente;
}
