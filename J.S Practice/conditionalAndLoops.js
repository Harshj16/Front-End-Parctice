for (i = 0; i < 5; i++) {
  console.log("1st loop");
  for (j = 0; j < i; j++) {
    console.log("2nd loop");
  }
}

var dec = 10;
do {
  console.log("dec");
  dec--;
} while (dec >= 0);

var num = 1;
switch (num) {
  case num:
    console.log("1");

  default:
    console.log("default");
    break;
}
