import { expect } from "chai";
import { longestCommonPrefix } from "../../src/14/longestCommonPrefix";

describe("#14 longestCommonPrefix", () => {
  it("should work", () => {
    expect(longestCommonPrefix([])).equals("");
    expect(longestCommonPrefix(["a"])).equals("a");
    expect(longestCommonPrefix(["a", "ab"])).equals("a");
    expect(longestCommonPrefix(["flower", "flow", "flight"])).equals("fl");
    expect(longestCommonPrefix(["dog","racecar","car"])).equals("");
  });
});
