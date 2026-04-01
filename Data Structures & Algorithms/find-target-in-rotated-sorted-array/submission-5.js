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

            if (nums[l] <= nums[h]) {
                if (target <= nums[h] && target >= nums[l]) {
                    r = h - 1;
                } else {
                    l = h + 1;
                }
            } else {
               if (target < nums[h] || target > nums[r]) {
                    r = h - 1;
                } else {
                    l = h + 1;
                }
            }
        }
        return -1;
    }
}
