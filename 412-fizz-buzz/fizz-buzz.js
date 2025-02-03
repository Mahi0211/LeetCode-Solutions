/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(
            (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
            (i % 3 === 0) ? "Fizz" :
            (i % 5 === 0) ? "Buzz" :
            i.toString()
        );
    }
    return answer;
};

// var fizzBuzz = function (n) {
//     let answer = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             answer.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             answer.push("Fizz");
//         } else if (i % 5 === 0) {
//             answer.push("Buzz");
//         } else {
//             answer.push(i.toString());
//         }
//     }
//     return answer;
// };