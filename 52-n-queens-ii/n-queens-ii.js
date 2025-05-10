/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
    const sol = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (col, row, board, n) => {
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 'Q') return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const solve = (col, board, sol, n) => {
        if (col === n) {
            sol.push(board.map(row => row.join('')));
            return;
        }
        for (let row = 0; row < n; row++) {
            if (isSafe(col, row, board, n)) {
                board[row][col] = 'Q';
                solve(col + 1, board, sol, n);
                board[row][col] = '.';
            }
        }
    };

    solve(0, board, sol, n);
    return sol.length;
};