const OpFile = require("./operations/index");
const valid = require("./operations/validator");
const params = process.argv.slice(2);
// console.log(params);

// const result = params.reduce((accum, x) => {
//   const val = x.split("--");
//   return { ...accum, ...{ [val[0]]: [val[1]] } };
// }, {});
// let indexes = [];
// const result = params.filter(function(f) {
//   let i = 0;
//   let obj = {};
//   let operationIndex;
//   let operation;
//   if (f.startsWith("--")) {
//     console.log(f);
//     operationIndex = params.indexOf(f);
//     console.log(operationIndex);
//     oper = params.splice(operationIndex, i);
//     operation = oper.map(e1 => {
//       e1.split("--").pop();
//       return e1;
//     });
//     obj += { f: operationIndex };
//     i = i + 1;
//     indexes.push(operationIndex);
//   }
// console.log(operation);

//   const operationIndex = params.findIndex(item => item.startsWith("--"));
//   const operation = params.splice(operationIndex, 1).map(el => el.substring(2))[0];
// params.filter(p => if ())
// const result = { operation: [] }
// const val = x.split(" ");
// return { ...accum, ...{ [val[0]]: [val[1]] } };

//   return operation;
// });

let operationIndex2 = params.filter(function(p) {
  if (p.startsWith("--")) {
    return params.indexOf(p);
  } else {
  }
});

console.log(operationIndex2);

// const operationIndex = params.findIndex(item => item.startsWith("--"));

// const operation = params.splice(operationIndex, 1).map(e => e.substring(2))[0];

// const operands = params.map(Number);

// operands.map(valid);

// let myFunction = OpFile[operation];

// console.log(myFunction(...operands));
