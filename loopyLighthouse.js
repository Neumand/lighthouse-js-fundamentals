// Requirements:
// Write a program that prints the numbers from 100 + 200 to the console, with three exceptions:
// 1. If the number is multiple of 3, print the string "Loopy" instead of the number
// 2. If the number is a multiple of 4, print the string "Lighthouse" instead of the number
// 3. If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse"
function loopyLighthouse () {
  var startingNumber = 100;
  var endingNumber = 200;
  for (var i = 0; i <= endingNumber - startingNumber; i++) {
    var currentNumber = startingNumber + i;
    if (currentNumber % 3 === 0 && currentNumber % 4 === 0) {
      console.log("LoopyLighthouse");
    } else if (currentNumber % 3 === 0) {
      console.log("Loopy");
    } else if (currentNumber % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(currentNumber);
    }
  }
}
loopyLighthouse();