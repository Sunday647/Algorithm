/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  let result = [];
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      let tmp = nums[i] + nums[j];
      if(tmp == target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};