/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let string1 = "",
        string2 = "";

    let current = head;

    while (current != null) {
        string1 = `${string1}${current.val}`;
        string2 = `${current.val}${string2}`;
        current = current.next;
    }
    return string1 === string2;
};