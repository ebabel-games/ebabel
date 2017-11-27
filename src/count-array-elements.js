"use strict";

/**
 * `countArrayElements`
 * Returns an object that counts how many times each element is present in a given array.
 */
const countArrayElements = (input) => {
  if (!Array.isArray(input)) {
    throw new Error('Missing array, so it is not possible to count members of that array.');
  }

  const result = {};
  
  input
    .sort()
    .reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map())
    .forEach((value, key) => { result[key] = value });

  return result;
};

export {
  countArrayElements,
};
