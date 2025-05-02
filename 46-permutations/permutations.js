/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [], temp = [];
    let used = new Array(nums.length).fill(false)
    function recursive() {
        if (temp.length === nums.length) {
            return result.push([...temp])
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            temp.push(nums[i]);
            recursive()
            temp.pop();
            used[i] = false;
        }
    }
    recursive()
    return result;
};