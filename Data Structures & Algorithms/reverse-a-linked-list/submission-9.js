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
     * @return {ListNode}
     */
    reverseList(head) {
        // Create curr node 
        // Create prev node
        let curr = head;
        let prev = null;

        // Interate through curr
        while (curr) {
            // Store next of curr
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
}
// Time complexity: O(n), where n is the number of head
// Space complexity: O(1)