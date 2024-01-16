/**
 * @param {number|Array} list - List to sum
 * @returns {number} – A summed list
 */
function sumWithDivideAndConquer(list = []) {
  if (list.length === 0) return 0
  return list[0] + sumWithDivideAndConquer(list.slice(1))
}

export { sumWithDivideAndConquer }
