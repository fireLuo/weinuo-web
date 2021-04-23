/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let cover = 0, count = -1;
  if (nums.length == 1) {
    return 0;
  }
  for (let i = 0; i <= cover; i++) {
    var curCover = nums[i] + i;
    cover = Math.max(cover, curCover);
    if (cover === curCover) {
      count++;
    }
    if (cover >= nums.length - 1) {
      return count;
    }
  }
};

console.log(jump([1, 2, 1, 1, 1]));