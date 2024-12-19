function isValid(letter) {
    let letterBefore = "";
    let openParenthesis = 0;
    for (let i in letter) {
        if ((letter[i] == ")") && (letterBefore == "(")) return false;
        if ((letter[i] == "{") || (letter[i] == "[")) return false;
        if (letter[i] == "(") openParenthesis++;
        if (letter[i] == ")") openParenthesis--;
        if (openParenthesis < 0) return false;

        letterBefore = letter[i]
    }

    return (openParenthesis > 0) ? false : true;
}
