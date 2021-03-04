const maps = (ls, func) => {
  if (func === "cube") {
    return ls.map(cube);
  } else if (func === "identity") {
    return ls.map(identity);
  }
  function cube(num) {
    return num * num * num;
  }
  function identity(num) {
    return num;
  }
};
module.exports = maps;
