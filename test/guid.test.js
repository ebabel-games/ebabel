// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { guid } from '../src/';

// Initialize chai should.
chai.should();

describe('guid', () => {
  it('returns a string of 36 characters', () => {
    guid().length.should.be.equal(36);
  });

  it('returns a unique string each time it is called', () => {
    guid().should.be.not.equal(guid());
  });
});
