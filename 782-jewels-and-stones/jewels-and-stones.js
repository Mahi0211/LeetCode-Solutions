/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let stoneSet = new Map();
    let result = 0;

    for (let stone of stones) {
        stoneSet.set(stone, (stoneSet.get(stone) || 0) + 1);
    }

    for (let jewel of jewels) {
        if (stoneSet.has(jewel)) {
            result += stoneSet.get(jewel);
        }
    }
    return result;
};