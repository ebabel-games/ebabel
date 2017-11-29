"use strict";

/**
 * `preventXss`
 * Processes an input to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.
 */
const preventXss = (input) => input.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export {
  preventXss,
};
