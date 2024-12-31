/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  const regex = /([a-zA-Z])\1/g 
  if (s.match(regex)) {
    s = s.replace(regex, '')
    s = removeSnow(s)
  }
  return s;
}
