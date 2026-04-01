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
            let h = (l + r) / 2 | 0;
            if (nums[h] === target) {
                return h;
            }

            if (nums[l] <= nums[h]) {
                if (nums[l] <= target && nums[h] > target) {
                    r = h - 1;
                } else {
                    l = h + 1;
                }
            } else {
                if (nums[r] >= target && nums[h] < target) {
                    l = h + 1;
                } else {
                    r = h - 1;
                }
            }
        }
        return -1;
    }
}
