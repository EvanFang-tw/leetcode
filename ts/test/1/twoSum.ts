import { expect } from "chai";
import { twoSum, twoSum_map } from "../../src/1/twoSum";

describe("twoSum", () => {
  it("should work", () => {
    expect(twoSum([2, 7, 11, 15], 9)).deep.equals([0, 1]);
    expect(twoSum([3, 2, 4], 6)).deep.equals([1, 2]);
    expect(twoSum([3, 3], 6)).deep.equals([0, 1]);
  });
});

describe("twoSum_map", () => {
  it("should work", () => {
    expect(twoSum_map([2, 7, 11, 15], 9)).deep.equals([0, 1]);
    expect(twoSum_map([3, 2, 4], 6)).deep.equals([1, 2]);
    expect(twoSum_map([3, 3], 6)).deep.equals([0, 1]);
  });
});
