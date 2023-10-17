#include<iostream>
using namespace std;
int linearsearch(int array[], int i,int key,int n){

    for(i=0;i,n;i++){
        if(array[i]==key)
        return i;}
        return -1;
    

} 
int main(){
    int n=0,array[n],i,key;
    cout<<"enter size"<<endl;
    cin>>n;
    
    for(i=0;i<n;i++){
        cin>>array[i];
       
    }
    for(i=0;i<n;i++)
    {cout<<array[i]<<" ";}
        cout<<"enter value to be find"<<endl;
    cin>>key;
    cout<<linearsearch( array,i,key,n)<<endl;

return 0;}
