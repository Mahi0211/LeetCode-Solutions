/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function (nums) {
//     let temp = [];
//     let result = [];
//     let n = nums;
//     function recusrive(n, i) {
//         if (i === n.length) {
//             return result.push([...temp]);
//         }
//         temp.push(n[i]);
//         recusrive(n, i + 1);
//         temp.pop();
//         recusrive(n, i + 1);
//     }
//     recusrive(n, 0);
//     return result;
// };

var subsets = function (nums) {
    let ans = [];
    let n = nums.length;
    let subsets = 1 << n;
    for (let i = 0; i < subsets; i++) {
        let subset = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(nums[j])
            }
        }
        ans.push(subset)
    }
    return ans;
}