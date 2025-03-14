/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    let reversed = 0;
    let original = x;

    // while (original > 0) {
    //     reversed = (reversed * 10) + (original % 10);
    //     original = Math.floor(original / 10)
    // }
    // return reversed === x

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10)
    }
    return reversed === original
}

// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     let str = x.toString();
//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }
//     return isPalindrome(parseInt(str.slice(1, -1)) || 0);
// };