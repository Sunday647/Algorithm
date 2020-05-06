/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。
 如果 n 是快乐数就返回 True ；不是，则返回 False 。
 链接：https://leetcode-cn.com/problems/happy-number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let arr = [4,16,24,,37,42,58,61,73,85,145,20]
    while(n !=1 ){
        n = sqrSum(n)
        if(arr.indexOf(n) !== -1) {
            return false;
        }

    }
    return true;

};

let sqrSum = (n) => {
    let res = 0;
    while(n) {
        let tmp = n%10;
        res += tmp * tmp;19
        n = parseInt(n/10);
    }
    return res
}