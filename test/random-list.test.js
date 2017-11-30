// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')();

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

  it('returns a list with all the source and an empty rest array when max is set to 0', () => {
    const result = randomList({
      source: ['apple', 'lemon', 'cherry', 'pineapple'],
      max: 0,
    });
    result.list.should.be.an('array').that.is.deep.equal(['apple', 'lemon', 'cherry', 'pineapple']);
    result.rest.should.be.an('array').that.is.empty;
  });

  it('returns empty list and rest arrays when source is null', () => {
    const result = randomList({
      source: null,
      max: 10,
    });
    result.list.should.be.an('array').that.is.empty;
    result.rest.should.be.an('array').that.is.empty;
  });

  it('returns a list of 2 strings when max is set to 2 and a rest with 3 strings because source has 5 strings', () => {
    const result = randomList({
      source: ['apple', 'lemon', 'cherry', 'pineapple', 'pear'],
      max: 2,
    });
    result.list.length.should.be.equal(2);
    result.rest.length.should.be.equal(3);
  });

  it('returns a list of 3 objects when max is set to 3 and a rest with 2 objects because source has 5 objects', () => {
    const result = randomList({
      source: [
        {fruit: 'apple', amount: 4},
        {fruit: 'lemon', amount: 2},
        {fruit: 'cherry', amount: 6},
        {fruit: 'pineapple', amount: 5},
        {fruit: 'pear', amount: 8}
      ],
      max: 3,
    });
    result.list.length.should.be.equal(3);
    result.rest.length.should.be.equal(2);
  });
});
