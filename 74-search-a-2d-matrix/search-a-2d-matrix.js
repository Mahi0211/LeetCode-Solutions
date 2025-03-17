/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length,
        n = matrix[0].length;
    let t = m * n;
    let l = 0,
        r = t - 1;

    while (l <= r) {
        let M = Math.floor((l + r) / 2);
        let i = Math.floor(M / n),
            j = M % n;
        let mid_num = matrix[i][j];
        if (target === mid_num) {
            return true;
        } else if (target < mid_num) {
            r = M - 1;
        } else {
            l = M + 1;
        }
    }
    return false;
};