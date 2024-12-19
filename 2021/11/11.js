function shouldBuyFidelity(times) {
    let card = 250;
    let normal = 12 * times;
    for (let i = 1; i <= times; i++) {
        card += 12 * (0.75 ** i);
    }
    return (normal > card)
}
