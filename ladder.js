let ladder = {
  position: 0,
  height: 0,
  up() {
    if (this.position < this.height) {
      this.position += 1;
    } else {
      console.log(`Max Height Reached!`);
    }
    return;
  },
  down() {
    if (this.position > 0) {
      this.position -= 1;
    } else {
      console.log(`Min Height Reached!`);
    }
    return;
  },
  showStep() {
    return this.position;
  },
};

ladder.height = 5;
ladder.up();
ladder.up();
ladder.down();
ladder.up();
ladder.down();
// alert(`Current step is: ${ladder.showStep()}`);
console.log(`Current step is: ${ladder.showStep()}`);
