'use strict';

class Student {
  learn() {

  }

  question(teacher: Teacher) {
    teacher.answer();
  }
}

class Teacher {
  answer() {

  }

  teach(student: Student) {
    student.learn();
  }
}
