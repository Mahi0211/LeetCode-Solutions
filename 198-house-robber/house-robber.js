/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let recursive = (i, memo = {}) => {
        if (i >= nums.length) return 0;
        if (memo[i] !== undefined) return memo[i];
        let take = nums[i] + recursive(i + 2, memo);
        let skip = recursive(i + 1, memo);
        memo[i] = Math.max(take, skip);
        return memo[i];
    }
    return recursive(0)
}
