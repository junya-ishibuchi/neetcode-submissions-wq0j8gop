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
        const dia = [0];
        this.explore(root, dia);
        return dia[0];
    }

    explore(node, dia) {
        if (!node) {
            return 0;
        }

        const left = this.explore(node.left, dia);
        const right = this.explore(node.right, dia);
        dia[0] = Math.max(dia[0], left+right);
        return 1 + Math.max(left, right);
    }
}
