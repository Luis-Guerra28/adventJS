function countPackages(carriers, carrier) {
    let team = [carrier];
    let totalPackages = 0;
    for (let currCarrier of carriers) {
        let nameCarrier = currCarrier[0];
        let packagesCarrier = currCarrier[1];
        let subordinates = currCarrier[2];

        if (team.includes(nameCarrier)) {
            totalPackages += packagesCarrier;
            team.push(...subordinates);
        }
    }
    return totalPackages;
}
