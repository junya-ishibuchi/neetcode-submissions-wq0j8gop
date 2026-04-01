class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const m of matrix) {
            if (m[0] <= target && m[m.length - 1] >= target) {
                let l = 0;
                let r = m.length - 1;
                while (l <= r) {
                    const half = (l + r) / 2 | 0;
                    if (m[half] < target) {
                        l = half + 1;
                    } else if (m[half] > target) {
                        r = half - 1;
                    } else {
                        return true;
                    }
                }
                return false;
            }
        }
        return false;
    }
}
