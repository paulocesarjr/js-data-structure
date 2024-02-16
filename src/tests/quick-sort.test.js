import { quickSort } from "../quick-sort"

describe("Quick Sort", () => {
  it("should sort a list", () => {
    const list = [21, 2, 19, 11, 102]
    expect(quickSort(list)).toEqual([2, 11, 19, 21, 102])
  })
})
