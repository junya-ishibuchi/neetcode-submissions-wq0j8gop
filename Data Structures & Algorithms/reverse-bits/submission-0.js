class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;
        for (let i = 0; i < 32; i++) {
            let tmp = (n >>> i) & 1
            result += tmp << (31 - i)
        }
        return result >>> 0;
    }
}
