/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  var list = [];
  var path = [];
  backTracking(list, path, nums, 0);
  return list;
};

var backTracking = function (list, path, nums, startIndex) {
  if (path.length >= 2) {
    list.push(path.slice());
  }
  // 同一层去重，在同一层记录一个used数组.
  var used = {};
  for (let i = startIndex; i < nums.length; i++) {
    if (i !== 0) {
      if (nums[i] < path[path.length - 1]) {
        continue;
      }
      if (used[nums[i]]) {
        continue;
      }
    }
    used[nums[i]] = true;
    path.push(nums[i]);
    backTracking(list, path, nums, i + 1);
    path.pop();
  }
}