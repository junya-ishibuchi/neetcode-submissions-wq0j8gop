class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = [[]]
        lastIndex = 1
        for num in nums:
            res = res + [x.copy() for x in res]
            while lastIndex < len(res):
                res[lastIndex].append(num)
                lastIndex += 1

        return res
# [1, 2]
# [], [1], [2], [1, 2]

# [1, 2, 3]
# [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]

# 1, 2, 3
# []
# [], [1]
# [], [1], [], [1]