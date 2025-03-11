/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b]
    }
    return b;
}

// var fib = function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2)
// };