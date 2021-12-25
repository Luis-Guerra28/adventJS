function countDecorations(bigTree) {
    let decoration = 0;

    decoration += (bigTree.left) ? countDecorations(bigTree.left) : 0;
    decoration += (bigTree.right) ? countDecorations(bigTree.right) : 0;

    decoration += bigTree.value;

    return decoration;
}
