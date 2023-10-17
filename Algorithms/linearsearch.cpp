#include <iostream>
using namespace std;

int main(void){
    int array[] = {23,54,76,12,4,6,12,54,67,77,90};
    int n = sizeof(array)/sizeof(int);
    int element,i,flag=0;
    cout << "Enter the number to search for: ";
    cin >> element;
    for(i=0;i<n;i++){
        if(array[i]==element){
            cout<<"Element found at index: "<<i+1<<endl;
            flag=1;
        }  
    }
    if(flag==0){
        cout<<"Element not found"<<endl;
    }
    
    return 0;
}