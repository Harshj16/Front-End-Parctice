function add(num1, num2) {
  return num1 + num2;
}
// Calling function
var result = add(10, 11);
//console.log("result :", result);

// Working with arrays
function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    //    console.log(arr[i]); //display the array item where the index is euqal to i
  }
}
var colors = ["red", "orange"];
listArrayItems(colors); //display all items in the array at once

var array1 = new Array();
for (num = 0; num <= 2; num++) {
  array1.push(num); // just like add in ArrayList<>() in Java
}
//console.log(array1.toLocaleString());

function arrayBuilder(one, two, three) {
  var arr = [];
  arr.push(one);
  arr.push(two);
  arr.push(three);
  return arr;
}
//console.log(arrayBuilder(10, "String", false));

// O.O.P.S
class MyTestClass extends Object {
  displayAddition(classVar1, classVar2) {
    //    console.log("Inside Class :", classVar1 + classVar2);
  }
}

var classCall = new MyTestClass();
//classCall.displayAddition(10, 20);

// making objects
var createObject = {};
var secondObject = {};
secondObject.firstVar = ["10", "20", "30"];
createObject.firstProperty = 10;
createObject.secondProperty = "String";
createObject.thirdProperty = false;
createObject.fourthProperty = secondObject.firstVar;
console.log(createObject);
console.log(createObject.thirdProperty);

var personalInfo = {
  age: 12,
  name: "Harsh Joshi",
  married: false,
  employeed: true,
  birthDate: "16.06.1999",
};
personalInfo.age = 23;
console.log(personalInfo);
personalInfo["employeed"] = false; // accessing the property and changing value
console.log(personalInfo);

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function () {
  console.log("The engine is running");
};
car.lightsOn = function () {
  console.log("The lights are on.");
};
console.log(car);
car.turnTheKey();
car.lightsOn();

function doubleNum(val) {
  return val * 2;
}

function objectMaker(val) {
  return {
    prop: val, // making an object inside function
  };
}

console.log(objectMaker(doubleNum(25)));

function meal(animal) {
  animal.food = animal.food + 10;
}
var dog = {
  food: 10,
};
meal(dog);
meal(dog);

console.log(dog.food);