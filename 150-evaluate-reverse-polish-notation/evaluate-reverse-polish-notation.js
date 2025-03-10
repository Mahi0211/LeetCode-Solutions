/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
    let stack = [];
    let operators = {
        "+": (b, a) => a + b,
        "-": (b, a) => a - b,
        "*": (b, a) => a * b,
        "/": (b, a) => Math.trunc(a / b),
    };

    for (let val of tokens) {
        if (operators[val]) {
            stack.push(operators[val](stack.pop(), stack.pop()));
        } else {
            stack.push(parseInt(val));
        }
    }
    return stack[0];
};

// var evalRPN = function (tokens) {
//   let stack = [];

//   for (let val of tokens) {
//     switch (val) {
//       case "+":
//         stack.push(stack.pop() + stack.pop());
//         break;
//       case "-":
//         let b = stack.pop();
//         let a = stack.pop();
//         stack.push(a - b);
//         break;
//       case "*":
//         stack.push(stack.pop() * stack.pop());
//         break;
//       case "/":
//         let divisor = stack.pop();
//         let dividend = stack.pop();
//         stack.push(Math.trunc(dividend / divisor));
//         break;
//       default:
//         stack.push(parseInt(val));
//     }
//   }
//   return stack[0];
// };