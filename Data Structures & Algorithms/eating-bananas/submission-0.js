class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = 0;
        for (const p of piles) {
            max = Math.max(max, p);
        }

        let l = 1;
        let r = max;
        let res = max;

        while (l <= r) {
            let hours = 0;
            const half = (l + r) / 2 | 0;
            for (const p of piles) {
                hours += Math.ceil(p / half);
            }
            if (hours <= h) {
                res = Math.min(res, half);
                r = half - 1;
            } else {
                l = half + 1;
            }
        }

        return res;
    }
}
