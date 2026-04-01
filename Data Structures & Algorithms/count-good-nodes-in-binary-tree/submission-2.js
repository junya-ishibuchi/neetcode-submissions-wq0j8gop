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
        const q = new Queue();
        q.push([root.left, root.val]);
        q.push([root.right, root.val]);
        let res = 1;

        while (!q.isEmpty()) {
            let [node, max] = q.pop();
            if (!node) {
                continue;
            }
            if (node.val >= max) {
                res++;
            }
            q.push([node.left, Math.max(max, node.val)]);
            q.push([node.right, Math.max(max, node.val)]);
        }
        return res;
    }
}
