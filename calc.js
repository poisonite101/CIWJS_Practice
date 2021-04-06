let calculator = {
  read() {
    // Plus sign converts the result to a number
    this.val1 = parseInt(prompt(`Enter the first value:`, 0), 10);
    this.val2 = parseInt(prompt(`Enter the second value:`, 0), 10);
    if (!this.val1) {
      this.val1 = 0;
    }
    if (!this.val2) {
      this.val2 = 0;
    }
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
};

// Prompts for 2 values and saves them as objects
calculator.read();

// Returns the sum of the 2 values
alert(calculator.sum());

// Returns the product of the 2 values
alert(calculator.mul());
