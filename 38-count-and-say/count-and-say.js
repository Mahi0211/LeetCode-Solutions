/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) return "1";

    let prev = "1";

    for (let i = 2; i <= n; i++) {
        let newSeq = "";
        let count = 1
        for (let j = 1; j < prev.length; j++) {
            if (prev[j] === prev[j - 1]) {
                count++;
            } else {
                newSeq += count.toString() + prev[j - 1]
                count = 1
            }
        }
        newSeq += count.toString() + prev[prev.length - 1];
        prev = newSeq;
    }
    return prev;
};