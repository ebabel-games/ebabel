// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { countArrayElements } from '../src/';

// Initialize chai should.
chai.should();

describe('countArrayElements', () => {
  it('returns an object that counts how many times each element is present in a given array', () => {
    const result = countArrayElements([
      'apple',
      'apple',
      'orange',
      'pear',
      'pear',
      'pear',
    ]);

    result.apple.should.be.equal(2);
    result.orange.should.be.equal(1);
    result.pear.should.be.equal(3);
  });

  it('throws an error when input array is missing', () => {
    (() => {
      countArrayElements();
    }).should.throw('Missing array, so it is not possible to count members of that array.');
  });
});
