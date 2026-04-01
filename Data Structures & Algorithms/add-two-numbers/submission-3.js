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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let carryOver = false;

        let curr = dummy;
        while (l1 || l2) {
            let val = 0;
            if (carryOver) {
                val++;
                carryOver = false;
            }

            if (l1) {
                val += l1.val;
                l1 = l1.next;
            }
            if (l2) {
                val += l2.val;
                l2 = l2.next;
            }

            if (val >= 10) {
                carryOver = true;
                val -= 10;
            }

            const node = new ListNode(val);
            curr.next = node;
            curr = node;
        }
        if (carryOver) {
            curr.next = new ListNode(1);
        }

        return dummy.next;
    }
}
