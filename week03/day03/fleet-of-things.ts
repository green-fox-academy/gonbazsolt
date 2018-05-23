class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }

  reachNameAndCompStatus() {
    return [this.name, this.completed];
  }
}

class Fleet {
  private things: Thing[] = [];

  constructor(){}

  add(thing: Thing){
      this.things.push(thing);
  }

  reachThings() {
    return this.things;
  }
}

let fleet = new Fleet();

fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.add(new Thing('Stand up'));
fleet.add(new Thing('Eat lunch'));
fleet.reachThings()[2].complete();
fleet.reachThings()[3].complete();

let checkBox: string = ' ';

for (let i = 0; i < fleet.reachThings().length; i++) {
  if (fleet.reachThings()[i].reachNameAndCompStatus()[1]) {
    checkBox = 'X';
  } else {
    checkBox = ' ';
  }
  console.log(`${i + 1}. [${checkBox}] ${fleet.reachThings()[i].reachNameAndCompStatus()[0]}`);
}
