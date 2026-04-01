class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const h = ((l+r) / 2) | 0;
            if (nums[h] === target) {
                return h;
            }

            if (nums[l] <= nums[h]) { // left sorted
                if (nums[l] <= target && target <= nums[h]) {
                    r = h - 1;
                } else {
                    l = h + 1;
                }
            } else { // right should be sorted
                if (nums[r] >= target && target >= nums[h]) {
                    l = h + 1;
                } else {
                    r = h - 1;
                }
            }
        }
        return -1;
    }
}
