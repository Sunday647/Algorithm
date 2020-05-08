/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
  let a = x.toString();
  let b = a.split('').reverse().join('');
  if(x == b) {
    return true;
  }
  return false;

};