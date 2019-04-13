const OpFile = require("./operations/index");
const valid = require("./operations/validator");

const args = require("yargs").array(["add", "sub", "div", "mod", "mul", "avg"]).argv;
const operations = ["mul", "sub", "add", "div", "mod", "avg"];
let MyOperations = operations.filter(operation => args[operation]);
let myFunction = OpFile[MyOperations];

switch (MyOperations[0]) {
  case "add":
    args.add.map(valid);
    console.log(myFunction(...args.add));
    break;
  case "sub":
    args.sub.map(valid);
    console.log(myFunction(...args.sub));
    break;
  case "mul":
    args.mul.map(valid);
    console.log(myFunction(...args.mul));
    break;
  case "div":
    args.div.map(valid);
    console.log(myFunction(...args.div));
    break;
  case "avg":
    args.avg.map(valid);
    console.log(myFunction(...args.avg));
    break;
  case "mod":
    args.mod.map(valid);
    console.log(myFunction(...args.mod));
    break;
  default:
    console.log("Done");
    break;
}

// console.log(MyOperations); ////////////////////// 3 ,5 ,2
// console.log(ops);
