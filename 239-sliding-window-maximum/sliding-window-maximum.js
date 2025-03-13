/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
    let result = [];
    let dequeue = [];

    for (let i = 0; i < nums.length; i++) {
        if (dequeue.length > 0 && dequeue[0] <= i - k) {
            dequeue.shift()
        }

        while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
            dequeue.pop()
        }
        dequeue.push(i)

        if (i >= k - 1) {
            result.push(nums[dequeue[0]])
        }
    }
    return result;
}

// var maxSlidingWindow = function (nums, k) {
//     const result = [];
//     const n = nums.length;
//     for (let i = 0; i <= n - k; i++) {
//         let max = nums[i];
//         for (let j = 1; j < k; j++) {
//             if (nums[i + j] > max) {
//                 max = nums[i + j];
//             }
//         }
//         result.push(max);
//     }
//     return result;
// };