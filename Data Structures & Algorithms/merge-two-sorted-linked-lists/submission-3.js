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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Create a dummy node
        // Create a current node
        const dummy = new ListNode();
        let current = dummy;
        
        // Iterate through until list1 and list2 have value.
        while (list1 && list2) {
            // Assign the smaller value to the current node
            // Move the pointer of the node
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next
        }

        // If list1 or list2 have value
            // Link the remining list to the next of the current node
        if (list1) {
            current.next = list1;
        }
        if (list2) {
            current.next = list2;
        }
        // return dummy.next
        return dummy.next;
    }
}
