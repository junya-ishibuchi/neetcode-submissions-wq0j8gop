/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let size = 0;
        let curr = head;

        while (curr) {
            size++;
            curr = curr.next;
        }

        curr = head;
        let prev = null
        for (let i = 1; i <= size; i++) {
            if (i === size - (n - 1)) {
                if (!prev && size === 1) {
                    return null;
                } else if (!prev && size > 1) {
                    return head.next;
                }
                prev.next = curr.next;
                return head;
            }
            prev = curr;
            curr = curr.next;
        }
        return head;
    }
}
