// Count total paths in a maze to move from (0,0) to (n,m). The order of the maze is n*m. You can only move down or right.

public class countMazePaths {
    public static int countPaths(int i, int j, int n, int m) {
        if( i == n || j == m) {
            return 0;
        }       
        if(i == n-1 && j == m-1){
            return 1;
        }
        // move downwards
        int downPaths = countPaths(i+1, j, n, m);
        // move right
        int rightPaths = countPaths(i, j+1, n, m);
        return downPaths + rightPaths;
    }
    public static void main(String args[]){
        int n=3, m=3;
        int x = countPaths(0, 0, n, m);
        System.out.println(x);
    }
}

// Time complexity of this code is very high. Therefore this is done by dynamic programming. 
// The approach used here is also known as backtracking. (in backtracking, we move back & forth on a level.)
