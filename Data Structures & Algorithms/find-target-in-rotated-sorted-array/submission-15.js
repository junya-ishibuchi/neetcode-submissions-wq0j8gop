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
            const h = Math.floor((l + r) / 2);
            if (nums[h] === target) {
                return h;
            }

            if (nums[h] < nums[r]) {
                if (nums[h] <= target && target <= nums[r]) {
                    l = h + 1;
                } else {
                    r = h - 1;
                }
            } else {
                if (nums[h] >= target && target >= nums[l]) {
                    r = h - 1;
                } else {
                    l = h + 1;
                }
            }
        }

        return -1;
    }
}
