/**
 * const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class KthLargest {
    /**
     * enqueue()
     * size()
     * dequeue()
     * front()
     */
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        // Create a min heap 
        this.minHeap = new MinPriorityQueue();
        this.k = k;
        for (const n of nums) {
            this.minHeap.enqueue(n);
        }
        // Create the min heap with size K
        while(this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
