'use strict';

// Number of days since 10th July 2014 at 9:45am.
const dateDifference = () => Date.now() - new Date(Date.UTC(2014,6,10,9,45,0));

/**
 * `Ido`
 * Returns a a string that commemorates how many days since Ido died.
 */
const Ido = () => `☥ ${Math.floor(dateDifference() / 36e5 / 24)} days.`;

module.exports = Ido;
