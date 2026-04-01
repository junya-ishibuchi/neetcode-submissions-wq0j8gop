class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
            if (digits[digits.length - 1] + 1 < 10) {
                digits[digits.length - 1] += 1;
                return digits;
            }

        digits[digits.length - 1] = 0;
        for (let i = digits.length - 2; i >=0; i--) {
            let tmp = digits[i] + 1;
            if (tmp < 10) {
                digits[i] = tmp;
                return digits;
            }
            digits[i] = 0
        }
        digits.unshift(1);

        return digits;
    }
}
