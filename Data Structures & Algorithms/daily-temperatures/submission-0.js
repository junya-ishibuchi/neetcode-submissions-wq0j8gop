class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && stack[stack.length - 1][0] < t) {
                const [temp, idx] = stack.pop();
                result[idx] = i - idx;
            }
            stack.push([t, i]);
        }
        return result;
    }
}
