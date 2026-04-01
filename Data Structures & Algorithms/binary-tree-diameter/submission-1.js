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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const diameter = [0];
        this.diameter(root, diameter);
        return diameter[0];
    }

    diameter(node, diameter) {
        if (!node) {
            return 0;
        }

        const left = this.diameter(node.left, diameter);
        const right = this.diameter(node.right, diameter);
        diameter[0] = Math.max(diameter[0], left + right);
        return 1 + Math.max(left, right);
    }
}
// Time complexty: O(n), where n is the number of nodes
// Space complexty: O(n)