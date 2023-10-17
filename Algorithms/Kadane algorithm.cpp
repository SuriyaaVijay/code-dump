/*working
The algorithm works by iterating over the array and keeping track of the maximum sum of the subarray ending at each position. At each position i, we have two options: 
either add the element at position i to the current maximum subarray or start a new subarray at position i. The maximum of these two options is the maximum subarray ending at position i.
We maintain two variables, max_so_far and max_ending_here, to keep track of the maximum sum seen so far and the maximum sum ending at the current position, respectively.
The algorithm starts by setting both variables to the first element of the array. Then, we iterate over the array from the second element to the end.
At each position i, we update max_ending_here by taking the maximum of the current element and the current element added to the previous maximum subarray. 
We then update max_so_far to be the maximum of max_so_far and max_ending_here.
The algorithm returns max_so_far, which is the maximum sum of any subarray in the array.

*/



#include <bits/stdc++.h>  
using namespace std;  
int main()  
{  
    int a[] = { -2, -3, 4, -1, -2, 1, 5, -3 };  
    int n = sizeof(a) / sizeof(a[0]);  
  
    //  Kadane's algorithm  
    int max_so_far = INT_MIN, max_ending_here = 0;  
  
    for (int i = 0; i < n; i++) {  
        max_ending_here = max_ending_here + a[i];  
        if (max_so_far < max_ending_here)  
            max_so_far = max_ending_here;  
  
        if (max_ending_here < 0)  
            max_ending_here = 0;  
    }  
cout << "Maximum contiguous sum in the array is : "<<max_so_far<<endl;  
    return 0;  
}  
