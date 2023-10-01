#include <iostream>
using namespace std;
int main()
{
    int m,n;
    cout<<"enter the no of rows of  matrix";
    cin>>m;
    cout<<"enter the no of cols of matrix";
    cin>>n;
    cout<<"enter the elements of matrix";
    int a[m][n];
      for (int i=0;i<m;i++)
      {
        for(int j=0;j<n;j++)
        {
          cin>>a[i][j];
        }
      }
      int minR=0,minC=0;
      int maxR=m-1,maxC=n-1;
      cout<<endl;
      //spiral
      while(minR<=maxR && minC<=maxC)
      {
         //right
         for(int j=minC;j<=maxC;j++)
         {
            cout<<a[minR][j]<<" ";
         }
         minR++;
         if(minR>maxR || minC>maxC) break;
         //dowm
         for(int i=minR;i<=maxR;i++)
         {
            cout<<a[i][maxC]<<" ";
         }
         maxC--;
         if(minR>maxR || minC>maxC) break;
         //left
         for(int j=maxC;j>=minC;j--)
         {
            cout<<a[maxR][j]<<" ";
         }
         maxR--;
         if(minR>maxR || minC>maxC) break;
         //up
         for(int i=maxR;i>=minR;i--)
         {
            cout<<a[i][minC]<<" ";
         }
         minC++;
      }
}
