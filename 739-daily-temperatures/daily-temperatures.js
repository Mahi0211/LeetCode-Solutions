/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return answer;
};

// var dailyTemperatures = function (temperatures) {
//     let stack = [];
//     let ans = new Array(temperatures.length).fill(0)

//     for (let val in temperatures) {
//         while (stack.length > 0 && temperatures[val] > temperatures[stack[stack.length - 1]]) {
//             let prevIndex = stack.pop();
//             ans[prevIndex] = val - prevIndex;
//         }
//         stack.push(val)
//     }
//     return ans;
// };