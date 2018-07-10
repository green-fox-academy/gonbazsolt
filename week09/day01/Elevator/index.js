class ElevatorController {

  elevatorUpDown(model) {
    if (model.elevatorPosition === model.maxFloor - 1 && model.elevatorDirection === 1) {
      model.errorMessage = 'No way up !!! Top floor !!!';
    }
    if (model.elevatorDirection === 1 && model.elevatorPosition < model.maxFloor - 1) {
      model.elevatorPosition += model.elevatorDirection;
    }
    if (model.elevatorPosition === 0 && model.elevatorDirection === -1) {
      model.errorMessage = 'No way down !!! Ground floor !!!';
    }
    if (model.elevatorDirection === -1 && model.elevatorPosition > 0) {
      model.elevatorPosition += model.elevatorDirection;
    }
  }

  elevatorInOut(model) {
    if (model.peopleInElevator === model.maxPeople && model.peopleGetInOrOut === 1) {
      model.errorMessage = 'No more people !!! Full !!!';
    }
    if (model.peopleGetInOrOut === 1 && model.peopleInElevator < model.maxPeople) {
      model.peopleInElevator += model.peopleGetInOrOut;
    }
    if (model.peopleInElevator === 0 && model.peopleGetInOrOut === -1) {
      model.errorMessage = 'No less people !!! Empty !!!';
    }
    if (model.peopleGetInOrOut === -1 && model.peopleInElevator > 0) {
      model.peopleInElevator += model.peopleGetInOrOut;
    }
  }
}

class ElevatorModel {

  constructor(floor, maxpeople) {
    this.maxFloor = floor;
    this.maxPeople = maxpeople;
    this.elevatorPosition = 0;
    this.elevatorDirection = undefined;
    this.peopleInElevator = 0;
    this.peopleGetInOrOut = undefined;
    this.errorMessage = undefined;
  }
}

class ElevatorView {

  constructor(upDown, addRemove, levels, error) {
    this.buttonUpDown = upDown;
    this.buttonAddRemove = addRemove;
    this.levels = levels;
    this.error = error;
  }

  render(model) {
    for (let i = 0; i < this.levels.length; i++) {
      if (i === model.elevatorPosition) {
        this.levels[i].textContent = model.peopleInElevator.toString();
        this.levels[i].style.backgroundColor = '#53C237';
      } else {
        this.levels[i].textContent = '';
        this.levels[i].style.backgroundColor = 'white';
      }
    }
  }

  renderError(model) {
    if (model.errorMessage) {
      this.error.textContent = model.errorMessage;
      this.error.style.backgroundColor = '#fc5757';
      if (model.errorMessage === 'No more people !!! Full !!!') {
        this.error.style.padding = '10px 50px';
      }

      setTimeout(() => {
        this.error.textContent = '';
        this.error.style.backgroundColor = 'lightcoral'
        this.error.style.padding = '10px 70px';
        model.errorMessage = undefined;
      }, 1000);
    }
  }
}

let elevatorView = new ElevatorView(document.querySelectorAll('button.direction'), document.querySelectorAll('button.people'), document.querySelectorAll('div.white'), document.querySelector('div.error'));
let elevatorModel = new ElevatorModel(10, 9);
let elevatorController = new ElevatorController();

for (let i = 0; i < 2; i++) {
  elevatorView.buttonUpDown[i].addEventListener('click', (event) => {
    elevatorModel.elevatorDirection = parseInt(event.target.value);
    elevatorController.elevatorUpDown(elevatorModel);
    elevatorView.render(elevatorModel);
    elevatorView.renderError(elevatorModel);
  });
}

for (let i = 0; i < 2; i++) {
  elevatorView.buttonAddRemove[i].addEventListener('click', (event) => {
    elevatorModel.peopleGetInOrOut = parseInt(event.target.value);
    elevatorController.elevatorInOut(elevatorModel);
    elevatorView.render(elevatorModel);
    elevatorView.renderError(elevatorModel);
  });
}
