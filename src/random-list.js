"use strict";

/**
 * `random-list`
 * Returns the subset of a list of x elements from a larger source list.
 */
const randomList = (input) => {
  let {
    source,
    max,
  } = input;

  if (!source || source.length === 0 || max === 0) {
    return {
      list: [],
      rest: [],
    };
  }

  // Process the source.
  const rest = source
    .slice(0)
    .map(item => {
      if (typeof item === 'object') {
        return JSON.stringify(item);
      }
      return item;
    });

  // Start with an empty list that will be output.
  const list = [];

  for (let i = 0; i < max; i++) {
    // Pick a random element.
    const selection = rest[Math.floor(Math.random() * (rest.length - 1))];

    // Remove the random element from the source that will be output in the rest.
    rest.splice(rest.indexOf(selection), 1);

    // Add the random element to the list that will be output.
    list.push(selection);
  }

  // Output.
  return {
    list,
    rest,
  };
};

export {
  randomList,
};
