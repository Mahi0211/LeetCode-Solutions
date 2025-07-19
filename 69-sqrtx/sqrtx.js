/**
 * @param {number} x
 * @return {number}
 */

//  Babylonian Method (Heron’s Algorithm)

var mySqrt = function (x) {
    if (x < 0) return NaN;

    let guess = x / 2;
    const precision = 0.000001;

    while (Math.abs(guess * guess - x) > precision) {
        guess = (guess + x / guess) / 2;
    }
    return Math.floor(guess);
};