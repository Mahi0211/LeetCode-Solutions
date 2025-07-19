/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function (nums, k) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (see.has(num)) {
            const prevInd = seen.get(num);
            if (i - prevInd <= k) return true;
        }
        seen.set(num, i)
    }
    return false;
}

// brute force

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