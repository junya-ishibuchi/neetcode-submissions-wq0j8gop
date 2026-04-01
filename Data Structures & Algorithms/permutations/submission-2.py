class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        perm = []
        res = []

        def backtrack():
            if len(nums) == len(perm):
                res.append(perm.copy())
                return
            
            for x in nums:
                if x not in perm:
                    perm.append(x)
                    backtrack()
                    perm.pop()
                    
        
        backtrack()
        return res