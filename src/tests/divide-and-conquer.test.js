import { sumWithDivideAndConquer } from "../divide-and-conquer"

describe("Selection Sort", () => {
  it("should sum values of the list", () => {
    const listToSum = [10, 10, 10]
    expect(sumWithDivideAndConquer(listToSum)).toEqual(30)
  })
})
