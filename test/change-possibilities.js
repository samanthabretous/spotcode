const expect = require('chai').expect;
const changePossibilities = require('../3').default;

describe('Change Possibilities Test', () => {
  it('should return a string that is in sorted order based on the second parameter', () => {
    const result1 = changePossibilities(4, [1, 2, 3]);
    const result2 = changePossibilities(12, [1, 2, 5]);
    const result3 = changePossibilities(20, [5, 10, 15]);
    const result4 = changePossibilities(20, []);
    const result5 = changePossibilities(null, null);
    expect(result1).eql(4);
    expect(result2).eql(13);
    expect(result3).eql(4);
    expect(result4).eql(0);
    expect(result5).eql(0);
  });
});
