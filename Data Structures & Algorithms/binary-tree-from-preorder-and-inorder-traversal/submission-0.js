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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (!preorder.length || !inorder.length) {
            return null;
        }

        const tree = new TreeNode(preorder[0]);
        const mid = inorder.indexOf(preorder[0]);
        tree.left = this.buildTree(
            preorder.slice(1, mid + 1),
            inorder.slice(0, mid)
        );
        tree.right = this.buildTree(
            preorder.slice(mid + 1),
            inorder.slice(mid + 1)
        )
        return tree;
    }
}
