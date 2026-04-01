class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        visit = set()
        reqMap = { i: [] for i in range(numCourses) }
        hasSet = set()
        res = []

        for cur, pre in prerequisites:
            reqMap[cur].append(pre)

        def dfs(num):
            if reqMap[num] == []:
                return True
            if num in visit:
                return False
            
            visit.add(num)
            for preNum in reqMap[num]:
                if not dfs(preNum):
                    return False
                if preNum not in hasSet:
                    res.append(preNum)
                    hasSet.add(preNum)
            visit.remove(num)
            return True

        for num in range(numCourses):
            if num in hasSet:
                continue

            if reqMap[num] and not dfs(num):
                return []
            res.append(num)
            hasSet.add(num)
        
        return res

# 0: [], 1: [2, 3], 2: [], 3: []