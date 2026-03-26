import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../utils/usersListUtils.js';

const users = [
  { id: 1, name: 'Charlie', age: 25, email: 'c@test.com' },
  { id: 2, name: 'Alice', age: 20, email: 'a@test.com' },
  { id: 3, name: 'Bob', age: 30, email: 'b@test.com' },
];

describe('usersListUtils', () => {
  it('filters users by age', () => {
    const result = filterUsersByAge(users, 21, 30);
    expect(result.length).to.equal(2);
  });

  it('throws error if users is not array', () => {
    expect(() => filterUsersByAge(null, 1, 2)).to.throw();
  });

  it('sorts users by name', () => {
    const result = sortUsersByName(users);
    expect(result[0].name).to.equal('Alice');
  });

  it('finds user by id', () => {
    expect(findUserById(users, 2).name).to.equal('Alice');
  });

  it('returns null if user not found', () => {
    expect(findUserById(users, 999)).to.equal(null);
  });

  it('checks if email is taken', () => {
    expect(isEmailTaken(users, 'a@test.com')).to.equal(true);
  });

  it('returns false if email not taken', () => {
    expect(isEmailTaken(users, 'x@test.com')).to.equal(false);
  });

  it('throws error if users is invalid', () => {
    expect(() => isEmailTaken(123, 'test')).to.throw();
  });
});
