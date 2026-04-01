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
        const h = ((l + r) / 2) | 0;
        min = Math.min(min, nums[h]);

        if (nums[h] <= nums[r]) {
            r = h - 1; // 右半分がソートされている
        } else {
            l = h + 1; // 左半分がソートされている
        }
    }

    return min;
}
}
