"use strict";

const randomNumber = (max, min = 0) => {
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }

  const value = Math.random() * (max - min) + min;

  const toInt = () => Math.floor(value);

  return {
    value,
    toInt,
  };
}

export {
  randomNumber,
};
