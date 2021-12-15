function sumPairs(numbers, result) {
    for (let i = 0; i < (numbers.length - 1); i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == result) return [numbers[i], numbers[j]];
        }
    }
    return null;
}
