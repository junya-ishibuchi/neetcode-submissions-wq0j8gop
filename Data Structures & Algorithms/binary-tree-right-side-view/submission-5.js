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
     * @return {number[]}
     */
    rightSideView(root) {
        const res = [];
        const q = new Queue();

        q.push(root);

        while (!q.isEmpty()) {
            const qLen = q.size();
            let right = null;
            for (let i = 0; i < qLen; i++) {
                const node = q.pop();
                if (node) {
                    right = node;
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (right) {
                res.push(right.val);
            }
        }
        return res;
    }
}
