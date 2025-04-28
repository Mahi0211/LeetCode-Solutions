/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [];
    let n = nums.length;
    nums.sort((a, b) => a - b)
    let subsets = 1 << n;
    let seen = new Set()
    for (let i = 0; i < subsets; i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j])
            }
        }
        let key = subset.join(",");
        if (!seen.has(key)) {
            seen.add(key);
            ans.push(subset)
        }
    }
    return ans;
};