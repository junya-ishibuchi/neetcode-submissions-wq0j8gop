class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xor = 0;
        for (let i = 0; i <= nums.length; i++) {
            xor ^= i ^ nums[i];
        }
        return xor;
    }
}
