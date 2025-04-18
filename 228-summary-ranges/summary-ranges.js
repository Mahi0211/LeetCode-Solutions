/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let ans = [];
    let i = 0;

    while (i < nums.length) {
        let a = nums[i]

        while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
            i++
        }

        let b = nums[i]

        if (a === b) {
            ans.push(a.toString());
        } else {
            ans.push(a + '->' + b)
        }
        i++;
    }
    return ans;
};