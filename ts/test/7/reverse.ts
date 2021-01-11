import { reverse } from "../../src/7/reverse";
import { expect } from "chai";

describe("#7 reverse", () => {
  it("reverse should work", () => {
    expect(reverse(0)).equals(0);
    expect(reverse(123)).equals(321);
    expect(reverse(1223)).equals(3221);
    expect(reverse(-123)).equals(-321);
    expect(reverse(-12311)).equals(-11321);
    expect(reverse(120)).equals(21);
    expect(reverse(1534236469)).equals(0);
  });
});
