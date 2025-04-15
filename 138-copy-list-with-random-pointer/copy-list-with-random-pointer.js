/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let temp = head;
    let map = new Map();

    let dummy = new ListNode(0);
    let current = dummy;

    // First pass: Copy nodes and store them in the map
    while (temp) {
        current.next = new ListNode(temp.val); // Use temp.val instead of current.val
        current = current.next;

        map.set(temp, current);

        temp = temp.next;
    }

    temp = head;

    // Second pass: Assign next and random pointers
    while (temp) {
        let copyNode = map.get(temp);
        copyNode.next = map.get(temp.next) || null;
        copyNode.random = map.get(temp.random) || null;
        temp = temp.next;
    }

    return dummy.next;
};
