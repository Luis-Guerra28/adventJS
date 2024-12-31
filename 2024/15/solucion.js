/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  let columnNames = Object.keys(data[0])

  let columnWidth = (columnName) => {
    
    let allStrings = data.map(register => register[columnName].toString())
    allStrings.push(columnName)
  
    return Math.max(...allStrings.map(str => str.length))
  }
  
  let capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  let widths = columnNames.map(columnName => columnWidth(columnName))

  let horizontalLine = 
    widths
    .map(widthColumn => `+${'-'.repeat(widthColumn+2)}`)
    .join('')
    + '+'

  let header = 
    columnNames
    .map((columnName, index) => `| ${capitalizeString(columnName).padEnd(widths[index]+1)}`)
    .join('')
    + '|'  

  let registers = 
    data
    .map(register => 
      Object.values(register)
      .map((value, index) => `| ${value.toString().padEnd(widths[index]+1)}`)
      .join('')
      + '|'
    )
    .join('\n')

  let table = [horizontalLine, header, horizontalLine, registers, horizontalLine ]

  return table.join('\n')
}
