/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length == 0) return 0;
  var dp = new Array(nums.length).fill(0); // dp[i]表示包括i之前的最大连续子序列和
  dp[0] = nums[0];
  var result = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]); // 状态转移公式
    if (dp[i] > result) result = dp[i]; // result 保存dp[i]的最大值
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));