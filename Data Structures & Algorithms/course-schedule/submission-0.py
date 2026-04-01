class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        courseMap = { i:[] for i in range(numCourses)}
        visit = set()

        def dfs(cor):
            if courseMap[cor] == []:
                return True
            if cor in visit:
                return False
            visit.add(cor)
            for c in courseMap[cor]:
                if not dfs(c):
                    return False
            visit.remove(cor)
            courseMap[cor] = []
            return True            
        
        for i, c in prerequisites:
            courseMap[i].append(c)

        for i in range(numCourses):
            if not dfs(i):
                return False

        return True