/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let i = 0
//     let max = 0
//     for (let j = 1; j < prices.length; j++) {
//         if (prices[i] < prices[j]) {
//             max = Math.max(max, prices[j] - prices[i])
//         } else {
//             i = j
//         }
//     }
//     return max
// };

var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
};
