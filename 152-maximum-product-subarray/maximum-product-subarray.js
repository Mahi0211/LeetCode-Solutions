/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxProduct = nums[0]; // Store max product
    let product = 1; // Track product

    // Pass 1: Left to Right
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
        maxProduct = Math.max(maxProduct, product);
        if (product === 0) product = 1; // Reset on zero
    }

    // Pass 2: Right to Left
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        product *= nums[i];
        maxProduct = Math.max(maxProduct, product);
        if (product === 0) product = 1; // Reset on zero
    }

    return maxProduct;
};
