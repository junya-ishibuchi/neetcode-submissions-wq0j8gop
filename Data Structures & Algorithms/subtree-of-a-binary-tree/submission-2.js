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
        if (!subRoot) {
            return true;
        }

        if (!root) {
            return false;
        }

        if (this.sameTree(root, subRoot)) {
            return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }

    sameTree(tree, subTree) {
        if (!tree && !subTree) {
            return true;
        }
        if (!tree || !subTree) {
                return false;
        }

        if (tree.val !== subTree.val) {
            return false;
        }

        return this.sameTree(tree.left, subTree.left) && this.sameTree(tree.right, subTree.right);
    }
}
