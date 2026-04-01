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
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        const queue = new Queue([root]);
        let level = 0;
        while (queue.size() > 0) {
            const size = queue.size();
            for (let i = 0; i < size; i++) {
                const current = queue.pop();
                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }
            level++;
        }

        return level;
    }
}
