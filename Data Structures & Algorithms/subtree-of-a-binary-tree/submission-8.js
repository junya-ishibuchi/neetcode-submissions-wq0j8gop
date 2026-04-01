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

        if (this.isSametree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSametree(tree, subTree) {
        if (!tree && !subTree) {
            return true;
        }

        if (tree && subTree && tree.val === subTree.val) {
            return this.isSametree(tree.left, subTree.left) && this.isSametree(tree.right, subTree.right);
        }

        return false;
    }
}
