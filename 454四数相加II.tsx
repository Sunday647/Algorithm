/**
 *给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。

 例如:

 输入:
 A = [ 1, 2]
 B = [-2,-1]
 C = [-1, 2]
 D = [ 0, 2]

 输出:
 2

 解释:
 两个元组如下:
 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

 链接：https://leetcode-cn.com/problems/4sum-ii
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
// 菜鸡版，超出时间限制
var fourSumCount = function(A, B, C, D) {
  let sumAB = twoSumCount(A,B);
  let sumCD = twoSumCount(C,D);
  let result = 0;
  Object.keys(sumAB).map((x,i) => {
    Object.keys(sumCD).map((y,j) => {
      if((parseInt(x) + parseInt(y)) == 0) {
        result += sumAB[x] * sumCD[y]
      }
    })
  })
  return result;

};
let twoSumCount = (X,Y) => {
  let n = X.length;
  let obj = {};
  X.map((x,i) => {
    Y.map((y,j) => {
      obj[x + y]? obj[x + y]++ : obj[x + y]=1;
    })
  })
  return obj;
}

// 不超出时间限制
/**
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 */
var fourSumCount22 = function (A, B, C, D, t) {
  return (
      C.reduce(
          (h, c) => (
              D.forEach(
                  d => h.has(t = c + d) && h.set('r', h.get('r') + h.get(t))
              ), h),   //  累记器 callback(accumulator, currentValue[, index[, array]])
          A.reduce(
              (h, a) => (
                  B.forEach(
                      b => h.set(t = 0 - a - b, h.has(t) ? h.get(t) + 1 : 1)
                  ), h),
              new Map([['r', 0]])) // 初始值
      ).get('r')
  )
};
