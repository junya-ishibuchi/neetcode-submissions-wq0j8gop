class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const res = [];
        res['idx'] = cost.length - 1;
        res['cost'] = 0;
        this.dfs(cost, res);

        return res['cost'];
    }

    dfs(cost, res) {
        const i = res['idx'];
if (cost[i] === undefined || cost[i - 1] === undefined) {
            return;
        }

        if (cost[i - 1] <= cost[i]) {
            res['cost'] += cost[i - 1];
            res['idx'] = i - 2;
        } else {
            res['cost'] += cost[i];
            res['idx'] = i - 1;
        }
        this.dfs(cost, res);
    }
}
