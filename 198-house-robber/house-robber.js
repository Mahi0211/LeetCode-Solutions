/**
 * @param {number[]} nums
 * @return {number}
 */

//  Using Tabulation

var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[nums.length - 1]
}

//  Using Memoization

// var rob = function (nums) {
//     let recursive = (i, memo = {}) => {
//         if (i >= nums.length) return 0;
//         if (memo[i] !== undefined) return memo[i];
//         let take = nums[i] + recursive(i + 2, memo);
//         let skip = recursive(i + 1, memo);
//         memo[i] = Math.max(take, skip);
//         return memo[i];
//     }
//     return recursive(0)
// }

//  Using Recursion

// var rob = function (nums) {
//     let recursive = (i) => {
//         if (i >= nums.length) return 0;
//         let take = nums[i] + recursive(i + 2);
//         let skip = recursive(i + 1);
//         return Math.max(take, skip)
//     }
//     return recursive(0)
// }
