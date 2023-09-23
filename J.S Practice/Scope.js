let color = "red";
function letExample() {
  let color = "blue";
  console.log("Inside function block :", color);
  // the color variable with value red is only inside
  // this block and it finishes as soon as function
  // execution is done
}
letExample();
console.log("Outside function block :", color);

// const num1 = undefined;
// function changeVariableValue() {
//     num1 = 20;
//   console.log(num1);
// }
// changeVariableValue();
// console.log(num1);
