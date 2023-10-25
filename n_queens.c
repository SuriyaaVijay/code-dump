#include <stdio.h>
#include <stdbool.h>

#define N_MAX 10

int board[N_MAX][N_MAX];

bool isSafe(int row, int col, int n) {
    // Check if the current position is under attack by any previously placed queen

    // Check the row on the left side
    for (int i = 0; i < col; i++) {
        if (board[row][i] == 1) {
            return false;
        }
    }

    // Check the upper diagonal on the left side
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    // Check the lower diagonal on the left side
    for (int i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] == 1) {
            return false;
        }
    }

    // The current position is safe
    return true;
}

bool solveNQueensUtil(int col, int n) {
    // Base case: All queens are placed
    if (col >= n) {
        return true;
    }

    // Try placing a queen in each row of the current column
    for (int row = 0; row < n; row++) {
        // Check if the current position is safe
        if (isSafe(row, col, n)) {
            // Place the queen at the current position
            board[row][col] = 1;

            // Recursively place the queens in the next columns
            if (solveNQueensUtil(col + 1, n)) {
                return true;
            }

            // Backtrack: If placing the queen doesn't lead to a solution, remove it
            board[row][col] = 0;
        }
    }

    // If no position in the current column is safe, return false
    return false;
}

void solveNQueens(int n) {
    // Initialize the board with 0 (no queen placed yet)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            board[i][j] = 0;
        }
    }

    if (solveNQueensUtil(0, n)) {
        // Solution exists, print the board configuration
        printf("Solution found!\n");

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                printf("%d ", board[i][j]);
            }
            printf("\n");
        }
    } else {
        // No solution found
        printf("No solution exists for the given board size.\n");
    }
}

int main() {
    int n;

    printf("Enter the size of the board (N): ");
    scanf("%d", &n);

    solveNQueens(n);

    return 0;
}