/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [], temp = [];
    let used = new Array(nums.length).fill(false);
    function recursive() {
        if (nums.length === temp.length) {
            return res.push([...temp])
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            used[i] = true;
            temp.push(nums[i]);
            recursive()
            temp.pop()
            used[i] = false;
        }
    }
    recursive()
    return res;
};