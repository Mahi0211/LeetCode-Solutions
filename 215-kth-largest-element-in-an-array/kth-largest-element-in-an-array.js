/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1]
}

    //using selection sort
    // var findKthLargest = function (nums, k) {
    //     let n = nums.length;
    //     for (let i = 0; i < n - 1; i++) {
    //         let maxIndex = i;
    //         for (let j = i + 1; j < n; j++) {
    //             if (nums[j] > nums[maxIndex]) {
    //                 maxIndex = j;
    //             }
    //         }
    //         if (maxIndex !== i) {
    //             let temp = nums[i];
    //             nums[i] = nums[maxIndex];
    //             nums[maxIndex] = temp;
    //         }
    //     }
    //     return nums[k - 1];
    // };