function listGifts(letter) {
    letter = letter.split(" ");
    letter = letter.filter(function (gift) {
        if ((gift !== " ") && (gift.charAt(0) !== "_")) {
            return gift;
        }
    });

    var gifts = {};

    for (let i of letter) {
        (gifts[i]) ? gifts[i]++ : gifts[i] = 1;
    }

    return gifts
}
