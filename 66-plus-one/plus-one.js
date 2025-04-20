/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits;
        }
        digits[i] = 0;
    }
    // If all digits were 9, we need an extra leading 1
    digits.unshift(1);
    return digits;
};