/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1 && nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }
    let l = 0, r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return nums[l];
};