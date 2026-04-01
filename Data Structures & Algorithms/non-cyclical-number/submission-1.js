class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let digits = String(n).split('').map(Number);
        let result = 0;
        const set = new Set();
        
        while (result !== 1) {
            result = 0;
            for (const d of digits) {
                result += d*d;
            }
            if (set.has(result)) {
                return false;
            }
            set.add(result);

            digits = String(result).split('').map(Number);
        }

        return true;
    }
}
