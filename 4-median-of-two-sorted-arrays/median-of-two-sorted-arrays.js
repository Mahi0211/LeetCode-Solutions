/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = 0, p2 = 0;
    const merged = [];

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] <= nums2[p2]) {
            merged.push(nums1[p1])
            p1++;
        } else {
            merged.push(nums2[p2]);
            p2++;
        }
    }

    // Add remaining elements from nums1 or nums2
    while (p1 < nums1.length) {
        merged.push(nums1[p1]);
        p1++;
    }
    while (p2 < nums2.length) {
        merged.push(nums2[p2]);
        p2++;
    }

    // Find the median
    const n = merged.length;
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)]; // Odd length, middle element
    } else {
        return (merged[n / 2 - 1] + merged[n / 2]) / 2; // Even length, average of two middle elements
    }
}

// var findMedianSortedArrays = function (nums1, nums2) {
//     const nums3 = [...nums1, ...nums2].sort((a, b) => a - b); // it's mean, not a median
//     const n = nums3.length;

//     // Check if the length is odd or even
//     if (n % 2 === 1) {
//         return nums3[Math.floor(n / 2)]; //return the middle element
//     } else {
//         return (nums3[n / 2 - 1] + nums3[n / 2]) / 2; // Average of two middle elements
//     }
// };