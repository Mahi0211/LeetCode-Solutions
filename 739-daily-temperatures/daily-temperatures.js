/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let ans = new Array(temperatures.length).fill(0)

    for (let val in temperatures) {
        while (stack.length > 0 && temperatures[val] > temperatures[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            ans[prevIndex] = val - prevIndex;
        }
        stack.push(val)
    }
    return ans;
};