class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = nums[0];

        while (l <= r) {
            if (nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }

            let h = Math.floor((l+r) / 2);
            min = Math.min(min, nums[h]);
            if (nums[l] <= nums[h]) {
                l = h + 1;
            } else {
                r = h - 1;
            }
        }
        return min;
    }
}
