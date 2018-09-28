'use strict';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1);

/**
 * `guid`
 * Returns a globally unique id string following the standard guid format.
 */
const guid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

module.exports = guid;
