#include <iostream>

using namespace std;

void printArray(int arr[],int n){ /*To print the sorted array*/
    for(int i=0;i<n;i++){
cout<<arr[i]<<" ";
    }
    cout<<endl;
}
void sortOne(int arr[],int n){ /*sort the 0 and 1*/
int left=0,right=n-1;
while(left<right){
   while(arr[left]==0){
     left++;
}
   while(arr[right]==1){
     right--;
}
swap(arr[left],arr[right]);/*arr[left]==1 and arr[right]==0 so swap the term*/
left++;
right--;
 }
}
int main(){
    int arr[9]={1,0,0,1,0,1,1,0,0};
     sortOne(arr,9);
     printArray(arr,9);
    return 0;
}
