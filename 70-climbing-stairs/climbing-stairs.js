/**
 * @param {number} n
 * @return {number}
 */

//  memoization

// var climbStairs = function (n, memo = {}) {
//     if (n in memo) return memo[n];
//     if (n <= 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//     return memo[n];
// };

//  Tabulation

var climbStairs = function (n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}