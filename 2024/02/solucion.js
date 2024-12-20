/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const namesLengths = names.map(name =>  name.length)
    const maxLength = Math.max(...namesLengths)
  
    const namesFormated = names.map(name => `* ${name.padEnd(maxLength)} *`)
    const strip = '*'.repeat(maxLength+4)
    
    const frame = [strip, ...namesFormated, strip].join('\n')
  
    return frame
  }
