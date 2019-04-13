module.exports = value => {
  if (isNaN(value)) {
    console.log("eee");
    throw "Error";
  }
};
