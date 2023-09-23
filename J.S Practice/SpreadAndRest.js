// Spread Operator
let var1 = [1, 2, 3];
let var2 = [3, 4, 5];
const var3 = [...var1, ...var2];
console.log(var3);

// Rest Operator
const hello = (...num) => {
  console.log(num);
};

hello(1, 2, 3, var2, "Ironman");
