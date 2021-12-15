function contarOvejas(ovejas) {
    ovejas = ovejas.filter(function (oveja) {
        let color = oveja.color;
        let name = oveja.name.toLowerCase();
        if ((color == 'rojo') && (name.includes('n') && name.includes('a'))) {
            return oveja;
        }
    });
    return ovejas
}
