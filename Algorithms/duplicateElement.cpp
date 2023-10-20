#include<iostream>
using namespace std;
int duplicate(int num[],int size)
{
    for(int j=0;j<size;j++)
    {
    for(int i=j+1;i<size;i++)
    {
      if(num[j]==num[i])
      return num[j];
      
    }
}
}
int main()
{
    int n,arr[100];
    cout<<"Enter array size"<<endl;
    cin>>n;
    cout<<"Enter array elements"<<endl;
    for(int i=0;i<n;i++)
    cin>>arr[i];
    cout<<"The duplicate element is"<<" "<<duplicate(arr,n);
}
