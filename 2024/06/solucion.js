function inBox(box) {
    const objectiveLine = box.find(line => line.includes('*'))
    const objectiveLineIndex = box.findIndex(line => line.includes('*'))
    
    if (objectiveLineIndex === -1) return false //Si no esta 
    if (objectiveLineIndex === 0) return false //Si esta en la primera fila 
    if (objectiveLineIndex === box.length-1) return false // O en la ultima
  
    if (objectiveLine[0] === '*') return false
    if (objectiveLine[objectiveLine.length-1] === '*') return false
  
    return true
  }