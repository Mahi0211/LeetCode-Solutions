/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let pair = new Map();
    for (let num of nums) {
        pair.set(num, (pair.get(num) || 0) + 1)
    }

    for (let count of pair.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }
return true
}