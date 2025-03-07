/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [], temp = [];
    let used = new Set();

    function recursive() {
        if (temp.length === nums.length) {
            return result.push([...temp])
        }
        for (let num of nums) {
            if (!used.has(num)) {
                used.add(num);
                temp.push(num);
                recursive();
                temp.pop();
                used.delete(num)
            }
        }
    }
    recursive()
    return result;
};