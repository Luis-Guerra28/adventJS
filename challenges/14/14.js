function missingReindeer(ids) {
    let maxId = Math.max(...ids);
    for (let id = 0; id < ids.length; id++) {
        if (!ids.includes(id)) return id;
    }
    return maxId + 1;
}
