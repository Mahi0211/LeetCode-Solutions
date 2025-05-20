/**
 * @param {number[]} nums
 * @return {number}
 */

// Simplified Version of the bellow code

var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    const robLinear = (arr) => {
        let prev2 = 0, prev = 0;
        for (let num of arr) {
            let curi = Math.max(num + prev2, prev);
            prev2 = prev;
            prev = curi;
        }
        return prev;
    };
    return Math.max(robLinear(nums.slice(0, -1)), robLinear(nums.slice(1)));
};

// I just Modified the House Robber 1 problem - First Loop is Not picking last element and Second Loop is Not picking First element and return which prev is Maximum.

// var rob = function (nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return nums[0];

//     let prev2 = 0;
//     let prev = nums[0];
//     let prev3 = 0;
//     let prev1 = nums[1];

//     for (let i = 1; i < nums.length - 1; i++) {
//         curi = Math.max(nums[i] + prev2, prev);
//         prev2 = prev;
//         prev = curi;
//     }
//     for (let i = 2; i < nums.length; i++) {
//         curi = Math.max(nums[i] + prev3, prev1);
//         prev3 = prev1;
//         prev1 = curi;
//     }
//     return Math.max(prev, prev1);
// };