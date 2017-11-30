'use strict';

/**
 * `randomNumber`
 * Returns a random integer number from 1 to max or from min to max (min is non-inclusive).
 * @param {number} max - The maximum value that can be randomly returned. This value is included in the possible values.
 * @param {number?} min - The optional minimum value that can be randomly returned. This value is not included in the possible values, therefore to include 0, set min to -1. When min is not set, the minimum value will be 0, so 1 can be returned, which is the most common case in games.
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
