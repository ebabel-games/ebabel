// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { randomList } from '../src/';

// Initialize chai should.
chai.should();

describe('randomList', () => {
  it('returns empty list and rest arrays when the input source is also an empty array', () => {
    const result = randomList({
      source: [],
    });

    result.list.should.be.an('array').that.is.empty;
    result.rest.should.be.an('array').that.is.empty;
  });
});
