/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let temp = [];
    let result = [];
    let n = nums;
    function recusrive(n, i) {
        if (i === n.length) {
            return result.push([...temp]);
        }
        temp.push(n[i]);
        recusrive(n, i + 1);
        temp.pop();
        recusrive(n, i + 1);
    }
    recusrive(n, 0);
    return result;
};