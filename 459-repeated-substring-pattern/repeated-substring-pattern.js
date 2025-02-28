/**
 * @param {string} s
 * @return {boolean}
 */

var repeatedSubstringPattern = function (s) {
    if (s.length === 1) return false;
    let set = s + s
    let trimmed = set.slice(1, - 1)
    return trimmed.includes(s)
}

// var repeatedSubstringPattern = function (s) {
//     if (s.length === 1) return false;
//     let characterCount = new Map()
//     for (let char of s) {
//         characterCount.set(char, (characterCount.get(char) || 0) + 1)
//     }

//     let counts = Array.from(characterCount.values())

//     let frequency = counts[0]
//     for (let count of counts) {
//         if (count !== frequency) return false
//     }
//     return s.length % frequency === 0

// };