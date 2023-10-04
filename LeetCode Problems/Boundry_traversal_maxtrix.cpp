// Name: Samarth Kumar
// Github Username: Samarthku
// Date: 03/oct/2023
// Project Name: Boundary traversal of matrix

// This is leetcode or geek problem in c++ advanced.

#include<iostream>
#include<math.h>
using namespace std;

int main()
{
int m, n, sum = 0;
int A[100][100];
cout << "Enter the order of the matrix : "<<endl;
cin >> m >> n;
cout << "Input the matrix elements"<<endl;
for(int i = 0; i < m; i++)
{
for(int j = 0; j < n; j++)
cin >> A[i][j];
}
cout<<"...................."<<endl;  // for more reliable
cout << "Boundary Matrix"<<endl;
for(int i = 0; i < m; i++)
{
for(int j = 0; j < n; j++)
{
if (i == 0 || j == 0 || i == m-1  || j == n-1)
{
cout << A[i][j]<<" " ;
sum = sum + A[i][j];
}
else
cout << " "
     << " ";
}
cout << endl;
}
cout<<"...................."<<endl; // for more reliable
cout << "Sum of boundary is " << sum << endl;
return 0;
}

// input: rows(m)=5;
//       columns(n)=5;
// enter the elements of the matrix :-
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5 
// 1 2 3 4 5
// 1 2 3 4 5
// output:
// ...................................................... 
// 1 2 3 4 5 
// 1       5
// 1       5
// 1       5
// 1 2 3 4 5
// ......................................................
// sum of the matrix is =48;
