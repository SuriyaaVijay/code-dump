#include <iostream>

using namespace std;
void merge(int *arr , int s , int e){
    int mid=(s+e)/2;
    int len1=mid-s+1;
    int len2=e-mid;
    
    int *first=new int[len1];
    int *second=new int[len2];
    // 1 array ko copy kar rahe ha
    int mainarrayindex=s;
    for(int i=0 ; i<len1 ; i++){
        first[i]=arr[mainarrayindex++];
        
    }
    //second array ko copy kar rahe ha
     mainarrayindex=mid+1;
    for(int i=0 ; i<len2 ; i++){
        second[i]=arr[mainarrayindex++];
        
    }
    
    // merge 2 sorted array
    int index1=0;
    int index2=0;
    mainarrayindex=s;
    while(index1<len1 && index2<len2){
        if(first[index1]< second[index2]){
            arr[mainarrayindex]= first[index1];
            index1++;
            mainarrayindex++;
        }else{
            arr[mainarrayindex]= second[index2];
            index2++;
            mainarrayindex++;
        }
    }
    while(index1<len1){
        arr[mainarrayindex]= first[index1];
            index1++;
            mainarrayindex++;
    }
    while(index2<len2){
        arr[mainarrayindex]= second[index2];
            index2++;
            mainarrayindex++;
    }
    
    delete []first;
    delete []second;
}
void mergesort(int *arr , int s , int e){
    //base case
    if(s>=e){
        return ;
    }
    int mid=(s+e)/2;
    //left part mergesort karna ha
    mergesort(arr,s,mid);
    
    //right part mergesort karna ha
    mergesort(arr,mid+1,e);
    // merging both the array
    merge(arr,s,e);
    
}
int main()
{
    int arr[5]={2,4,1,5,3};
    int n=5;
    
    mergesort(arr,0,n-1);
    for(int i=0 ; i<n ; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}
