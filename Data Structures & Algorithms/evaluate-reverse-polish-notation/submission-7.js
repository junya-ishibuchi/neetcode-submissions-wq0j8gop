class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const nums = [];

        for (const t of tokens) {
            if (t === '+') {
                nums.push(nums.pop() + nums.pop());
            } else if (t === '-') {
                const r = nums.pop();
                const l = nums.pop()
                nums.push(Math.trunc(l - r));
            } else if (t === '*') {
                nums.push(nums.pop() * nums.pop());
            } else if (t === '/') {
                const r = nums.pop();
                const l = nums.pop()
                nums.push(Math.trunc(l / r));
            } else {
                nums.push(Number(t));
            }
        }
        return nums.pop();
    }
}
