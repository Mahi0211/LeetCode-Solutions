/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    const x1 = x.toString(2);
    const y1 = y.toString(2);

    const maxLength = Math.max(x1.length, y1.length)
    const x1Padded = x1.padStart(maxLength, "0")
    const y1Padded = y1.padStart(maxLength, "0")
    let distance = 0
    for (let i = 0; i < maxLength; i++) {
        if (x1Padded[i] !== y1Padded[i]) {
            distance++
        }
    }
    return distance;
};