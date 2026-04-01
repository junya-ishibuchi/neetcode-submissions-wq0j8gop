class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Firstly, compare the length of two arrays
        if (s.length !== t.length) {
          // If it's not the same length, return false
          return false;
        }

        // Create an array for checking
        const checkArray = [];

        // First loop: Iterate through 's' to put each char to the array
        for (const c of s) {
            checkArray[c] = (checkArray[c] ?? 0) + 1;
        }

        // Second loop: Iterate through 't' to check the char contains in the array or not
        for (const c of t) {
            if (!checkArray[c]) {
                return false;
            }
            checkArray[c]--;
        }
        return true
    }
}

// Time complexity: O(n) n is the length of the string
// Space Complexity: O(n)