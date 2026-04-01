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
        // Find the middle point
        // slow, fast
        let slow = head;
        let fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Reverse the second array
        // Since I know the middle point above, just reverse the list
        let reverse = slow.next;
        slow.next = null;
        let prev = null;
        while (reverse) {
            let next = reverse.next;
            reverse.next = prev;
            prev = reverse;
            reverse = next;
        }

        const res = head;
        // Merge those arrays
        while (prev) {
            const hNext = head.next;
            const rNext = prev.next;
            head.next = prev;
            prev.next = hNext;
            head = hNext;
            prev = rNext;
        }

        return res; 
    }
}
