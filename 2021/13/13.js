function wrapGifts(gifts) {
    let asteriscos = "*".repeat(gifts[0].length + 2);
    let asterisc = (item) => { return "*" + item + "*" };
    let giftWraped = gifts.map(asterisc);
    return [asteriscos, ...giftWraped, asteriscos]
}
