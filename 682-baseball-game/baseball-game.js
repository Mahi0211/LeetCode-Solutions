/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function (operations) {
    let stack = [];

    for (let val of operations) {
        switch (val) {
            case 'C':
                stack.pop();
                break;
            case 'D':
                stack.push(stack[stack.length - 1] * 2);
                break;
            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            default:
                stack.push(parseInt(val));
        }
    }
    let result = stack.reduce((a, b) => a + b, 0);
    return result;
}

// var calPoints = function (operations) {
//     let stack = [];

//     for (let val of operations) {
//         if (!isNaN(val)) {
//             stack.push(parseInt(val));
//         } else {
//             if (val === "C") {
//                 stack.pop();
//             } else if (val === "D") {
//                 stack.push(stack[stack.length - 1] * 2);
//             } else if (val === "+") {
//                 stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
//             }
//         }
//     }
//     let result = stack.reduce((a, b) => a + b, 0);
//     return result;
// };