class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create a Map of nums
        const hash = new Map();

        for (let i = 0; i < nums.length; i++) {
        // [3: 0, 4: 1, 5: 2, 6: 3]
            hash.set(nums[i], i);
        }
        
        // iterate through the nums
        for (let i = 0; i < nums.length; i++) {
          // if there is the target - the number in the Map,
          let foundIndex = hash.get(target - nums[i]);
          if (foundIndex && i !== foundIndex) {
          // 7 - 3 = 4
          // return the index of the number and the index of the Map
            return [i, hash.get(target - nums[i])];
          }
        }

        // Otherwise, return false;
        return false; 
    }
}
