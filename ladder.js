let ladder = {
  position: 0,
  up() {
    this.position += 1;
  },
  down() {
    this.position -= 1;
  },
  showStep() {
    return this.position;
  },
};

ladder.up();
ladder.up();
ladder.down();
alert(`Current step is: ${ladder.showStep()}`);
