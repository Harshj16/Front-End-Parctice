// // below it is called destructuring using objects
// const { hello, ahello } = require("./Module1");
// // this is module or Common JS module
// // which ables you to write JS somewhere else and use it whenever you want
// hello();
// ahello("Harsh");

// ES6 Module allows you to import the modules.
// import greet, { hello, ahello } from "./Module2";

// greet();
// hello();
// ahello("Harsh");

const timesTwo = (num) => {
    console.log(num*2);
}

timesTwo(10);