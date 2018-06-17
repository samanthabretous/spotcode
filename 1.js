/**
@summary Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg
@param {String} s - string that needs to be sorted
@param {String} t - string that controls sort order
@returns {String} sorted string
*/

const sortByStrings = (s, t) => {
  if (!s || !t) return '';

  const letters = {};
  let sortedString = '';

  // create a hash map with string that needs to be sorted
  for (let i = 0; i < s.length; i++) {
    if (!letters[s[i]]) letters[s[i]] = s[i];
    else letters[s[i]] += s[i];
  }

  // put letters in order based on the string that controls sort order
  for (let i = 0; i < t.length; i++) {
    if (letters[t[i]]) sortedString += letters[t[i]];
  }

  return sortedString;
};

module.exports.default = sortByStrings;
