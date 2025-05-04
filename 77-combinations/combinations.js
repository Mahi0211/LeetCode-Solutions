/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = [], temp = [];
    function recursive(start) {
        if (temp.length === k) {
            res.push([...temp]);
            return;
        }
        for (let i = start; i >= 1; i--) {
            temp.push(i);
            recursive(i - 1);
            temp.pop();
        }
    }
    recursive(n);
    return res;
};