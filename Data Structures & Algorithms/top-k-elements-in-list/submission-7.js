class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        const freqArr = {};
        for (const [num, freq] of Object.entries(counts)) {
            if (!freqArr[freq]) {
                freqArr[freq] = [num];
                continue;
            }
            freqArr[freq].push(num);
        }

        const result = [];
        for (let i = nums.length; i > 0; i--) {
            if (!freqArr[i]) {
                continue;
            }
            for (const num of freqArr[i]) {
                result.push(num)
                if (result.length >= k) {
                    return result;
                }
            }
        }
        return result;
    }
}
