// 1.
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

// 2.
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

// 3.
const range = function(a) {
  let result = [];
  for (let i=0; i < a; i++) {
    result.push(i);
  }
};

console.log(range(5));
