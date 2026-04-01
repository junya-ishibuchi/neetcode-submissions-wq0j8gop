class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counter = {}
        for task in tasks:
            counter[task] = counter.get(task, 0) + 1
        maxHeap = []
        for count in counter.values():
            maxHeap.append(-count)
        heapq.heapify(maxHeap)

        q = deque()
        time = 0

        while maxHeap or q:
            time += 1

            if not maxHeap:
                time = q[0][1]
            else:
                task = heapq.heappop(maxHeap) + 1
                if task:
                    q.append([task, n + time])
            if q and q[0][1] == time:
                heapq.heappush(maxHeap, q.popleft()[0])
        
        return time