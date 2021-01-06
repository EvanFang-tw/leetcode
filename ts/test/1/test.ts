import { expect } from "chai";
import { add } from "../../src/1/lib";

describe("foo", () => {
  it("ok", () => {
    expect(add(1, 2)).equals(3);
  });
});
