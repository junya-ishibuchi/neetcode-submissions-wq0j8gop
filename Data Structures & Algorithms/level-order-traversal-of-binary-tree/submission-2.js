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
        const queue = [[root, 0]];
        const res = [];

        while (queue) {
            const q = queue.shift();
            if (!q) break;
            const node = q[0];
            if (!node) continue;
            const level = q[1];
            console.log(node);
            if (!res[level]) {
                res[level] = [node.val]
            } else {
                res[level].push(node.val);
            }

            queue.push([node.left, level + 1]);
            queue.push([node.right, level + 1]);
        }
        return res;
    }
}
