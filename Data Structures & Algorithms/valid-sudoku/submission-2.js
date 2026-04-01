class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;
                const char = board[r][c];
                const squareKey = Math.floor(r / 3) + ',' + Math.floor(c / 3);
                if ((rows.get(r) && rows.get(r).has(char))
                    || (cols.get(c) && cols.get(c).has(char))
                    || (squares.get(squareKey) && squares.get(squareKey).has(char))
                ) {
                    return false;
                }

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!squares.has(squareKey)) squares.set(squareKey, new Set());

                rows.get(r).add(char);
                cols.get(c).add(char);
                squares.get(squareKey).add(char);
            }
        }
        return true;
    }
}
