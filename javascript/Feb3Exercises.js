// 1. Create an array of objects representing the courses you are taking this semester.
// Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
// Iterate through this array to find the largest course number in your schedule.
const Course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};

const courses = [
  new Course('CS', 332),
  new Course('CS', 364),
  new Course('ACC', 204),
  new Course('PHIL', 202)
];
console.log(courses);

let max = 0
for (let i=0; i < courses.length; i++) {
  if (courses[i].number > max) {
    max = courses[i].number;
  }
}
console.log(max);

// 2. Define a constructor function for Book objects. Each book should have a title and an array of authors.
// Define a shared method for books that lets you check whether a given author was one of the authors
// in this book.
const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;
}

const MobyDick = new Book('MobyDick', ['Bill', 'Ted', 'Name']);

Book.prototype.authorcheck = function(author) {
  let result = false
  for (let i=0; i < this.authors.length; i++) {
    if (author === this.authors[i]) {
      result = true;
    }
  }
  return result;
}

console.log(MobyDick.authorcheck('Bill'));
console.log(MobyDick.authorcheck('Conner'));

// 3. Define a function that works like the range function in Python.
let range = function(a, b) {
  let result = [];
  if (b === undefined) {
    for (let i=0; i < a; i++) {
      result.push(i);
    }
  } else {
    for (let i=a; i < b; i++) {
      result.push(i);
    }
  }
  return result;
};

console.log(range(5));
console.log(range(3, 8));
