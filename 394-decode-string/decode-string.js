/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "]") {
            stack.push(s[i])
        } else {
            let substr = ""
            while (stack.length > 0 && stack[stack.length - 1] !== "[") {
                substr = stack.pop() + substr;
            }
            stack.pop()
            let k = ""
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }
            stack.push(substr.repeat(parseInt(k)));
        }
    }
    return stack.join("");
};