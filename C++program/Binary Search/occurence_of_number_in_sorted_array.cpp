//Program to find the occurence of a number in a sorted array using Binary Search

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
    int element = 2;
    if(firstOccurence(arr, element, n)==-1 || lastOccurence(arr, element, n)==-1){
        cout<<"Number of occurences of "<<element<<" is "<<0;
    }
    else{
        int numberOfOccurence = lastOccurence(arr, element, n) - firstOccurence(arr, element, n) + 1;
        cout<<"Number of occurences of "<<element<<" is "<<numberOfOccurence;
    }
    return 0;
}