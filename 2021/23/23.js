function canReconfigure(from, to) {
    const listFrom = [],
        listTo = [];

    let reconfigure = true;

    if (from.lenght !== to.lenght) reconfigure = false;

    for (let i in from) {

        if (listFrom.indexOf(from[i]) !== listTo.indexOf(to[i])){
            reconfigure = false;
        }

        listFrom.push(from[i]);
        listTo.push(to[i]);
    }
    return reconfigure;
}
