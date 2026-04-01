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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root;
        while (true) {
            if (!curr) {
                return null;
            }
            if (Math.max(p.val, q.val) >= curr.val && Math.min(p.val, q.val) <= curr.val) {
                return curr;
            }

            if (Math.max(p.val, q.val) < curr.val) {
                curr = curr.left;
            } else if (Math.max(p.val, q.val) > curr.val) {
                curr = curr.right;
            }
        }
    }
}
