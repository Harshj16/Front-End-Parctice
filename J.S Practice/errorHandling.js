try {
  console.log("Hello");
} catch (err) {
  console.log("Goodbye");
}

try {
  console.log(a + b);
} catch (error) {
  console.log("Reference error");
}

try {
  throw new ReferenceError(); // when throw declared the code execution stops
  console.log(10 + 20);
} catch (err) {
  console.log(err);
}
console.log("Program kept working");
