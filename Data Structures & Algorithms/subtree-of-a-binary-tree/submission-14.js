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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) {
            return false;
        }
        if (!subRoot) {
            return true;
        }

        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(node, subNode) {
        if (!node && !subNode) {
            return true;
        }

        if (node && subNode && node.val === subNode.val) {
            return (this.isSameTree(node.left, subNode.left) &&
                this.isSameTree(node.right, subNode.right))
        }
            return false;
    }
}
