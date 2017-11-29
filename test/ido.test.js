// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { ido } from '../src/';

// Initialize chai should.
chai.should();

describe('ido', () => {
  it('returns a string that is not empty', () => {
    ido().should.be.a('string').that.is.not.empty;
  });

  it('returns a string that starts with ☥', () => {
    ido().substring(0, 1).should.be.equal('☥');
    console.log(ido());
  });
});
