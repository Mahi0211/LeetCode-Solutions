/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [], temp = [];
    const backtrack = (open, close) => {
        if (open === n && close === n) {
            res.push(temp.join(''))
            return
        }
        if (open < n) {
            temp.push('(')
            backtrack(open + 1, close)
            temp.pop()
        }
        if (close < open) {
            temp.push(')')
            backtrack(open, close + 1)
            temp.pop()
        }
    }
    backtrack(0, 0)
    return res;
};