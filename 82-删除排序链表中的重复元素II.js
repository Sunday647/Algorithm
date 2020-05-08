/**
 *给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

 示例 1:
 输入: 1->2->3->3->4->4->5
 输出: 1->2->5

 示例 2:
 输入: 1->1->1->2->3
 输出: 2->3

 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head || !head.next) {
    return head;
  }
  //如果并没有重复结点, 直接让head的next等于下一个处理结果
  if(head.next.val != head.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }
  //有重复元素, 需要找到第一个不同的结点, 这里是head.next.
  while(head.next && head.next.val === head.val) {
    head = head.next;
  }

  return deleteDuplicates(head.next);
};