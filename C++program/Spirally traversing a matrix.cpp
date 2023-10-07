/*
r = 4, c = 4
matrix[][] = {{1, 2, 3, 4},
           {5, 6, 7, 8},
           {9, 10, 11, 12},
           {13, 14, 15,16}}
Output:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

*/








#include "bits/stdc++.h"
using namespace std;

{
 vector<int> spirallyTraverse(vector<vector<int> > matrix, int r, int c)
    {
        vector <int>ans;

        int top=0,left=0,bottom=r-1,right=c-1;

        while(top<=bottom && left<=right){

            for(int i=left;i<=right;i++){

                ans.push_back(matrix[top][i]);

            }

            top++;

            for(int i=top;i<=bottom;i++){

                ans.push_back(matrix[i][right]);

            }

            right--;

            if(top<=bottom){

                for(int i=right;i>=left;i--){

                    ans.push_back(matrix[bottom][i]);

                }

                bottom--;

            }

            if(left<=right){

                for(int i=bottom;i>=top;i--){

                    ans.push_back(matrix[i][left]);

                }

                left++;

            }

        }

        return ans;
    }
}

