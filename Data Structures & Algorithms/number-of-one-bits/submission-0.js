class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0;
        for (let i = 1; i <= 32; i++) {
            if (n % 2 != 0) {
                count++;
            }

            n = n >>> 1;
        }
        return count;
    }
}
