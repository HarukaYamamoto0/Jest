const sum = require("../../sum");

describe("Testing the jest", () => {
  it("should add 1 + 2 and return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
