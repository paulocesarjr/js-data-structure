import { binarySearch } from "./binary-search.js"
import { selectionSort } from "./selection-sort.js"

const list = [4, 1, 43, 3, 12, 5]
const searchItem = 12

console.log(">>> Binary Search - Finded Index:", binarySearch(list, searchItem))
console.log(">>> Selection Sort - Sorted List:", selectionSort(list))
