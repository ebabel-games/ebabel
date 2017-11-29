// Import chai as our assertion library.
import chai from 'chai';

// Require jsdom-global and run.
require('jsdom-global')()

// Import module to test.
import { preventXss } from '../src/';

// Initialize chai should.
chai.should();

describe('preventXss', () => {
  it('returns the same string as input when there is no script injection', () => {
    preventXss('this string is safe').should.be.equal('this string is safe');
  });

  it('transforms <script> html tag into non executable code that can be safely displayed', () => {
    preventXss('My name is <script>console.log(password)</script>')
      .should.be.equal('My name is \u003Cscript\u003Econsole.log(password)\u003C/script\u003E');
  });
});
