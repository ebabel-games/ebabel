'use strict';

/**
 * `random`
 * Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).
 * @param {number} max - The maximum value that can be randomly returned. This value is included in the possible values.
 * @param {number?} min - The optional minimum value that can be randomly returned. This value is not included in the possible values, therefore to include 0, set min to -1. When min is not set, the minimum value will be 0, so 1 can be returned, which is the most common case in games.
 */
const random = (max = 100, min = 0) => {
  if (min > max) {
    throw new Error('min cannot be greater than max.');
  }

  return Math.ceil(Math.random() * (max - min)) + min;
};

module.exports = random;
