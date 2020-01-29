// JavaScript Syntax Exercises

// 1. print the sum of the squares of the integers from 1 through 100
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += (i ** 2);
}
console.log(sum);

// 2. Print the first fibonacci number that is greater than 1000
let fib1 = 1;
let fib2 = 1;
while (fib2 < 1000) {
  let temp = fib1;
  fib1 = fib2;
  fib2 = temp + fib2;
}
console.log(fib2);

// 3. Print the number of integers from 1 through 100 that are divisible by 3 or 5 but not both
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) and (i % 5 === 0) {
    continue;
  } else if (i % 3) {
    console.log(i);
  } else if (i % 5) {
    console.log(i);
  }
}
