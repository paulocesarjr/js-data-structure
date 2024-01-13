function searchLower(list = []) {
  let lower = list[0]
  let lowerIndex = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i] < lower) {
      lower = list[i]
      lowerIndex = i
    }
  }

  return lowerIndex
}

/**
 * @param {number|Array} list - List to sort
 * @returns {number|Array} – Sorted list
 */
function selectionSort(list = []) {
  const sortedList = []

  while (list.length > 0) {
    let lowerIndex = searchLower(list)
    sortedList.unshift(list.splice(lowerIndex, 1)[0])
  }

  return sortedList
}

export { selectionSort }
