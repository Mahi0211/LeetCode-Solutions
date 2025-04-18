/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let sum = 0;
    //     let n = s.length;
    //     let i = 0;

    //     while (i < n) {
    //         if (i < n - 1 && map[s[i]] < map[s[i + 1]]) {
    //             sum += map[s[i + 1]] - map[s[i]];
    //             i += 2;
    //         } else {
    //             sum += map[s[i]];
    //             i += 1;
    //         }
    //     }
    //     return sum;

    for (let i = 0; i < s.length; i++) {
        let current = map[s[i]];
        let next = map[s[i + 1]];

        if (current < next) {
            sum -= current;
        } else {
            sum += current
        }
    }
    return sum;
};
