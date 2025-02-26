/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])
            water += leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(rightMax, height[right])
            water += rightMax - height[right]
            right--
        }
    }
    return water
};