/**
 * @param {number|Array} list - List to sort
 * @returns {number|Array} – Sorted list
 */
function quickSort(list = []) {
  if (list.length < 2) {
    return list
  } else {
    const pivo = list[0]
    const menores = []
    const maiores = []

    for (let i = 1; i < list.length; i++) {
      if (list[i] <= pivo) {
        menores.push(list[i])
      } else {
        maiores.push(list[i])
      }
    }

    return quickSort(menores).concat([pivo]).concat(quickSort(maiores))
  }
}

export { quickSort }
