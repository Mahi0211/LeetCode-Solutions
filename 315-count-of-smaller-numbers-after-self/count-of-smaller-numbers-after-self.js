/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function (nums) {
    let counts = new Array(nums.length).fill(0);
    let indices = nums.map((num, index) => ({ value: num, index }));

    // Helper function for merge sort
    function mergeSort(start, end) {
        if (start >= end) return;
        let mid = Math.floor(start + (end - start) / 2)

        mergeSort(start, mid)
        mergeSort(mid + 1, end)

        // Merge the two halves while counting smaller elements
        merge(start, mid, end);
    }

    function merge(start, mid, end) {
        let merged = [];
        let left = start;
        let right = mid + 1;
        let rightCount = 0;

        while (left <= mid && right <= end) {
            if (indices[right].value < indices[left].value) {
                // If right element is smaller, increment rightCount
                merged.push(indices[right]);
                rightCount++;
                right++
            } else {
                // Update count for the left element
                merged.push(indices[left]);
                counts[indices[left].index] += rightCount;
                left++
            }
        }
        // Append remaining elements from the left half
        while (left <= mid) {
            counts[indices[left].index] += rightCount;
            merged.push(indices[left]);
            left++;
        }
        // Append remaining elements from the right half
        while (right <= end) {
            merged.push(indices[right]);
            right++;
        }
        // Copy merged elements back into indexedNums
        for (let i = 0; i < merged.length; i++) {
            indices[start + i] = merged[i];
        }
    }
    // Call mergeSort on the entire array
    mergeSort(0, nums.length - 1);

    return counts;
}

// var countSmaller = function (nums) {
//     let counts = new Array(nums.length).fill(0);

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[i]) {
//                 counts[i]++;
//             }
//         }
//     }
//     return counts;
// }