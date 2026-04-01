class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const bits = new Array(n+1).fill(0);
        let offset = 1;
        for (let i = 1; i <= n; i++) {
            if (offset * 2 == i) {
                offset = i;
            }
            bits[i] = 1 + bits[i - offset];
        }

        return bits;
    }
}
