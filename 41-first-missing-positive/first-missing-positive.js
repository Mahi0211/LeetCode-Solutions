/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length;

    // Step 1: Rearrange numbers to their correct positions
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
}