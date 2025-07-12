/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let n = image.length;
    let result = [];
    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = image[i].length - 1
        let arr = image[i]
        while (left <= right) {
            [arr[left], arr[right]] = [arr[right] ^ 1, arr[left] ^ 1];
            left++
            right--
        }
        result.push(arr)
    }
    return result;
};