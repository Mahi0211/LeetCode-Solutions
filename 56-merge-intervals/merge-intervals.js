/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let startIndex = 0;
    let endIndex = 1;

    intervals.sort((a, b) => a[startIndex] - b[startIndex]); //sort using inbuild sort method

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