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
});
