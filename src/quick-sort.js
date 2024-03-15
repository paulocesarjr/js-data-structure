/**
 * @param {number|Array} list - List to sort
 * @returns {number|Array} – Sorted list
 */
function quickSort(list = []) {
  if (list.length < 2) {
    return list
  } else {
    const pivot = list[0]
    const minors = []
    const biggers = []

    for (let i = 1; i < list.length; i++) {
      if (list[i] <= pivot) {
        minors.push(list[i])
      } else {
        biggers.push(list[i])
      }
    }

    return quickSort(minors).concat([pivot]).concat(quickSort(biggers))
  }
}

export { quickSort }
