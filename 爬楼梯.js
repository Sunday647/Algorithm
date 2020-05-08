/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var arr = [0,1,2];
  if(n <= 0) {
    return 0;
  }
  if(n == 1) {
    return 1;
  }
  if(n == 2) {
    return 2;
  }
  for(var i = 3; i< n + 1; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n];
};