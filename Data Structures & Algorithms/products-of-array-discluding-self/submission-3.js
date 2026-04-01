class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0;
        let allProduct = nums.reduce(function (total, num) {
            if (num == 0) {
                zeroCount++;
                return total;
            }
            return total*num
        });

        if (zeroCount >=2) {
            return new Array(nums.length).fill(0)
        }

        const result = [];
        for (const num of nums) {
            if (zeroCount === 1) {
                result.push(num === 0 ? allProduct : 0);
            } else {
                result.push(allProduct / num);
            }
        }
        return result;
    }
}
