package githubpr;

import java.util.Arrays;

/*
time n2
space constant (changing in place)
 */
public class _73_SetMatrixZeros {
    public void setZeroes(int[][] matrix) {
        matrixZeros(matrix);
    }
    public void matrixZeros(int[][] arr){
        boolean firstCol=false,firstRow=false;

        //Step 1 : check for zeros and mark in the first row/col
        for(int i=0;i<arr.length;i++){
            for (int j=0;j<arr[0].length;j++){
                if(arr[i][j]==0){
                    if (j==0) firstCol=true;
                    if (i==0) firstRow=true;
                    arr[i][0]=0;
                    arr[0][j]=0;
                }
            }
        }

        //Step 2 : make rows and cols zeros if they have a zero, except first row/col
        for(int i=1;i<arr.length;i++){
            for(int j=1;j<arr[0].length;j++){
                if(arr[i][0]==0 || arr[0][j]==0){
                    arr[i][j]=0;
                }
            }
        }

        //Step 3 : making the firstrow and firstcol zero if required

        //atleast one element is zero in the first row :- therefore making all zero
        if(firstRow){
            Arrays.fill(arr[0], 0);

        }

        //atleast one element is zero in the first col :- therefore making all zero
        if(firstCol){
            for(int i=0;i<arr.length;i++){
                arr[i][0]=0;
            }
        }
    }
}
