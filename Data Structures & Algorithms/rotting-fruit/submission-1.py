class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()
        minute = 0
        fresh = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 2:
                    q.append([r, c])
                if grid[r][c] == 1:
                    fresh += 1

        while q and fresh > 0:
            for i in range(len(q)):
                r, c = q.popleft()

                for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                    tmpr = r + dr
                    tmpc = c + dc
                    if tmpr < 0 or tmpc < 0 or tmpr >= len(grid) or tmpc >= len(grid[0]) or grid[tmpr][tmpc] != 1:
                        continue
                    fresh -= 1
                    grid[tmpr][tmpc] = 2
                    q.append([tmpr, tmpc])
            minute += 1

        return minute if fresh == 0 else -1