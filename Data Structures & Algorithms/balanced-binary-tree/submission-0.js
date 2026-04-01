/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.explore(root) >= 0;
    }

    explore(root) {
        if (!root) {
            return 0;
        }

        const left = this.explore(root.left);
        const right = this.explore(root.right);
        if (left < 0 || right < 0) {
            return -1;
        }
        if (Math.abs(left - right) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    }
}
// Time Complexity: O(n), where n is the number of nodes
// Space Complexity: O(n)