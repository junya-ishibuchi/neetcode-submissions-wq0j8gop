class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        res = max(nums)
        minNum = 1
        maxNum = 1

        for n in nums:
            if n == 0:
                minNum, maxNum = 1, 1
                continue
            tempMin = min(n ,minNum * n, maxNum * n)
            tempMax = max(n ,minNum * n, maxNum * n)
            minNum = min(tempMin, tempMax)
            maxNum = max(tempMin, tempMax)
            res = max(res, maxNum)
        
        return res