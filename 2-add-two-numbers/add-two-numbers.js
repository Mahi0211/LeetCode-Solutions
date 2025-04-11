/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy;
    var carry = 0;

    while (l1 != null || l2 != null || carry > 0) {
        var val1 = l1 ? l1.val : 0;
        var val2 = l2 ? l2.val : 0;

        var sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;

        current.next = new ListNode(sum);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
};