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

let max = 0
for (let i=0; i < courses.length; i++) {
  if courses[i].number > max {
    max = courses[i].number;
  }
}
console.log(max);
