// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const history = new Map();
        let copy = this.copy(head, history);
        const dummy = new Node(0, copy, null);

        while (head) {
            if (!head.random) {
                copy.random = null;
            } else {
                copy.random = history.get(head.random);
            }
            
            copy = copy.next;
            head = head.next;
        }

        return dummy.next;
    }

    copy(node, history) {
        if (!node) {
            return null;
        }

        const newNode = new Node(node.val);
        history.set(node, newNode);
        newNode.next = this.copy(node.next, history);

        return newNode;
    }
}
