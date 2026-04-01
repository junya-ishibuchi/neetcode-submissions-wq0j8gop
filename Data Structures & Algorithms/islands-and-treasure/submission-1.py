class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        q = deque()
        visit = set()

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 0:
                    q.append([r, c])

        step = 0
        while q:
            for i in range(len(q)):
                r, c = q.popleft()
                if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == -1 or (r, c) in visit:
                    continue
                grid[r][c] = step
                visit.add((r, c))

                q.append((r, c + 1))
                q.append((r, c - 1))
                q.append((r + 1, c))
                q.append((r - 1, c))

            step += 1