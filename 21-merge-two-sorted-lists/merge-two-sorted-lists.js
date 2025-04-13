/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val === list2.val) {
            current.next = new ListNode(list2.val);
            current = current.next;
            current.next = new ListNode(list1.val);
            current = current.next;
            list1 = list1.next;
            list2 = list2.next;
        } else if (list2.val < list1.val) {
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        } else {
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }
    }

    while (list1) {
        current.next = list1;
        current = current.next;
        list1 = list1.next;
    }

    while (list2) {
        current.next = list2;
        current = current.next;
        list2 = list2.next;
    }

    return dummy.next;
};
