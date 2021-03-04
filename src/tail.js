const tail = ls => {
  if (ls.length === 0) return "[]";

  return ls.slice(1);
};
module.exports = tail;
