/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length === 0) return -1;
    let l = 0,
        r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[l] < nums[r]) {
            return nums[l];
        }

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return nums[l];
};