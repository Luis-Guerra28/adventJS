/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  const regex = /[0-9]*_([a-zA-Z0-9_-]*.[a-zA-Z]*)/
  return filename.match(regex)[1]
}