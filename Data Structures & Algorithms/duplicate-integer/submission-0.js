class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // create a hash
        const hash = new Set();

        // iterate nums
        for (const num of nums) {

        // set the value and compare the value and the hash
          // if you find the duplicate, return true
            if (hash.has(num)) {
                return true;
            }

            hash.add(num);
        }

        
        // The outside of the loop, return false
        return false;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)