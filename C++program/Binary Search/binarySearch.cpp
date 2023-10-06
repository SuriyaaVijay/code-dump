//Binary Search Program in C++

#include<iostream>
#include<bits/stdc++.h>
using namespace std;

//function to perform binary search
int binarySearch(int arr[], int key, int n){    
    int low = 0, high = n-1;
    while(low<=high){
        int mid = (low+high)/2;
        if(arr[mid]==key) return mid;    
        else if(arr[mid]>key) high = mid-1;
        else low = mid+1;
    }
    return -1;   //return -1 if the element is not present in the array
}

int main(){
    int arr[]={10,20,30,40,50};   //array for doing binary search
    int n = 5;     //size of the array
    int key = 30;  //value which we will search using binary search
    int ans = binarySearch(arr, key, n);  //ans will get the index value of the key element
    cout<<"Value "<<key<<" is found at index "<<ans;
    return 0;
}