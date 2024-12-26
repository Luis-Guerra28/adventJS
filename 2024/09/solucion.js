/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let lineObjective = board.filter(line => line.includes('@'))[0]
  let x = lineObjective.indexOf('@')
  let y = board.findIndex(line => line == lineObjective)
  let target

  if (mov === 'U') {
    if (y-1 === -1) return 'crash'
    target = board[y-1][x]
  }  
  if (mov === 'D') {
    if (y+1 === board.length) return 'crash'
    target = board[y+1][x]
  }  
  if (mov === 'L') {
    if (x-1 === -1) return 'crash'
    target = board[y][x-1]
  }  
  if (mov === 'R') {
    if (x+1 === board[0].length) return 'crash'
    target = board[y][x+1]
  }  
  if (target === '·') return 'none'
  if (target === 'o') return 'crash'
  if (target === '*') return 'eat'
}
  