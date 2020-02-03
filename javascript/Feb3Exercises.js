// 1.
const course = function(subject, number) {
  this.subject = subject;
  this.number = number;
};

const courses = [
  new course('CS', 332),
  new course('CS', 364),
  new course('ACC', 204),
  new course('PHIL', 202)
];
console.log(courses);
