const expect = require('chai').expect;
const decodedString = require('../2').default;

describe('Sort By String Test', () => {
  it('should return a string that is in sorted order based on the second parameter', () => {
    const result1 = decodedString('4[ab]');
    const result2 = decodedString('2[b3[a]]');
    const result3 = decodedString('2[b3[a4[st]]]');
    const result4 = decodedString('');
    const result5 = decodedString(null);
    expect(result1).eql('abababab');
    expect(result2).eql('baaabaaa');
    expect(result3).eql(
      'baststststaststststaststststbaststststaststststastststst'
    );
    expect(result4).eql('');
    expect(result5).eql('');
  });
});
