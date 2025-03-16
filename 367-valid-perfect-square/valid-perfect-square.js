/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let l = 1, r = num;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid * mid === num) {
            return true;
        } else if (mid * mid > num) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return false;
};
