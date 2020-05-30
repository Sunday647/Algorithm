/**
 *给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 示例 1 :
 输入:nums = [1,1,1], k = 2
 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 说明 :
 数组的长度为 [1, 20,000]。
 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。

 链接：https://leetcode-cn.com/problems/subarray-sum-equals-k
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 双层循环，枚举
 */
/**
 * 执行用时 :708 ms, 在所有 JavaScript 提交中击败了7.12%的用户
 内存消耗 :36.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * @param nums
 * @param k
 * @returns {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  for(let s = 0; s < nums.length; s++) {
    let sum = 0;
    for(let e = s; e >=0; e--) {
      sum += nums[e];
      if(sum == k) {
        count++;
      }
    }
  }
  return count;
};