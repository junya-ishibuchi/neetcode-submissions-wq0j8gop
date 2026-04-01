class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const s1s = new Array(26).fill(0);
        const s2s = new Array(26).fill(0);
        let match = 0;

        let count = 0;
        for (const s1c of s1) {
            s1s[s1c.charCodeAt(0) - 97]++;
            s2s[s2.charCodeAt(count++) - 97]++;
        }

        for (let i = 0; i < 26; i++) {
            if (s1s[i] === s2s[i]) {
                match++;
            }
        }

        let l = 0
        for (let r = s1.length; r < s2.length; r++) {
            if (match === 26) {
                return true;
            }

            let index = s2.charCodeAt(l) - 97;
            s2s[index]--;
            if (s2s[index] === s1s[index]) {
                match++;
            } else if ((s2s[index] + 1) === s1s[index]) {
                match--;
            }
            l++;

            index = s2.charCodeAt(r) - 97;
            s2s[index]++;
            if (s2s[index] === s1s[index]) {
                match++;
            } else if ((s2s[index] - 1) === s1s[index]) {
                match--;
            }
        }
        return match === 26;
    }
}
