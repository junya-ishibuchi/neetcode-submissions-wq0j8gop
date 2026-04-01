class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1

        while (l <= r) {
            const half = (l + r) / 2 | 0;
            if (nums[half] < target) {
                l = half + 1;
            } else if (nums[half] > target) {
                r = half - 1;
            } else {
                return half;
            }
        }

        return -1;
    }
}
