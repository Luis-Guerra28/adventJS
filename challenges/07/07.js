function contains(store, product) {
    const values = Object.values(store);
    for (let i = 0; i < values.length; i++) {
        if (values[i] === product) return true;

        if (typeof values[i] === 'object') {
            if (contains(values[i], product)) return true;
        }
    }
    return false;
}
