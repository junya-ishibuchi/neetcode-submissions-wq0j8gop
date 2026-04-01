class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let min = Infinity;

        while (l <= r) {
            let h = Math.floor((l+r)/2);
            min = Math.min(min, nums[h]);

            if (nums[l] < nums[r]) {
                return Math.min(min, nums[l]);
            }
            if (nums[l] > nums[h]) {
                r = h - 1;
            } else {
                l = h + 1;
            }
        }
        return min;
    }
}
