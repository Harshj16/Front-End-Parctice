const car = {
  speed: 100,
  type: "House car",
  price: "100K",
};
console.log(car);

for (const key in car) {
  console.log(key); // this only prints the keys
}

console.log(Object.keys(car));

// for (const iterator of car) { // error as object cannot be iterated as array
//   console.log(iterator);
// }

// to make for in reliable
for (const iterator of Object.values(car)) {
  console.log(iterator); // now the error has been solved
}

console.log(`${101 + 101}, total`) // backticks can be used as place holder for 
// value in variable