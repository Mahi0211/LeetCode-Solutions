/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const sol = [];
    const board = Array(n).fill('.'.repeat(n));

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
    }

    const solve = (col, board, sol, n) => {
        if (col === n) {
            sol.push([...board]);
            return;
        }
        for (let row = 0; row < n; row++) {
            if (isSafe(col, row, board, n)) {
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1)
                solve(col + 1, board, sol, n);
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1)
            }
        }
    }
    solve(0, board, sol, n)
    return sol;
};