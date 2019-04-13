module.exports = (first, ...args) => {
  let divResult = 1;
  return args.reduce(function(agg, val) {
    if (val == 0) {
      throw "Error";
    } else {
      divResult = agg /= val;
      return divResult;
    }
  }, first);
};
