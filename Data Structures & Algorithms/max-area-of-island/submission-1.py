class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        res = 0
        visit = set()

        def dfs(c, r):
            if c < 0 or r < 0 or c >= len(grid) or r >= len(grid[0]) or (c, r) in visit or grid[c][r] != 1:
                return 0

            visit.add((c, r))
            return (1 + dfs(c + 1, r)+ dfs(c - 1, r)+ dfs(c, r + 1)+ dfs(c, r - 1))
        
        for c in range(len(grid)):
            for r in range(len(grid[0])):
                if grid[c][r] == 1 and (c,r) not in visit:
                    res = max([res, dfs(c, r)])

        return res

