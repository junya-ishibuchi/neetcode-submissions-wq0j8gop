class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Map();
        const col = new Map();
        const square = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const num = board[r][c];
                if (num === '.') continue;
                
                if (row.get(r) && row.get(r).has(num)) {
                    return false;
                }
                if (col.get(c) && col.get(c).has(num)) {
                    return false;
                }
                const key = `${Math.floor(r/3)}.${Math.floor(c/3)}`;
                if (square.get(key) && square.get(key).has(num)) {
                    return false;
                }

                if (!row.get(r)) row.set(r, new Set());
                if (!col.get(c)) col.set(c, new Set());
                if (!square.get(key)) square.set(key, new Set());
                row.get(r).add(num);
                col.get(c).add(num);
                square.get(key).add(num);
            }
        }

        return true;
    }
}
