/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = [...nums1, ...nums2].sort((a, b) => a - b); // it's mean, not a median
    const n = nums3.length;

    // Check if the length is odd or even
    if (n % 2 === 1) {
        return nums3[Math.floor(n / 2)]; //return the middle element
    } else {
        return (nums3[n / 2 - 1] + nums3[n / 2]) / 2; // Average of two middle elements
    }
};