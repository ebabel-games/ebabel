"use strict";

class randomNumber {
  constructor(max, min = 0) {
    this.min = min;
    this.value = Math.random() * (max - min) + min;
  }

  toInt() {
    return Math.floor(this.value);
  }

  val() {
    return this.value;
  }
}

module.exports = (max, min) => {
  return new randomNumber(max, min);
};
