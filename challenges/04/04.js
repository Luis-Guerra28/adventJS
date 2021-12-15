function createXmasTree(height) {
    var arbol = "";
    var ref = 1;
    for (let i = 0; i < height; i++) {
        arbol += "_".repeat(height - (i + 1)) + "*".repeat(ref) + "_".repeat(height - (i + 1)) + "\n"
        ref += 2;
    }
    arbol += ("_".repeat(height - 1) + "#" + "_".repeat(height - 1) + "\n");
    arbol += ("_".repeat(height - 1) + "#" + "_".repeat(height - 1));

    return arbol;
}
