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
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = new Queue();
        queue.push(root);
        const res = [];
        const level = 0;

        while (!queue.isEmpty()) {
            const level = []
            for (let i = queue.size(); i > 0; i--) {
                const node = queue.pop();
                if (node) {
                    level.push(node.val);
                                    queue.push(node.left);
                queue.push(node.right);
                }
            }
            if (level.length) {
                res.push(level)
            }
        }
        return res;
    }
}
