// Input Format: N = 6
// Result:   
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *

// Input Format: N = 3
// Result: 
// *    *
// **  **
// ******
// **  **
// *    *  

#include <bits/stdc++.h>
using namespace std;

void pattern(int n)
{
      // initialising the spaces.
      int spaces = 2*n-2;
      
      // Outer loop for printing row.
      for(int i = 1;i<=2*n-1;i++){
          
          // stars for first half
          int stars = i;
          
          // stars for the second half.
          if(i>n) stars = 2*n - i;
          
          //for printing the stars
          for(int j=1;j<=stars;j++){
              cout<<"*";
          }
          
          //for printing the spaces
          for(int j = 1;j<=spaces;j++){
              cout<<" ";
          }
          
          //for printing the stars
          for(int j = 1;j<=stars;j++){
              cout<<"*";
          }
          
          cout<<endl;
          if(i<n) spaces -=2;
          else spaces +=2;
      }
      
}

int main()
{   
    // Here, we are taking input from the user.
    int N;
    cout<<"Enter a number : ";
    cin>>N;
    
    pattern(N);

    return 0;
}
