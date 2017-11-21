"use strict";

class randomNumber {
  constructor(max, min = 0) {
    if (min > max) {
      throw new Error('min cannot be greater than max.');
    }

    this.min = min;
    this.value = Math.random() * (max - min) + min;
  }

  toInt() {
    return Math.floor(this.value);
  }
}

module.exports = (max, min) => {
  return new randomNumber(max, min);
};
