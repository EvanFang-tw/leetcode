import { expect } from "chai";
import { isValid } from "../../src/20/isValid";

describe("isValid", () => {
  it("should work", () => {
    expect(isValid("()")).equals(true);
    expect(isValid("()[]")).equals(true);
    expect(isValid("()[]{}")).equals(true);
    expect(isValid("{()[]{}}")).equals(true);

    expect(isValid("(")).equals(false);
    expect(isValid(")")).equals(false);
    expect(isValid("(]")).equals(false);
    expect(isValid("([)]")).equals(false);
  });
});
