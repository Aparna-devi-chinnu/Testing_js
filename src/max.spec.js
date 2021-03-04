const max = require("./max");

describe("Maximum", () => {
  it("Maximum of [1,2,3,4] is 4", () => {
    expect(max([1, 2, 3, 4])).toEqual(4);
  });
});
