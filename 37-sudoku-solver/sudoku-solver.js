/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    const isValid = (board, row, col, c) => {
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === c) return false;
            if (board[row][i] === c) return false;
            if (board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + i % 3] === c) return false
        }
        return true;
    }

    const solve = (board) => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let v = 1; v <= 9; v++) {
                        let c = v.toString()
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            if (solve(board)) return true;
                            board[i][j] = '.';
                        }
                    }
                    return false
                }
            }
        }
        return true;
    }
    solve(board)
    return board
};