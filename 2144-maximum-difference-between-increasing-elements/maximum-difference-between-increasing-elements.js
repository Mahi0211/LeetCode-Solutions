/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    if (nums.length === 0) return -1
    let left = 0, right = 1
    let maxDif = -1

    while (right < nums.length) {
        if (nums[right] > nums[left]) {
            maxDif = Math.max(maxDif, nums[right] - nums[left])
        } else {
            left = right
        }
        right++
    }
    return maxDif
};