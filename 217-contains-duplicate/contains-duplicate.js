/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length <= 1) return false;
    let seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i])
    }
    return false;
};

// var containsDuplicate = function(nums) {
//     let seen = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (seen.includes(nums[i])) {
//             return true;
//         }
//         seen.push(nums[i]);
//     }
//     return false;
// }; //this is worst practice - time limit exceeded