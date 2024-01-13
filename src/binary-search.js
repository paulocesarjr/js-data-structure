/**
 * @param {number|Array} list - List to apply binary search
 * @param {number} searchItem - Item to be found in the list
 * @returns {number} – Index of the found item
 */
function binarySearch(list = [], searchItem) {
  let lower = 0
  let high = list.length - 1
  let middle, currentItem

  while (lower <= high) {
    middle = Math.floor((lower + high) / 2)
    currentItem = list[middle]

    if (currentItem === searchItem) {
      return middle
    }

    if (currentItem > searchItem) {
      high = middle - 1
    } else {
      lower = middle + 1
    }
  }

  return -1
}

export { binarySearch }
