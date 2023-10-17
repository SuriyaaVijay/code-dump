#include <bits/stdc++.h>
using namespace std;

int rangeSum(int arr[], int s, int e) {
    return accumulate(arr + s, arr + e, 0);
}

// int brute Force
int allocatePages(int arr[], int n, int k) {
    
    if (k == 1)
        return rangeSum(arr, 0, n);
    if (n == 1)
        return arr[0];

    int res = INT_MAX;
    // where should i split the arr
    for (int i=1; i<n; i++) {
        // 10 | 20 30 40
        // 10 20 | 30 40
        // 10 20 30 | 40
        res = min( res, max( rangeSum(arr, i, n), allocatePages(arr, i, k-1) ) );
    }
    return res;
}

int main()
{
    int arr[] = {10,20,30,40};
    int n = sizeof(arr)/sizeof(arr[0]);
    int k = 2;

    cout << allocatePages(arr, n, k) << endl;
    
    return 0;
}
