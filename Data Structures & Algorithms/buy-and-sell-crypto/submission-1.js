class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // Create startIdx = 0
        // Create maxProfit = 0
        let startIdx = 0;
        let maxProfit = 0;

        // Iterate through prices
        for (let i = 1; i < prices.length; i++) {
            // If the value of currentIdx is greater than startIdx,
            // and maxProfit is greate than the sum of endIdx - startIdx
            if (prices[startIdx] < prices[i] && maxProfit < prices[i] - prices[startIdx]) {
                // Assign the sum to maxProfit
                maxProfit =  prices[i] - prices[startIdx];
            }

            // If the value of currentIdx is less than the value of startIdx
            if (prices[i] < prices[startIdx]) {
                // Assign the startIdx to currentIdx
                startIdx = i;
            }
        }
        
        return maxProfit;
    }
}
// Time Complexity: O(n), where n is the number of prices
// Space Complexity: O(1)