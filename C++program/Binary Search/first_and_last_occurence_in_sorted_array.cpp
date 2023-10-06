//Program to find first and last occurence of an element in sorted array using binary search

#include<iostream>
#include <bits/stdc++.h>
using namespace std;

//function to find the first occurence
int firstOccurence(int arr[], int x, int n)
{
    int low = 0, high = n - 1, res = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] > x)
            high = mid - 1;
        else if (arr[mid] < x)
            low = mid + 1;
        else {
            res = mid;
            high = mid - 1;
        }
    }
    return res;
}

//function to find the last occurence
int lastOccurence(int arr[], int x, int n)
{
    int low = 0, high = n - 1, res = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] > x)
            high = mid - 1;
        else if (arr[mid] < x)
            low = mid + 1;
        else {
            res = mid;
            low = mid + 1;
        }
    }
    return res;
}

int main()
{
    int arr[] = { 1, 2, 2, 2, 2, 3, 4, 7, 8, 8 };
    int n = sizeof(arr) / sizeof(int);
    int element = 4;
    cout<<"First Occurence is at index "<<firstOccurence(arr, element, n)<<endl;
    cout<<"Last Occurence is at index "<<lastOccurence(arr, element, n);
    return 0;
}