class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        ROW, COL = len(heights), len(heights[0])
        pac, atl = set(), set()

        def dfs(r, c, visit, prevHeight):
            if r < 0 or c < 0 or r >= ROW or c >= COL or heights[r][c] < prevHeight or (r, c) in visit:
                return
            
            visit.add((r, c))

            height = heights[r][c]
            dfs(r + 1, c, visit, height)
            dfs(r - 1, c, visit, height)
            dfs(r, c + 1, visit, height)
            dfs(r, c - 1, visit, height)

        for c in range(COL):
            dfs(0, c, pac, 0)
            dfs(ROW - 1, c, atl, 0)
        
        for r in range(ROW):
            dfs(r, 0, pac, 0)
            dfs(r, COL - 1, atl, 0)

        res = []
        for c in range(COL):
            for r in range(ROW):
                if (r, c) in pac and (r, c) in atl:
                    res.append([r, c])
        
        return res
