/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  let counterLine = 0
  let memory = {}
  let maxIterations = 1000
  let iterationCount = 0

  while (counterLine < instructions.length && iterationCount < maxIterations) {
    let line = instructions[counterLine]
    let [compilerFunction, valueX, valueY] = line.split(' ')

    if (compilerFunction === 'MOV') {
      memory[valueY] = (!isNaN(valueX))
        ? Number(valueX)
        : memory[valueX]
    }
    if (compilerFunction === 'INC') {
      memory[valueX] ??= 0
      memory[valueX]++
    }
    if (compilerFunction === 'DEC') {
      memory[valueX] ??= 0
      memory[valueX]--
    }
    if (compilerFunction === 'JMP' && memory[valueX] === 0) {
      counterLine = (isNaN(valueX))
        ? Number(valueY) - 1
        : memory[valueY] - 1
    }
    counterLine++
    iterationCount++
  }
  if (iterationCount >= maxIterations) {
    console.error("Se ha detectado un posible bucle infinito.");
    return null;
  }
  return memory['A']
}

