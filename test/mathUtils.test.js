import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  it('add works correctly', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtract works correctly', () => {
    expect(subtract(5, 3)).to.equal(2);
  });

  it('multiply works correctly', () => {
    expect(multiply(2, 3)).to.equal(6);
  });

  it('divide works correctly', () => {
    expect(divide(6, 2)).to.equal(3);
  });

  it('divide throws on zero', () => {
    expect(() => divide(5, 0)).to.throw();
  });
});
