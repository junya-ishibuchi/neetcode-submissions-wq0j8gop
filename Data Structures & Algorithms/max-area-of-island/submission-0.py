class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        res = 0
        cur = [0]
        visit = set()

        def dfs(c, r):
            if c < 0 or r < 0 or c >= len(grid) or r >= len(grid[0]) or (c, r) in visit or grid[c][r] != 1:
                return

            visit.add((c, r))
            cur[0] += 1

            dfs(c + 1, r)
            dfs(c - 1, r)
            dfs(c, r + 1)
            dfs(c, r - 1)
        
        for c in range(len(grid)):
            for r in range(len(grid[0])):
                if grid[c][r] == 1 and (c,r) not in visit:
                    cur[0] = 0
                    dfs(c, r)
                    res = max([res, cur[0]])

        return res

