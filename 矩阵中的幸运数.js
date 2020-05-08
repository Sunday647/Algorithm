/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  matrix.forEach((it,idx) => {
    let rowmin,colmax,cloumn=[];
    rowmin = Math.min(...it);
    let x = it.indexOf(rowmin);
    for(let i=0; i<m;i++) {
      cloumn.push(matrix[i][x])
    }
    colmax = Math.max(...cloumn);
    if(rowmin == colmax) {
      result.push(rowmin);
    }
  });

  return result;
};