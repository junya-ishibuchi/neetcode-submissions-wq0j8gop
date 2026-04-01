class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const left = new Array(nums.length).fill(1);
        const right = new Array(nums.length).fill(1);
        
        let r = nums.length - 2;
        for (let l = 1; l < nums.length; l++) {
            left[l] = left[l - 1] * nums[l - 1];
            right[r] = right[r + 1] * nums[r + 1];
            r--;
        }

        const result = [];
        for (let i = 0; i < nums.length; i++) {
            result.push(left[i] * right[i]);
        }

        return result;
    }
}
