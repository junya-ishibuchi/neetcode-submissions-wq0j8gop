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
        const queue1 = new Queue([p]);
        const queue2 = new Queue([q]);

        while(!queue1.isEmpty() && !queue2.isEmpty()) {
            const pNode = queue1.pop();
            const qNode = queue2.pop();

            if ((pNode && !qNode) 
            || (!pNode && qNode)) {
                return false;
            } 

            if (!pNode && !qNode) {
                continue;
            } 

            if (pNode.val !== qNode.val) {
                return false;
            }
            if ((pNode.left && !qNode.left) 
            || (!pNode.left && qNode.left)) {
                return false;
            } 

            if ((pNode.right && !qNode.right) 
            || (!pNode.right && qNode.right)) {
                return false;
            } 

            if (pNode.left) {
                queue1.push(pNode.left);
                queue2.push(qNode.left);
            }
            if (pNode.right) {
                queue1.push(pNode.right);
                queue2.push(qNode.right);
            }
        }

        return true;
    }
}
