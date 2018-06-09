'use strict';

export = { };

interface Printable {
  printAllFields(): void
}

class Domino implements Printable{
  valuePairs: number[];
  constructor (value1: number, value2: number) {
    this.valuePairs = [value1, value2];
  }

  printAllFields(): void {
    console.log(`${this.valuePairs}`);
  }
}

class TodoRecord implements Printable{
  index: number;
  done: boolean;
  task: string;

  constructor(index: number, done: boolean, task: string) {
    this.index = index;
    this.done = done;
    this.task = task;
  }

  printAllFields(): void {
    console.log(`${this.index} - [${this.done ? 'X' : ' '}] ${this.task}`);
  }
}

let todo: TodoRecord = new TodoRecord(1, false, 'Buy milk');

todo.printAllFields();
