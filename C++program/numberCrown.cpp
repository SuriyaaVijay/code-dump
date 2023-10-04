
// Input Format: N = 6
// Result:   
// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

//  Input Format: N = 3
// Result: 
// 1    1
// 12  21
// 123321 

#include <bits/stdc++.h>
using namespace std;

void pattern(int N)
{
      // initial no. of spaces in row 1.
      int spaces = 2*(N-1);
      
      // Outer loop for the number of rows.
      for(int i=1;i<=N;i++){
          
          // for printing numbers in each row
          for(int j=1;j<=i;j++){
              cout<<j;
          }
          
          // for printing spaces in each row
          for(int j = 1;j<=spaces;j++){
              cout<<" ";
          }
          
          // for printing numbers in each row
          for(int j=i;j>=1;j--){
              cout<<j;
          }
          
          cout<<endl;
  
          spaces-=2;
      }
}

int main()
{   
    // Here, we are taking input from the user.
    int N;
    cout<<"Enter a number :";
    cin>>N;
    pattern(N);

    return 0;
}
