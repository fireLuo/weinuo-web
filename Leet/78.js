/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var list = [];
  var path = [];
  list.push([]);
  backTracking(list, path, nums, 0);
  return list;
};

var backTracking = function (list, path, nums, startIndex) {
  if (startIndex == nums.length) {
    return;
  }
  for (let i = startIndex; i < nums.length; i++) {
    path.push(nums[i]);
    list.push(path.slice());
    backTracking(list, path, nums, i + 1);
    path.pop();
  }
}