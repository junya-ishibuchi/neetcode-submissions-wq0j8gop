class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adjMap = [[] for _ in range(n)]
        visit = set()
        for a, b in edges:
            adjMap[a].append(b)
            adjMap[b].append(a)

        def dfs(node):
            for nei in adjMap[node]:
                if nei not in visit:
                    visit.add(nei)
                    dfs(nei)
        
        res = 0
        for node in range(n):
            if node not in visit:
                visit.add(node)
                dfs(node)
                res += 1

        return res