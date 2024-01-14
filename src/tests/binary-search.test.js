import { binarySearch } from "../binary-search.js"

describe("Binary Search", () => {
  it("should return finded index", () => {
    const list = [3, 5, 1, 23, 8]
    const searchItem = 23
    expect(binarySearch(list, searchItem)).toBe(3)
  })

  it("should return -1 if not found item", () => {
    const list = [3, 5, 1, 23, 8]
    const searchItem = 21
    expect(binarySearch(list, searchItem)).toBe(-1)
  })
})
