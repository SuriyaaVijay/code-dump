// Enter a number : 10
// 1
// 01
// 101
// 0101
// 10101
// 010101
// 1010101
// 01010101
// 101010101
// 0101010101

// Input Format: N = 3
// Result: 
// 1
// 01
// 101
  

#include <bits/stdc++.h>
using namespace std;

void pattern11(int N)
{
      // First row starts by printing a single 1.
      int start =1;
      
      // Outer loop for the no. of rows
      for(int i=0;i<N;i++){
          
      if(i%2 ==0) start = 1;
          
          // if odd, then the first 0 will be printed in that row.
          else start = 0;
          
          for(int j=0;j<=i;j++){
              cout<<start;
              start = 1-start;
          }
      
              cout<<endl;
      }
}

int main()
{   
    // Here, we are taking input from the user.
    int N ;
    cout<<"Enter a number : ";
    cin>>N;
    pattern11(N);

    return 0;
}
