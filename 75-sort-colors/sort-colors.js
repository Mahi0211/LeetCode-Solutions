/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//     let n = nums.length
//     let low = 0, mid = 0, high = n - 1
//     while (mid <= high) {
//         if (nums[mid] === 0) {
//             [nums[low], nums[mid]] = [nums[mid], nums[low]]
//             low++
//             mid++
//         } else if (nums[mid] === 1) {
//             mid++
//         } else if (nums[mid] === 2) {
//             [nums[mid], nums[high]] = [nums[high], nums[mid]]
//             high--
//         }
//     }
// };

var sortColors = function (nums) {
    let n = nums.length - 1;
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (nums[i] > nums[i + 1]) {
                // [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]]
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp
                swapped = true
            }
        }
        n--
    }
    return nums
}