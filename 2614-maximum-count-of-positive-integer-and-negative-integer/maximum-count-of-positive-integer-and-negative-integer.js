/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    return Math.max(upperBound(nums), lowerBound(nums));
};

function upperBound(nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] < 0) low = mid;
        else high = mid - 1;
    }
    return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > 0) high = mid;
        else low = mid + 1;
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}