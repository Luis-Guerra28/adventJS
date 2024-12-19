function checkIsSameTree(treeA, treeB) {
    if ((treeA !== null) && (treeB == null)) return false;
    if ((treeB !== null) && (treeA == null)) return false;
    if ((treeB == null)  && (treeA == null)) return true;

    if (treeA.value !== treeB.value)         return false;

    return (checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right));

}
