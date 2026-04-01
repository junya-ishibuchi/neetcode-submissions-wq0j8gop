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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow;
        while (curr) {
            const temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let left = head;
        let right = prev;
        while (left) {
            const t1 = left.next;
            const t2 = right.next;
            left.next = right;
            right.next = t1;
            left = t1;
            right = t2;
        }
    }
}
