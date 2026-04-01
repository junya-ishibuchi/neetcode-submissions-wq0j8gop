class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;

        const seen = new Set(nums);

        let longest = 1;
        for (let num of nums) {
            let count = 0;
            while (seen.has(num--)) {
                if (longest < ++count) {
                    longest = count;
                }
            }
        }

        return longest;
    }
}
