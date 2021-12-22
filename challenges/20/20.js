function pangram(letter) {
    const includesEn = letter.includes("ñ");
    letter = letter.toLowerCase().normalize("NFD");

    return [..."abcdefghijklmnopqrstuvwxyz"].every((item) => {
        return (letter.includes(item) && includesEn)
    })
}
