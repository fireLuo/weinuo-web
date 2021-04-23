/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0];
  const result = [];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > prev[1]) {
      result.push(prev);
      prev = intervals[i];
    } else {
      prev = [Math.min(prev[0], intervals[i][0]), intervals[i][1]];
    }
  }
  result.push(prev);
  if (result.length === intervals.length) {
    return result;
  }
  return merge(result);
};


console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));