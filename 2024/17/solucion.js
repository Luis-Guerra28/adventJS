/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  
  const bombasAdyacentes = (x, y) => {
    let bombs = 0

    let yStart = (y-1 < 0)
    ? 0
    : y-1
    
    let yEnd = (y+1 > grid.length-1)
    ? grid.length -1
    : y+1

    let xStart = (x-1 < 0)
    ? 0
    : x-1
    
    let xEnd = (x+1 > grid[0].length-1)
    ? grid[0].length-1
    : x+1
    
    for (let i=yStart; i <= yEnd; i++) {
      for (let j=xStart; j <= xEnd; j++){
        
        if (i === y && j === x) continue
        if (grid[i][j]) bombs++
      }
    }
    return bombs
  }

  const numberBombsArray = [];
  for (let k = 0; k < grid.length; k++) {
    numberBombsArray.push(new Array(grid[0].length).fill(null));
  }

  grid.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      numberBombsArray[rowIndex][columnIndex] = bombasAdyacentes(columnIndex, rowIndex)
    })
  })
  return numberBombsArray
}