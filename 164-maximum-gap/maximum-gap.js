/**
 * @param {number[]} nums
 * @return {number}
 */
// var maximumGap = function (nums) {
//     if (nums.length < 2) return 0;
//     quickSort(nums, 0, nums.length - 1);
//     let max = 0;
//     let current = 0;
//     for (let i = 0; i < nums.length - 1; i++) {
//         let result = nums[i + 1] - nums[i];
//         current = Math.max(current, result);
//         max = Math.max(current, max);
//     }
//     return max;
// }

// var quickSort = function (arr, low, high) {
//     if (low >= high) return arr; //base condition
//     let start = low;
//     let end = high;
//     let mid = Math.floor(start + (end - start) / 2);
//     let pivot = arr[mid];

//     while (start <= end) {
//         while (arr[start] < pivot) {
//             start++;
//         }
//         while (arr[end] > pivot) {
//             end--;
//         }
//         if (start <= end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]];
//             start++;
//             end--;
//         }
//     }
//     quickSort(arr, low, end);
//     quickSort(arr, start, high);

//     return arr;
// };

var maximumGap = function (arr) {
    if (arr.length < 2) return 0; // Handle edge case for small arrays

    quickSort(arr, 0, arr.length - 1); // Sort the array
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let result = arr[i + 1] - arr[i]; // Difference between consecutive elements
        max = Math.max(max, result); // Update max gap
    }
    return max; // Return the largest gap
}

var quickSort = function (arr, low, high) {
    if (low >= high) return; // Base case: single element or empty partition

    let mid = Math.floor((low + high) / 2);
    let pivotIndex = medianOfThree(arr, low, mid, high); // Choose median-of-three as pivot
    let pivot = arr[pivotIndex];

    let start = low,
        end = high;

    while (start <= end) {
        while (arr[start] < pivot) start++; // Move start to the right
        while (arr[end] > pivot) end--; // Move end to the left
        if (start <= end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap values
            start++;
            end--;
        }
    }

    // Recursive calls to sort the left and right partitions
    quickSort(arr, low, end);
    quickSort(arr, start, high);
};

function medianOfThree(arr, low, mid, high) {
    let a = arr[low],
        b = arr[mid],
        c = arr[high];
    if ((a > b && a < c) || (a > c && a < b)) return low;
    if ((b > a && b < c) || (b > c && b < a)) return mid;
    return high;
}