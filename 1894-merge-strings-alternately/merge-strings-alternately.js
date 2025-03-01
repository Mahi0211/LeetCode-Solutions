/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
    let A = word1.length, B = word2.length
    let a = 0, b = 0
    let result = []
    while (a < A && b < B) {
        result.push(word1.charAt(a++))
        result.push(word2.charAt(b++))
    }
    while (a < A) result.push(word1.charAt(a++))
    while (b < B) result.push(word2.charAt(b++))
    return result.join("")
}

// var mergeAlternately = function (word1, word2) {
//     let A = word1.length, B = word2.length
//     let a = 0, b = 0
//     let word = 1
//     let str = ""
//     while (a < A && b < B) {
//         if (word === 1) {
//             str += word1.charAt(a);
//             a++
//             word = 2
//         } else {
//             str += word2.charAt(b);
//             b++
//             word = 1
//         }
//     }

//     while (a < A) {
//         str += word1.charAt(a);
//         a++
//     }
//     while (b < B) {
//         str += word2.charAt(b);
//         b++
//     }
//     return str
// };