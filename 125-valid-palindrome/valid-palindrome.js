/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let n = newS.length;
    function res(i) {
        if (i >= n / 2) return true;
        if (newS[i] != newS[n - i - 1]) return false;
        return res(i + 1)
    }
    return res(0)
};