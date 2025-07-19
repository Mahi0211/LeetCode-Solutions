/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let left = 0, right = 1;
    while (left < nums.length) {
        right = left + 1;
        while (right < nums.length && (right - left) <= k) {
            if (nums[left] == nums[right]) {
                return true;
            }
            right++
        }
        left++
    }
    return false
};