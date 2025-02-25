/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxValue = 0

    let left = 0, right = height.length - 1

    while (left < right) {
        let minHeight = Math.min(height[left], height[right])
        let width = right - left
        let currentArea = minHeight * width
        maxValue = Math.max(maxValue, currentArea)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxValue
};