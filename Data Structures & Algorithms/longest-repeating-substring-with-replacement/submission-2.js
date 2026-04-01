class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // Sliding window length - Most frequent char count <= k
        const hash = new Map();
        let res = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const char = s.charAt(r);
            if (!hash.get(char)) {
                hash.set(char, 0);
            }
            hash.set(char, hash.get(char) + 1);

            const windowLength = (r - l) + 1;
            const formular = windowLength - Math.max(...hash.values())
            if (formular > k) {
                hash.set(s.charAt(l), hash.get(s.charAt(l)) - 1);
                l++;
            }

            res = Math.max(res, (r - l) + 1);
        }
        return res;
    }
}
