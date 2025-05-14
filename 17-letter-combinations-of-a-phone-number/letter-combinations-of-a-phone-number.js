/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits || digits === "") return [];
    let ans = [], temp = [];
    const M = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    const backtrack = (i) => {
        if (i === digits.length) {
            ans.push(temp.join(''));
            return;
        }
        for (let char of M[digits[i]]) {
            temp.push(char)
            backtrack(i + 1)
            temp.pop()
        }
    }
    backtrack(0)
    return ans
};