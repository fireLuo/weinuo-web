/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var list = [], path = [], used = [];
  nums.sort((a, b) => a - b);
  backTracking(list, path, used, nums);
  return list;
};

var backTracking = function (list, path, used, nums) {
  if (path.length === nums.length) {
    list.push(path.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] === true) {
      continue;
    }
    if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
      continue;
    }
    path.push(nums[i]);
    used[i] = true;
    backTracking(list, path, used, nums);
    path.pop();
    used[i] = false;
  }
}

console.log('begin', permuteUnique([1, 1, 2, 2]));