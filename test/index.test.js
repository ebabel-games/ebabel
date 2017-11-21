// import chai as our assertion library
import chai from 'chai';

//require jsdom-global and run
require('jsdom-global')()

// import our library
import randomNumber from '../src/index.es6';

// initialize chai should
chai.should();

describe('randomNumber', () => {
  it('has a value method that returns a number', () => {
    randomNumber(5).value.should.be.a('number');
  });

  it('value is a number that is less than max', () => {
    randomNumber(5).value.should.be.lessThan(5);
  });

  it('value is a number that is more than min', () => {
    randomNumber(10, 3).value.should.be.greaterThan(3);
  });

  it('toInt returns an integer', () => {
    Number.isInteger(randomNumber(10, 3).toInt()).should.be.true;
  });

  it('returns 0 when the max is 0 and min is not specified', () => {
    randomNumber(0).value.should.be.equal(0);
  });

  it('returns 0 when both max and min are set to 0', () => {
    randomNumber(0, 0).value.should.be.equal(0);
  });

  it('reasonably spreads 100000 random results for a six sided dice', () => {
    // Total number of times the six sided dice is thrown.
    const totalThrown = 100000;

    // Optimum frequency of each dice face value being found in the results.
    const optimum = 1/6;

    // Acceptable percentage deviation from optimum.
    const acceptableDeviation = 2;  // i.e. 2% here.

    // Flag default value: the spread is reasonable, i.e. percentageDeviation isn't too great.
    let isSpreadReasonable = true;

    // Throw the six sided dice many times.
    new Array(totalThrown).fill(0)
      .map(value => randomNumber(7, 1).toInt())
      // Sorting the raw results of all dice throws makes the reduce work at least 20% faster.
      // i.e. 77 to 80ms instead of 100 to 104 ms.
      .sort()
      // Create a Map with key and value where key is the face value of
      // the dice and the value is how many times that face value has been thrown.
      // See https://stackoverflow.com/a/46090384/97292
      // Note: the Map isn't the "map" function from arrays.
      // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      .reduce((acc, val) => acc.set(val, 1 + (acc.get(val) || 0)), new Map())
      // Calculate absolute and average deviations for each dice face value (6 times, not 100000 times!).
      // value: count of how many times a dice face value has been found.
      // key: face value of a dice.
      .forEach((value, key) => {
        const absoluteDeviation = Math.abs(value - (optimum * totalThrown));
        const percentageDeviation = (absoluteDeviation / (optimum * totalThrown)) * 100;

        if (percentageDeviation > acceptableDeviation) {
          console.error(`Dice face value ${key} percentage deviation from optimum is ${percentageDeviation}%.`);
          isSpreadReasonable = false;
        }
      });

    isSpreadReasonable.should.be.true;
  });
});
