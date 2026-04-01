class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let idx = nums[0];
        while (true) {
            if (nums[idx] < 0) {
                return idx;
            }
            nums[idx] = -1 * nums[idx];
            idx = Math.abs(nums[idx]);
        }

    }
}
