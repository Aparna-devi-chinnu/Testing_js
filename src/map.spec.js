const maps = require("./map.js");

describe("Map", () => {
  it("Map of ([1,2,3],cube) is [1,8,27]", () => {
    expect(maps([1, 2, 3], "cube")).toEqual([1, 8, 27]);
  });
  it("Map of ([],cube) is []", () => {
    expect(maps([], "cube")).toEqual([]);
  });
  it("Map of ([1,2,3],identity) is [1,8,27]", () => {
    expect(maps([1, 2, 3], "identity")).toEqual([1, 2, 3]);
  });
});
