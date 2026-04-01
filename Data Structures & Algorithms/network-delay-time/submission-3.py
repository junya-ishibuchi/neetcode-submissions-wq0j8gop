class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # create adjency list
        edges = collections.defaultdict(list)
        for u, v, w in times:
            edges[u].append((v, w))
        
        visit = set()
        minHeap = [(0, k)]
        t = 0

        while minHeap:
            w1, n1 = heapq.heappop(minHeap)
            if n1 in visit:
                continue

            t = w1
            visit.add(n1)
            for ta, w2 in edges[n1]:
                if ta not in visit:
                    heapq.heappush(minHeap, (w1 + w2, ta))
        
        return t if len(visit) == n else -1
