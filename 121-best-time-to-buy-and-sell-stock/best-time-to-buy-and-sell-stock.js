/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minStock = prices[0] || 0;
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStock) {
            minStock = prices[i];
        }
        profit = Math.max(profit, prices[i] - minStock);
    }
    return profit;
}
