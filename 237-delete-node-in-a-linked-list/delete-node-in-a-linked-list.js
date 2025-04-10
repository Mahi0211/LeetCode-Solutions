/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    //4 -> 5 -> 1 -> 9
    node.val = node.next.val;
    //4 -> 1 -> 1 -> 9
    node.next = node.next.next;
    //4 -> 1 -> 9
};