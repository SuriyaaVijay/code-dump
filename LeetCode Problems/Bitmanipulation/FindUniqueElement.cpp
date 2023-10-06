#include<bits/stdc++.h>
using namespace std;
int main()
{
  vector<int>vec = {2,2,5,4,5,1,4,8,8};
  int unique = 0;
  for(int i=0; i<vec.size(); i++)
    {
      unique ^= vec[i];
    }
  cout<<"Unique Element is : "<<unique<<endl;
  return 0;
}
