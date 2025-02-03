/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz"); // Divisible by both 3 and 5
        } else if (i % 3 === 0) {
            answer.push("Fizz"); // Divisible by 3
        } else if (i % 5 === 0) {
            answer.push("Buzz"); // Divisible by 5
        } else {
            answer.push(i.toString()); // Not divisible by 3 or 5
        }
    }
    return answer;
};