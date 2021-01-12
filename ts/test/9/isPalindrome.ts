import { expect } from "chai";
import { isPalindrome } from "../../src/9/isPalindrome";

describe("isPalindrome", () => {
  it("should work", () => {
    expect(isPalindrome(121)).equals(true);
    expect(isPalindrome(1221)).equals(true);
    expect(isPalindrome(12321)).equals(true);
    expect(isPalindrome(0)).equals(true);

    expect(isPalindrome(10)).equals(false);

    expect(isPalindrome(-101)).equals(false);
  });
});
