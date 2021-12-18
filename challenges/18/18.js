function fixFiles(files) {
    const filesRead = {};
    const filesRenamed = [];
    files.forEach((item) => {
        if (typeof filesRead[item] == "undefined") {
            filesRead[item] = 0;
        } else {
            filesRead[item] ++;
            item += "(" + filesRead[item] + ")" ;
        }
        filesRenamed.push(item);
    })
    return filesRenamed;
}
