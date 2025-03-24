/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let startIndex = 0;
    let endIndex = 1;

    //   intervals.sort((a, b) => a[startIndex] - b[startIndex]); //sort using inbuild sort method
    intervals = mergeSort(intervals);

    const mergeIntervals = [];

    let mergeStart = intervals[0][startIndex];
    let mergeEnd = intervals[0][endIndex];

    for (let i = 1; i < intervals.length; i++) {
        const subsequentInterval = intervals[i];

        if (subsequentInterval[startIndex] <= mergeEnd) {
            mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
        } else {
            mergeIntervals.push([mergeStart, mergeEnd]);
            mergeStart = subsequentInterval[startIndex];
            mergeEnd = subsequentInterval[endIndex];
        }
    }
    mergeIntervals.push([mergeStart, mergeEnd]);
    return mergeIntervals;
};

var mergeSort = function (nums) {
    //base case
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return mergeArray(left, right);
};

function mergeArray(left, right) {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0][0] < right[0][0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
}