class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        # Create an adjacent nodes and visit
        adj = { i: [] for i in range(n) }
        visit = set()
        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)

        def dfs(i, prev):
            if i in visit:
                return False
            
            visit.add(i)
            for j in adj[i]:
                if j == prev:
                    continue
                if not dfs(j, i):
                    return False
            return True

        # Do a dfs to detect a cycle with a prev value
        return dfs(0, -1) and len(visit) == n