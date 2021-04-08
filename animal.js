class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with the speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let myAnimal = new Animal('My Animal');

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  // This is treated as a seperate function from the one in the parent class
  stop() {
    // Calls the parent class before appending changes to it
    super.stop();
    this.hide();
  }
}

let myRabbit = new Rabbit('Beckham');
myRabbit.run(5);
myRabbit.hide();
