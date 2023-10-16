#include <bits/stdc++.h>

vector<vector<long long int>> printPascal(int n) 
{
  // Write your code here.
  vector<vector<long long int>>ans;
  for(int i=1;i<=n;i++)
  {
    vector<long long int>temp;
    temp.push_back(1);
   long long int answ=1;
    for(int j=1;j<i;j++)
    {
       answ=(answ)*(i-j);
       answ=answ/(j);
       temp.push_back(answ);
    }
    ans.push_back(temp);
  }
  return ans;
}
