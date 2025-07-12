/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let row of image) {
        let left = 0;
        let right = row.length - 1
        while (left <= right) {
            [row[left], row[right]] = [row[right] ^ 1, row[left] ^ 1];
            left++
            right--
        }
    }
    return image;
};