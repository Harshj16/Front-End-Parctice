console.log("Hello World! Now I can add J.S in resume 😂😂");

// This short is comment
/* This is midium comment*/
/*This is a long
long
long
comment*/

var test01;
var test02 = null;
console.log(test01); // undefined :- as the value is not yet assigned to the variable
console.log(test01 == test02); // null is equal to the undefined
console.log(null == test01); // True
console.log(0 == test02); // false

/* Undefined value is used when the value is not assigned to the variable
   Null is used to indicate when the value is not available in the variable */

console.log(16 / 4);
console.log(16 % 4);

console.log("Hello it's sunny day");

var i = 7;
i += 1;
i += 2;
console.log(i);

var stringVar = "abba dabba jabba";
console.log(stringVar.charAt(1));

for (const iterator of stringVar) {
  console.log(iterator);
}

var str = "Hello";
console.log(str.match("jello"));