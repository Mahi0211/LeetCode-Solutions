/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max1 = Math.max(nums[0], nums[1])
    let max2 = Math.min(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] > max2) {
            max2 = nums[i]
        }
    }
    return (max1 - 1) * (max2 - 1)
}
// var maxProduct = function (nums) {
//     let max1 = 0, max2 = 0;
//     for (let num of nums) {
//         if (num > max1) {
//             max2 = max1;
//             max1 = num;
//         } else if (num > max2) {
//             max2 = num
//         }
//     }
//     return (max1 - 1) * (max2 - 1)
// };