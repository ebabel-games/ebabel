// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { Ido } from '../src/';

// Initialize chai should.
chai.should();

describe('Ido', () => {
  it('returns a string that is not empty', () => {
    Ido().should.be.a('string').that.is.not.empty;
  });

  it('returns a string that starts with ☥', () => {
    Ido().substring(0, 1).should.be.equal('☥');
  });
});
