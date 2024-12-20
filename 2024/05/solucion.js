/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    const orderBySize = {}
    const result = []
    shoes.forEach(shoe => {
      orderBySize[shoe.size] ??= {'I': 0, 'R': 0}
      
      orderBySize[shoe.size][shoe.type] += 1
  
      if (Object.values(orderBySize[shoe.size]).every(el => el >= 1)) {
        result.push(shoe.size)
        orderBySize[shoe.size]['I'] -= 1
        orderBySize[shoe.size]['R'] -= 1
      }
    })
  
    return result
}