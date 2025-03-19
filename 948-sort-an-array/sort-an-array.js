/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
    let unsortedIndex = nums.length - 1;
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 0; i < unsortedIndex; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                swapped = true;
            }
        }
        unsortedIndex--;
    }
};

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

var sortArray = function (nums) {
    return nums.sort((a, b) => a - b);
}; //Timesort (inbuils js)
