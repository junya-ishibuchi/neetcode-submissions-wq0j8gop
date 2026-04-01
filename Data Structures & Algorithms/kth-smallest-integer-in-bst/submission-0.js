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
     * @param {number} k
     * @return {number}
     */
     kthSmallest(root, k) {
    const state = { k, ans: null };
    this.dfs(root, state);
    return state.ans;
  }

  dfs(node, state) {
    if (!node || state.ans !== null) return;

    this.dfs(node.left, state);

    if (state.ans !== null) return; // 左で見つかったら打ち切り
    state.k--;
    if (state.k === 0) {
      state.ans = node.val;
      return;
    }

    this.dfs(node.right, state);
  }
}