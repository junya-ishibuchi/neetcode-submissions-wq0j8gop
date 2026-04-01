class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Create a stack(FILO)
        const stack = [];

        // Iterate through s
        for (const p of s) {
            // When the value of s is open parentheses, put it into the stack
            if (this.isOpen(p)) {
                stack.push(p);
                continue;
            }
        
            // When the value of s is CLOSED parenthese
            if (this.isClosed(p)) {
                const parenthese = stack.pop();
                if (p === ')' && parenthese !== '(') {
                    return false;
                }
                if (p === '}' && parenthese !== '{') {
                    return false;
                }
                if (p === ']' && parenthese !== '[') {
                    return false;
                }
                // compare the last value of the stack.
            // If these are correspond parentheses
                // Dequeue and continue
            }
        }
        
        // When you reach here and the stack is empty, return true
        return stack.length === 0;
    }

    isOpen(p) {
        return p === '(' || p === '{' || p === '[';
    }

    isClosed(p) {
        return p === ')' || p === '}' || p === ']';
    }
}

// Time Complexity: O(n), where n is the number of s
// Space Complexity: O(n)
