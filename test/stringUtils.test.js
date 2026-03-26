import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('capitalizes string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('throws on invalid input', () => {
      expect(() => capitalize(123)).to.throw();
    });
  });

  describe('reverseString', () => {
    it('reverses string', () => {
      expect(reverseString('abc')).to.equal('cba');
    });

    it('throws on invalid input', () => {
      expect(() => reverseString(null)).to.throw();
    });
  });

  describe('isPalindrome', () => {
    it('returns true for palindrome', () => {
      expect(isPalindrome('madam')).to.equal(true);
    });

    it('returns false for non-palindrome', () => {
      expect(isPalindrome('hello')).to.equal(false);
    });

    it('throws on invalid input', () => {
      expect(() => isPalindrome(123)).to.throw();
    });
  });
});
