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
    goodNodes(root) {
        let count = 1;

        function dfs(node, max) {
            if (!node) {
                return;
            }
            if (max <= node.val) {
                count++;
                max = node.val
            }
            dfs(node.left, max);
            dfs(node.right, max);
        }
        dfs(root.left, root.val);
        dfs(root.right, root.val);
        return count;
    }
}
