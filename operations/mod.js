module.exports = (first, ...args) => {
  var valid = require("./validator");
  return args.reduce(function(agg, val) {
    if (val == 0) {
      throw "Error";
    } else {
      return (agg %= val);
    }
  }, first);
};
