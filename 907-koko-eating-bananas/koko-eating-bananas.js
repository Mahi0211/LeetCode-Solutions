/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let low = 1,
        high = Math.max(...piles);
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        let hours = piles.reduce((acc, cur) => {
            return acc + Math.ceil(cur / mid);
        }, 0);

        if (hours <= h) {
            high = mid;
        } else {
            low = mid + 1;
        }

        // if (hours === h) {
        //   return mid;
        // } else if (h > hours) {
        //   high = mid - 1;
        // } else {
        //   low = mid + 1;
        // }
    }
    return low;
};