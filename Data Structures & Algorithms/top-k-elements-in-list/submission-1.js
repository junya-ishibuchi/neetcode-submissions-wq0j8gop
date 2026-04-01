class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = new Map();

        for (const num of nums) {
            if (!hash.has(num)) { 
                hash.set(num, 1);
                continue;
            }
            hash.set(num, hash.get(num) + 1);
        }

        const minQ = new MinPriorityQueue((x) => x[1]);

        for (const [num, freq] of hash.entries()) {
            minQ.enqueue([num, freq]);
            if (minQ.size() > k) { 
                minQ.dequeue();
            }
        }

        const result = [];
        for (let i = 0; i < k; i++) {
            const [num, freq] = minQ.dequeue();
            result.push(num);
        }

        return result;
    }
}
