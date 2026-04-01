class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
        this.hash = new Map();
    }

    add(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;

    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.hash.has(key)) {
            const node = this.hash.get(key);
            this.remove(node);
            this.add(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const node = new Node(key, value);
        if (this.hash.has(key)) {
            this.remove(this.hash.get(key));
        }
        this.hash.set(key, node);
        this.add(node);
        if (this.hash.size > this.cap) {
            const lru = this.left.next;
            this.remove(lru);
            this.hash.delete(lru.key);
        }
    }
}
