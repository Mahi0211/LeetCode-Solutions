/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let trimmedStr = s.trim().split("");
    let count = 0;

    for (let i = trimmedStr.length - 1; i >= 0; i--) {
        if (trimmedStr[i] === " ") {
            break;
        }
        count++
    }
    return count;
};