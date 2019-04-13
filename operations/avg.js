module.exports = (...args) => {
  let sum = 0;
  return args.reduce(function(agg, val) {
    sum += val;
    return sum / args.length;
  }, 0);
};
