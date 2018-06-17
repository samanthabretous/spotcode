const expect = require('chai').expect;
const sortByStrings = require('../1').default;

describe('Sort By String Test', () => {
  it('should return a string that is in sorted order based on the second parameter', () => {
    const result1 = sortByStrings('weather', 'therapyw');
    const result2 = sortByStrings('good', 'odg');
    const result3 = sortByStrings('good', 'ouhdgrstue');
    const result4 = sortByStrings('', 'ouhdgrstue');
    const result5 = sortByStrings('good', '');
    const result6 = sortByStrings(null, null);
    expect(result1).eql('theeraw');
    expect(result2).eql('oodg');
    expect(result3).eql('oodg');
    expect(result4).eql('');
    expect(result5).eql('');
    expect(result6).eql('');
  });
});
