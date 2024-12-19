function getMinJump(obstacles) {
    let limit = Math.max(...obstacles);
    for (let i = 1; i <= limit; i++) {
        let crash = false;
        for (let j = i; j <= limit; j += i) {
            if (obstacles.includes(j)) {
                crash = true;
                break;
            }
        }
        if (!crash) return i;
    }
}
