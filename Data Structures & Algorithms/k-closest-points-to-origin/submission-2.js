class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

        for (const [x, y] of points) {
            maxHeap.enqueue([(x ** 2 + y ** 2), x, y]);
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        const res = [];
        while (k > 0) {
            const [_, x, y] = maxHeap.dequeue();
            res.push([x,y]);
            k--;
        }
        return res;
    }
}
