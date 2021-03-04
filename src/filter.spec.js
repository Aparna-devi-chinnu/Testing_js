const bool = require("./filter");

describe("Filter", () => {
  it("Filter of ([],true) is []", () => {
    expect(bool([], true)).toEqual([]);
  });
  it("Filter of ([1,2,3],true) is [1,2,3]", () => {
    expect(bool([1, 2, 3], true)).toEqual([1, 2, 3]);
  });
  it("Filter of ([1,2,3],false) is []", () => {
    expect(bool([1, 2, 3], false)).toEqual("[]");
  });
  it("Filter of ([1,2,3],1) is [2,3]", () => {
    expect(bool([1, 2, 3], 1)).toEqual([2, 3]);
  });
  it("Filter of (['a','B','c','D'],filterUpperCase) is ['B','D']", () => {
    expect(bool(["a", "B", "c", "D"], "filterUpperCase")).toEqual(["B", "D"]);
  });
});
