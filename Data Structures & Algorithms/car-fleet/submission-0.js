class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);
        const stack = [];

        for (const p of pair) {
            stack.push((target - p[0]) / p[1]);
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
