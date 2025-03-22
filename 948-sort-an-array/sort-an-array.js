/**
 * @param {number[]} nums
 * @return {number[]}
 */

//using Merge sort
var sortArray = function (nums) {
    //base case
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));

    return merge(left, right);
};

function merge(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}


//using Selection sort
// var sortArray = function (nums) {
//     let n = nums.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (nums[j] < nums[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             let temp = nums[i];
//             nums[i] = nums[minIndex];
//             nums[minIndex] = temp;
//         }
//     }
//     return nums;
// };

// var sortArray = function (nums) {
//     let unsortedIndex = nums.length - 1;
//     let swapped = true;

//     while (swapped) {
//         swapped = false;

//         for (let i = 0; i < unsortedIndex; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i+1] = temp
//                 swapped = true;
//             }
//         }
//         unsortedIndex--;
//     }
//     return nums
// }; // bubble sort

// var sortArray = function (nums) {
//     const n = nums.length;
//     for (let i = 0; i < n; i++) {
//         let swapped = false
//         for (let j = 0; j < n - i - 1; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 // [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//                 let temp = nums[j]
//                 nums[j] = nums[j + 1]
//                 nums[j + 1] = temp
//                 swapped = true;
//             }
//         }
//         // If no swaps were made in this pass, the array is sorted
//         if (!swapped) break;
//     }
//     return nums
// }; //bubble sort

// var sortArray = function (nums) {
//     return nums.sort((a, b) => a - b);
// }; //Timesort (inbuils js)

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
