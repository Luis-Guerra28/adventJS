/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regex = /\([^()]*\)/;
  if (!packages.match(regex)) return packages
  while (packages.match(regex)) {
    let parenthesis = packages.match(regex)[0] ?? 0
    const newText = parenthesis.slice(1, -1).split('').reverse().join('')
    packages = packages.replace(parenthesis, newText)
  }
  return packages
}
