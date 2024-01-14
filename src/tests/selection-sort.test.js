import { selectionSort } from "../selection-sort"

describe("Selection Sort", () => {
  it("should sort a list", () => {
    const list = [3, 5, 1, 23, 8]
    expect(selectionSort(list)).toEqual([23, 8, 5, 3, 1])
  })
})
