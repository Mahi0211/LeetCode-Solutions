/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev2 = 0;
    let prev = nums[0];
    let prev3 = 0;
    let prev1 = nums[1];

    for (let i = 1; i < nums.length - 1; i++) {
        curi = Math.max(nums[i] + prev2, prev);
        prev2 = prev;
        prev = curi;
    }
    for (let i = 2; i < nums.length; i++) {
        curi = Math.max(nums[i] + prev3, prev1);
        prev3 = prev1;
        prev1 = curi;
    }
    return Math.max(prev, prev1);
};