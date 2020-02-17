// Syntax to know

// 1. JavaScript arrays have a filter method that works like this:
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
console.log(numbers);
console.log(odds);

// Try it out, and then write your own filter function, which would be called differently:
const filter = function(array, filt) {
  const copy = [];
  for (const element of array) {
    if (filt(element) === true){
      copy.push(element);
    }
  }
  return copy;
};

const numbers2 = [1, 2, 3, 4, 5];
const odds2 = filter(numbers, x => x%2 > 0);
console.log(numbers2);
console.log(odds2);

// 2. JavaScript arrays have a sort method that works like this:

const numbers3 = [4, 2, 5, 1, 3];
console.log(numbers3);
console.log(numbers.sort((a,b) => a - b));

// Try it out, and read about how it works.
// Then rewrite the arrow function to reverse sort the array instead.
