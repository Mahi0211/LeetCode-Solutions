/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let str = s.split(" ");
  while (str.length > k) {
    str.pop();
  }
  return str.join(" ");
};