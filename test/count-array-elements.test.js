// Import chai as our assertion library.
import chai, { expect } from 'chai';

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

  it('counts the occurences of a mixure elements who have different primitive types', () => {
    const result = countArrayElements([
      'red car',
      Math.PI,
      'red car',
      3.14159,
      Math.PI,
      42,
      Math.PI,
      Math.PI,
      'red car',
      42,
    ]);

    result['red car'].should.be.equal(3);
    result[Math.PI].should.be.equal(4);
    result[42].should.be.equal(2);
    result[3.14159].should.be.equal(1);
  });

  it('does not count occurences of elements that were not present in the input array', () => {
    const result = countArrayElements([
      'blanket',
      'michael jackson',
    ]);

    expect(result['blanket jackson']).to.equal(undefined);
  });

  it('throws an error when input array is missing', () => {
    (() => {
      countArrayElements();
    }).should.throw('Missing array, so it is not possible to count members of that array.');
  });

  it('throws an error when input is a string', () => {
    (() => {
      countArrayElements('inputString');
    }).should.throw('Missing array, so it is not possible to count members of that array.');
  });
});
