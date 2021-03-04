const bool = (ls, value) => {
  if (value === true) return ls;
  if (value === false) return "[]";
  if (value === "filterUpperCase") {
    const array = ls.filter(ls => ls.match(/[A-Z]/));
    console.log(array);
    return array;
  }
  if (value !== 0) {
    const array = ls.filter(ls => ls > value);
    return array;
  }
};
module.exports = bool;
