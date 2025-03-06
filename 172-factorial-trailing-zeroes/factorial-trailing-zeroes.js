/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// var trailingZeroes = function(n) {
//     function factorial(num) {
//     if (num <= 0) return 1
//     return num * factorial(num - 1)
//   }
//   const fact = factorial(n)
//   let count = 0
//   let num = fact
//   while (num % 10 === 0 && num !== 0) {
//     count++
//     num = Math.floor(num / 10)
//   }
//   return count
// };