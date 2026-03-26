import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('returns max value', () => {
      expect(findMax([1, 2, 3])).to.equal(3);
    });

    it('handles negative numbers', () => {
      expect(findMax([-1, -5, -2])).to.equal(-1);
    });

    it('throws error for invalid input', () => {
      expect(() => findMax('123')).to.throw();
    });
  });

  describe('findMin', () => {
    it('returns min value', () => {
      expect(findMin([1, 2, 3])).to.equal(1);
    });

    it('handles negative numbers', () => {
      expect(findMin([-1, -5, -2])).to.equal(-5);
    });

    it('throws error for invalid input', () => {
      expect(() => findMin(null)).to.throw();
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicates', () => {
      expect(removeDuplicates([1, 1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('returns same array if no duplicates', () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('throws error for invalid input', () => {
      expect(() => removeDuplicates(123)).to.throw();
    });
  });
});
