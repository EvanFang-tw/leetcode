import { expect } from "chai";
import { romanToInt } from "../../src/13/romanToInt";

describe("romanToInt", () => {
  it("should work", () => {
    expect(romanToInt("I")).equals(1);
    expect(romanToInt("III")).equals(3);
    expect(romanToInt("IV")).equals(4);
    expect(romanToInt("IX")).equals(9);
    expect(romanToInt("LVIII")).equals(58);
    expect(romanToInt("MCMXCIV")).equals(1994);
    expect(romanToInt("MCDLXXVI")).equals(1476);
  })
})