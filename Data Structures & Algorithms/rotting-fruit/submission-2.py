class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()
        fresh = 0
        minute = 0

        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 2:
                    q.append([r + 1, c])
                    q.append([r - 1, c])
                    q.append([r, c + 1])
                    q.append([r, c - 1])
                elif grid[r][c] == 1:
                    fresh += 1

        while q and fresh > 0:
            for i in range(len(q)):
                r, c = q.popleft()

                if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] != 1:
                    continue
                grid[r][c] = 2
                fresh -= 1

                q.append([r + 1, c])
                q.append([r - 1, c])
                q.append([r, c + 1])
                q.append([r, c - 1])
            minute += 1

        return minute if fresh == 0 else -1