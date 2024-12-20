/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let levels = ''
    const width = (height*2)-1

    for (let i=1; i<=width; i+=2){
      const relleno = '_'.repeat((width-i)/2)
      const sheets = ornament.repeat(i)
      
      levels += ''.concat(relleno, sheets, relleno, '\n')
    }

    let tronco = '_'.repeat((width-1)/2)
    tronco += '#'
    tronco += '_'.repeat((width-1)/2)

    const tree = [levels, tronco, '\n', tronco].join('')

  return tree
}