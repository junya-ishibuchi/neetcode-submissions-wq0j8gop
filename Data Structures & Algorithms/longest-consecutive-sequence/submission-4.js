class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        const seen = new Set();
        for (const num of nums) {
            seen.add(num);
        }

        const starts = [];
        for (const num of nums) {
            if (seen.has(num - 1)) continue;
            starts.push(num);
        }

        let longest = 1;
        for (let start of starts) {
            let count = 1;
            while (seen.has(++start)) {
                if (longest < ++count) {
                    longest = count;
                }
            }
        }

        return longest;
    }
}
