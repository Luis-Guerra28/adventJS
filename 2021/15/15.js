function checkSledJump(heights) {
    let fall = false;
    for (let i in heights) {
        i = parseInt(i);

        if (heights[i] > heights[i + 1]) fall = true;
        if (heights[i] == heights[i + 1]) return false
        if (fall && (heights[i] <= heights[i + 1])) return false;
    }
    return (!fall) ? false : true;
}
