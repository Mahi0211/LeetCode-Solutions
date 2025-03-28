/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (nums.length < 2) return 0;
    quickSort(nums, 0, nums.length - 1);
    let max = 0;
    let current = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let result = nums[i + 1] - nums[i];
        current = Math.max(current, result);
        max = Math.max(current, max);
    }
    return max;
}

var quickSort = function (arr, low, high) {
    if (low >= high) return arr; //base condition
    let start = low;
    let end = high;
    let mid = Math.floor(start + (end - start) / 2);
    let pivot = arr[mid];

    while (start <= end) {
        while (arr[start] < pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start <= end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    quickSort(arr, low, end);
    quickSort(arr, start, high);

    return arr;
};