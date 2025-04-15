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
var copyRandomList = function (head) {
    if (!head) return null;

    let temp = head;
    let map = new Map();

    while (temp) {
        map.set(temp, new Node(temp.val));
        temp = temp.next;
    }

    temp = head;
    while (temp) {
        let copyNode = map.get(temp);
        copyNode.next = map.get(temp.next) || null;
        copyNode.random = map.get(temp.random) || null;
        temp = temp.next;
    }

    return map.get(head);
};
