// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
//import { countArrayElements } from '../src/';

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

    result.apple.should.be(2);
    result.orange.should.be(1);
    result.pear.should.be(3);
  });
});
