/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
    let counts = new Map();
    let mejorityElement = Math.floor(nums.length / 2)

    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num) > mejorityElement) {
            return num;
        }
    }
    return null
}

// var majorityElement = function (nums) {
//     let candidate = null
//     let count = 0
//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num
//         }
//         count += (candidate === num) ? 1 : -1
//     }
//     return candidate;
// };