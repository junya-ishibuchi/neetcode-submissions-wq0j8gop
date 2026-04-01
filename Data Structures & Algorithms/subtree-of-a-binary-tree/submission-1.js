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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const queue = [root];
        let result = false;

        while (queue.length) {
            const node = queue.shift();
            if (!node) {
                continue;
            }

            result = this.compareTrees(node, subRoot);
            if (result) {
                return true;
            }
            queue.push(node.left);
            queue.push(node.right);   
        }

        return result;
    }

    compareTrees(tree1, tree2) {
        const stack = [[tree1, tree2]];

        while (stack.length) {
            const [one, two] = stack.pop();

            if (!one && !two) {
                continue;
            }
            if (!one || !two || one.val !== two.val) {
                return false;
            }
            stack.push([one.left, two.left]);
            stack.push([one.right, two.right]);
        }

        return true;
    }
}
