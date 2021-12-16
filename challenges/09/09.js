function groupBy(collection, it) {
    let output = {};
    collection.map((item) => {
        let key = (typeof it === "function") ? it(item) : item[it];
        (output[key]) ? output[key].push(item) : output[key] = [item]
    });
    return output;
}
