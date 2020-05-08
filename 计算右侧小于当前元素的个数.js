/**
 * @param {number[]} nums
 * @return {number[]}
 */
let countSmaller = (nums) => {
  let arr = nums.map((it,idx) => {
    let count = 0;
    for(let i = idx+1; i<nums.length; i++) {
      if(nums[idx] > nums[i]) {
        count++;
      }
    }
    return count;
  })
  return arr;
};