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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];

        while (stack.length) {
            const [pNode, qNode] = stack.pop();

            if (!pNode && !qNode) continue;
            if (!pNode || !qNode || pNode.val !== qNode.val) {
                return false;
            }

            stack.push([pNode.left, qNode.left]);
            stack.push([pNode.right, qNode.right]);
        }

        return true;
    }
}
