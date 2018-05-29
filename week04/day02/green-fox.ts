'use strict';

class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name?: string, age?: number, gender?: string) {
    (name === undefined) ? this.name = 'Jane Doe' : this.name = name;
    (age === undefined) ? this.age = 30 : this.age = age;
    (gender === undefined) ? this.gender = 'female' : this.gender = gender;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }
  
  getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }
}

class Student {
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;  
  
  constructor (name?: string, age?: number, gender?: string, previousOrganization?: string) {
    (name === undefined) ? this.name = 'Jane Doe' : this.name = name;
    (age === undefined) ? this.age = 30 : this.age = age;
    (gender === undefined) ? this.gender = 'female' : this.gender = gender;
    (previousOrganization === undefined) ? this.previousOrganization = 'The School of Life' : this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
  
  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  
  getGoal(): void {
    console.log('Be a junior software developer.');
  }

  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    (name === undefined) ? this.name = 'Jane Doe' : this.name = name;
    (age === undefined) ? this.age = 30 : this.age = age;
    (gender === undefined) ? this.gender = 'female' : this.gender = gender;
    (level === undefined) ? this.level = 'intermediate' : this.level = level;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
  
  getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    (name === undefined) ? this.name = 'Jane Doe' : this.name = name;
    (age === undefined) ? this.age = 30 : this.age = age;
    (gender === undefined) ? this.gender = 'female' : this.gender = gender;
    (company === undefined) ? this.company = 'Google' : this.company = company;
    this.hiredStudents = 0;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }
  
  getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }

  hire(): void {
    this.hiredStudents += 1;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}
