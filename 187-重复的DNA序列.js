/**
 *所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
 *编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列（子串）。
 示例1：
 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 输出：["AAAAACCCCC", "CCCCCAAAAA"]

 示例2：
 输入：s = "AAAAAAAAAAA"
 输出：["AAAAAAAAAA"]

 链接：https://leetcode-cn.com/problems/repeated-dna-sequences
 */
/**
 * @param {string} s
 * @return {string[]}
 */
// 耗时 240ms ，击败了 5.94%的用户
var findRepeatedDnaSequences = function(s) {
  if(s.length < 10) {
    return [];
  }
  let arr = s.split('');
  let obj = {};
  let len = arr.length;
  let result = [];
  for(let i=0; i+10 < len+1; i++) {
    let sub_s = arr.slice(i,i+10).join('');
    if(obj[sub_s]) {
      obj[sub_s]++;
    }else {
      obj[sub_s] = 1;
    }
  }
  for(let k in obj) {
    if(obj[k] > 1) {
      result.push(k)
    }
  }

  return result

};