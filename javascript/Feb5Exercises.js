// Syntax to know

// 1. JavaScript arrays have a filter method that works like this:
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
console.log(numbers);
console.log(odds);

// Try it out, and then write your own filter function, which would be called differently:
const filter = function(list, filt) {
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
