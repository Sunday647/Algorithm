/**
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 示例 1:
 输入: [1,2,0]
 输出: 3

 示例 2:
 输入: [3,4,-1,1]
 输出: 2
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if(nums.length == 0 || nums.indexOf(1) == -1) return 1;
  let max = Math.max(...nums);
  let x = -1;
  for(let i=1; i<max+1; i++) {
    if(nums.indexOf(i) == -1) {
      x = i;
      break;
    }
  }
  return x!== -1? x:max+1;
};