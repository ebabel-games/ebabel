"use strict";

/**
 * `randomNumber`
 * Returns a random integer number from 0 to max or from min to max (min is non-inclusive).
 * max: Number
 * min?: Number
 */
const randomNumber = (max, min = 0) => {
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }

  const value = Math.random() * (max - min) + min;

  const toInt = () => Math.ceil(value);

  return {
    value,
    toInt,
  };
};

export {
  randomNumber,
};
