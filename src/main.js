import { binarySearch } from "./binary-search.js"
import { selectionSort } from "./selection-sort.js"
import { sumWithDivideAndConquer } from "./divide-and-conquer.js"
import { quickSort } from "./quick-sort.js"

const list = [4, 1, 43, 3, 12, 5]
const listToSum = [10, 10, 10]
const searchItem = 12

console.log(">>> Binary Search - Finded Index:", binarySearch(list, searchItem))
console.log(">>> Selection Sort - Sorted List:", selectionSort(list))
console.log(
  ">>> Divide and Conquer - Summed List:",
  sumWithDivideAndConquer(listToSum)
)
console.log(">>> Quick sort - Sorted List:", quickSort([23, 21, 2, 92, 11]))
