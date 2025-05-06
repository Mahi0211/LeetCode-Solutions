/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [], temp = [];
    function recursive(start, sum) {
        if (sum === target) {
            res.push([...temp]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (sum + candidates[i] > target) continue;
            temp.push(candidates[i]);
            recursive(i, sum + candidates[i]);
            temp.pop();
        }
    }
    recursive(0, 0);
    return res;
};