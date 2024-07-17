/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//     const b = nums.reduce((acc, cur) => acc ^ cur, 0);
// };

var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};
