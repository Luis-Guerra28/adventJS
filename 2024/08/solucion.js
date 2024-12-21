/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let pista = (reno, tam, indice) => {
      let carril = '~'.repeat(tam) //Creamos el carril
      if (reno > 0){
        carril = carril.split('').fill('r', reno, reno+1).join('')
      } else if (reno < 0){
        carril = carril.split('').fill('r', tam+reno, tam+reno+1).join('')
      } carril = carril.split('').fill('r', tam+reno, tam+reno+1).join('')
      
      carril += ` /${indice}` //Agregamos el numero
      return carril
    }
    let race = ''
    indices.forEach((reindeer, index) => {
      race += ' '.repeat(indices.length - index - 1)
      race += `${pista(reindeer, length, index+1)}\n`
    })
    return race.slice(0,-1)
}