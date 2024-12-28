/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function isRobotBack(moves) {
  const revertMove = {
    'R': 'L',
    'L': 'R',
    'D': 'U',
    'U': 'D',
  }
  const directions = {
    'R': [1,0],
    'L': [-1,0],
    'D': [0,-1],
    'U': [0,1],
  }

  let regex = /[*!?]?[RLUD]/g
  let position = [0, 0]
  let listMoves = moves.match(regex)
  listMoves = listMoves.flatMap((move, index, arr) => {
    let prevMove = arr[index-1]
    move = (move.includes('*')) ? [move[1], move[1]] : move
    move = (move.includes('!')) ? revertMove[move[1]] : move
    if (move.includes('?')) {
      move = (arr.slice(0, index).some((el) => el[el.length-1] === move[1])) 
        ? []
        : move[1]
    }
    return move
  })
  listMoves.forEach(move => {
    let [dx,dy] = directions[move]
    position[0] += dx
    position[1] += dy
  })
  return (position.every((el) => el === 0)) ? true : position
}