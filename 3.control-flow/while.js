// WHILE LOOP

//Problem Statement: Log out numbers 1 - 5

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

let initialNumber = 1;
let limit = 5;

while (initialNumber <= limit) {
  console.log(initialNumber);
  initialNumber++;
}

// Problem: Find the sum of positive numbers less than 20
// Solution:
let forLoopSum = 0;
for (let i = 0; i < 20; i++) {
  forLoopSum += i;
}
console.log(forLoopSum);

let whileLoopSum = 0;
let whileLoopNum = 0;

while (whileLoopNum < 20) {
  whileLoopSum += whileLoopNum;
  whileLoopNum++;
  }
  console.log(whileLoopSum);
  
let sum = 0;
let num = 0;
while (num < 20) {
  sum += num;
  num++;
}
console.log(sum);


// DO..WHILE

//Problem Statement: Find the sum of positive numbers between 10 and 20 using do..while loop

let doWhileNumber = 11;
let doWhileSum = 0;

do {
  // statement you want to execute
  doWhileSum += doWhileNumber;  /* doWhileSum = doWhileSum + doWhileNumber  = 0 + 11 */
  doWhileNumber++;
} while (doWhileNumber < 20);
console.log(doWhileSum);

// 1. 11
// 2. 12
// 3. 13

// BREAK AND CONTINUE

// Problem Statement: Find the sum of positive numbers between 10 and 20.
// Do not add numbers greater than 15
// Solution: Here we demonstrate the use of 'break' the exist the loop
let sumNumbers = 0;
let number = 11;
while (number < 20) {
  sumNumbers += number;
  number++;
  if (number > 15) {
    break;
  }
}
console.log(sumNumbers);
// for break: it means it will stop at that number declared


// Problem Statement: Write program to log 1 - 5 and skip number 4
// Here we see demonstrate the use of continue in a for loop
for (let i = 1; i <= 5; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i);
}
// for continue it means you skip that number or value and go to the next one


// Problem Statement: Find the sum of positive numbers between 10 and 20.
// Do not add numbers divisible by 2;
// using while loop
// Here we demonstrate the use of continue to skip numbers divisible by 2.

let sumOfOddNumbers = 0;
let initialNum = 10;
while (initialNum < 20) {
  initialNum++;
  if (initialNum % 2 === 0) {
    continue;
  }
  sumOfOddNumbers += initialNum;
}
console.log(sumOfOddNumbers);



// DIFF BTW WHILE VS DO..WHILE

/**
 * While loops check condition first before executing what is in the loop body.
 * Do..while loops execute what is in the loop body first before checking the condition.
 */

let x = 5;
while (x < 5) {
  console.log(x); // does not log out anything
  x++;
}

let y = 5;
do {
  console.log(y); // logs out 5
  y++;
} while (y < 5);


// power
// function pwr(base, exponent) {
// 	var result = 1;
// 	if(exponent == undefined)
// 		exponent = 2;
// 	for(var i=1; i<=exponent; i++) {
// 		result = result * base;
// 	}
// 	return result;
// }
// console.log(pwr(16,20));



// Footer