/**
@summary Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.
@param {Number} amount - Total amount of money
@param {Array} denominations - Coins used to find different denominations
@returns {Number} total possible ways  
*/

const changePossibilities = (amount, denominations) => {
  if (!amount || !denominations) return 0;

  const combinations = new Array(amount + 1).fill(0);
  combinations[0] = 1;

  denominations.map(coin => {
    combinations;
    for (let a = 0; a < combinations.length; a++) {
      if (a >= coin) {
        combinations[a] += combinations[a - coin];
      }
    }
  });

  return combinations[amount];
};

module.exports.default = changePossibilities;
