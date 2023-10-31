#include <vector>
#include <bits/stdc++.h>
using namespace std;

// Kedane Algorithms: Maximum Subarray Sum 

int maxSubArray(vector<int>& a){
    int sum=0,  s = 0, end = 0, index = 0, x = a[0];
    for(int i=0;i<a.size();i++){
        sum += a[i];
        if(x<sum){
            x = sum;
            s = index;
            end = i;
        }
        if(sum<0){
            sum = 0;
            index++;
        }
    }
    return x;
}


// Kedane Algorithms: Maximum Subarray Product

int maxProdSubArray(vector<int>& a){
        int cnt=INT_MIN;
        int x=1;
        for(int i=0;i<nums.size();i++)
        {
            x *=nums[i];
            cnt=max(cnt,x);
            if(x==0) x=1;
        }
        int n=1;
        for(int i=nums.size()-1;i>=0;i--)
        {
            n*=nums[i];
            cnt=max(cnt,n);
            if(n==0) n=1;
        }
        return cnt;
}


int main()
{
    int t;
    cin >> t;
    while(t--)
    {
        int n,val;
        cin>>n;
        vector<int> a(n);
            
        for(int i=0;i<n;i++)
        {
            cin>>a[i];
        }
       
        cout<<maxSubArray(a); 
    }
}



