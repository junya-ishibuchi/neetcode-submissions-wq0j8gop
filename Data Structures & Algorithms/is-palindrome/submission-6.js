class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Create two pointers, a and z
        let a = 0;
        let z = s.length - 1;

        // Iterate through 's'
        while (a < z) {
            // In the loop:
            // check the s[a] and s[z] if they're not non-alphanumeric
            // if non-alphanumeric, increase or decrease the pointer
            while (a < z && !this.isAlphanumeric(s[a])) {
                a++;
            } 
            while (a < z && !this.isAlphanumeric(s[z])) {
                z--;
            } 

            // Compare the charactor of those index
            if (s[a].toLowerCase() !== s[z].toLowerCase()) {
                // If they're not the same, return false, which means that s isn't a palindrome
                return false;
            }
            a++;
            z--;
        }
        return true;
    }

    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
// Time Complexity: O(n), where n is the lengths of s
// Space Complexity: O(1)
