class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROW = matrix.length - 1;
        const COLUMN = matrix[0].length - 1;

        let l = 0;
        let r = ROW;

        while (l <= r) {
            let half_r = (l + r) / 2 | 0;
            if (matrix[half_r][0] <= target && matrix[half_r][COLUMN] >= target) {
                l = 0;
                r = COLUMN;
                while (l <= r) {
                    let half_c = (l + r) / 2 | 0;
                    if (matrix[half_r][half_c] > target) {
                        r = half_c - 1;
                    } else if (matrix[half_r][half_c] < target) {
                        l = half_c + 1;
                    } else {
                        return true;
                    }
                }
                return false;
            } else if (matrix[half_r][0] > target) {
                r = half_r - 1;
            } else if (matrix[half_r][COLUMN] < target) {
                                l = half_r + 1;                
            }
        }
        return false;
    }
}
