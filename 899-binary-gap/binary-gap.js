/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let binary = n.toString(2);
    let maxGap = 0;
    let lastIndex = -1;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") {
            if (lastIndex !== -1) {
                maxGap = Math.max(maxGap, i - lastIndex)
            }
            lastIndex = i
        }
    }
    return maxGap;
};