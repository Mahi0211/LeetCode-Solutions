/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
    function floorsCovered(moves, eggs) {
        let total = 0;
        let c = 1; // Initial combination value (C(m, 0) = 1)
        for (let i = 1; i<= eggs; i++) {
            c = (c * (moves - i + 1)) / i;// Compute C(m, i) iteratively - combinations formula
            total += c
            if (total >= n) return total;
        }
        return total;
    }

    let low = 1, high = n;
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (floorsCovered(mid, k) >= n) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return low;
};