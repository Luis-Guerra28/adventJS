/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const ORNAMENTS_VALUES = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }
  let values = ornaments.split('').map((ornament, index, arr) => {
    let nextOrnament = arr[index + 1]
    let nextValue = ORNAMENTS_VALUES[nextOrnament]
    let value = ORNAMENTS_VALUES[ornament]
    return (nextValue > value) ? -value : value
  })
  let result = values.reduce((acc, val) => acc += val)
  if (isNaN(result)) return undefined
  return result
}