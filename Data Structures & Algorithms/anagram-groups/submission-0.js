class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const counters = new Map();
        for (const str of strs) {
            let strCounter = new Array(26).fill(0);
            for (let c of str) {
                strCounter[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = strCounter.join(',');
            if (!counters.has(key)) {
                counters.set(key, []);
            }
            counters.get(key).push(str);
        }

        return Array.from(counters.values());
    }
}