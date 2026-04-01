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
     * @return {boolean}
     */
    hasCycle(head) {
        // Create slow and fast variables
        let slow = head;
        let fast = head.next;

        // Iterate through head
        while (head && slow && fast) {
            // I move the pointer of the slow one by one
            // I move the pointer of the fast every two pointers
            // If you find the same value, return true

            if (slow.val === fast.val) {
                return true;
            }
            slow = slow.next;
            if (!fast?.next?.next) {
                return false;
            }
            fast = fast.next.next;

            head = head.next;
        }

        // When you are outside of the loop, return false;
        return false;
    }
}
// 1, 2, 3, 4, 2, 3, 4, 2, 3, 4
// 2, 4, 3, 2, 4, 3