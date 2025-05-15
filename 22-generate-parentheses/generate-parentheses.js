/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
    let res = [];
    const backtrack = (s, open, close) => {
        if (s.length === n * 2) {
            res.push(s)
            return
        }
        if (open < n) backtrack(s + "(", open + 1, close);
        if (close < open) backtrack(s + ")", open, close + 1);
    }
    backtrack("", 0, 0)
    return res;
};

// var generateParenthesis = function (n) {
//     let res = [], temp = [];
//     const backtrack = (open, close) => {
//         if (open === n && close === n) {
//             res.push(temp.join(''))
//             return
//         }
//         if (open < n) {
//             temp.push('(')
//             backtrack(open + 1, close)
//             temp.pop()
//         }
//         if (close < open) {
//             temp.push(')')
//             backtrack(open, close + 1)
//             temp.pop()
//         }
//     }
//     backtrack(0, 0)
//     return res;
// };