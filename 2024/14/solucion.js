/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  reindeer = reindeer.sort()
  stables = stables.sort()

  moves = 0
  reindeer.forEach((r, index) => {
    moves += Math.abs(r - stables[index])
  })
  return moves
}