class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) {
            return 0;
        }
        if (s.length === 1) {
            return 1;
        }

        const seen = {};

        let l = 0;
        let r = 1;
        let res = 0;
        seen[s.charAt(l)] = l;

        while (r < s.length) {
            if (seen[s.charAt(r)] === undefined || seen[s.charAt(r)] < l) {
                seen[s.charAt(r)] = r;
                r++;
                continue;
            }
            res = Math.max(res, r - l);
            l = seen[s.charAt(r)] + 1;
            seen[s.charAt(r)] = r;
            r++;
        }

res = Math.max(res, r - l);
        return res;
    }
}
