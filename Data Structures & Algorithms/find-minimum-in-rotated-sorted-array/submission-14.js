class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = 1000;
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const h = Math.floor((l + r) / 2);

            min = Math.min(min, nums[h]);

            if (nums[h] < nums[r]) {
                r = h - 1;
            } else {
                l = h + 1;
            }
        }

        return min;
    }
}
