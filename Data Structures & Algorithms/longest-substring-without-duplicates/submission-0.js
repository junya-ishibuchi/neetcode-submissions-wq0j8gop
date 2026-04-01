class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        if (s.length === 1) return 1;

        const seen = {};
        let l = 0;
        let r = 1;
        let res = 0;
        seen[s.charAt(l)] = l;

        while (r < s.length) {
            const ch = s.charAt(r);
            if (seen[ch] === undefined || seen[ch] < l) {
                // 新しい or 現在のウィンドウ外の文字
                seen[ch] = r;
                r++;
                continue;
            }
            res = Math.max(res, r - l);
            l = seen[ch] + 1;
            seen[ch] = r;
            r++;
        }

        res = Math.max(res, r - l); // 最後の区間を比較
        return res;
    }
}