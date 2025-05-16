/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n, dp = {}) {
    if (n <= 1) return n;
    if (dp[n] !== undefined) return dp[n];
    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp)
}

// var fib = function (n) {
//     if (n <= 1) return n;
//     let a = 0, b = 1;
//     for (let i = 2; i <= n; i++) {
//         // [a, b] = [b, a + b]
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b;
// }

// var fib = function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2)
// };