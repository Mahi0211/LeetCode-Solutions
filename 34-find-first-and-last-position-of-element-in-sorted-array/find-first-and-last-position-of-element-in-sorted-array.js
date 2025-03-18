/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    // Helper function to find the first occurrence
    const findFirst = () => {
        let l = 0,
            r = nums.length - 1,
            first = -1;
        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);
            if (nums[mid] === target) {
                first = mid; // Update first occurrence
                r = mid - 1; // Keep searching in the left half
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return first;
    };

    // Helper function to find the last occurrence
    const findLast = () => {
        let l = 0,
            r = nums.length - 1,
            last = -1;
        while (l <= r) {
            let mid = Math.floor(l + (r - l) / 2);
            if (nums[mid] === target) {
                last = mid; // Update last occurrence
                l = mid + 1; // Keep searching in the right half
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return last;
    };

    // Find first and last positions
    const first = findFirst();
    if (first === -1) return [-1, -1]; // Target not found
    const last = findLast();

    return [first, last];
};