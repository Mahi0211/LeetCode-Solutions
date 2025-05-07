/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, k) {
    nums.sort((a, b) => a - b)
    let res = [], temp = [];
    function recursive(start, sum) {
        if (sum === k) {
            res.push([...temp]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            if (sum + nums[i] > k) continue;
            temp.push(nums[i]);
            recursive(i + 1, sum + nums[i]);
            temp.pop();
        }
    }
    recursive(0, 0);
    return res;
};