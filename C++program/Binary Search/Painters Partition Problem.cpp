#include <bits/stdc++.h>
using namespace std;
#define int long long int
bool check_if_possible(int time, int k ,int n, vector<int> v){
	int painters_used=1;
	int painted=0;
	for(int i=0;i<n;i++){
		painted+=v[i];
		if(painted>time){
			painters_used++;
			painted=v[i];
		}

	}
	if(painters_used>k){
		return false;
	}
	return true;
}
int mintimetopaint(int k, int n, vector<int> v){
	sort(v.begin(),v.end());
	int sum=0;
	for(int i=0;i<n;i++){
		sum+=v[i];
	}
	int s=v[n-1];
	int e=sum;
	int ans=0;
	while(s<=e){
		int mid=(s+e)/2;
		if(check_if_possible(mid,k,n,v)){
			ans=mid;
			e=mid-1;
		}
		else{
			s=mid+1;
		}
	}
	return ans;
}
int32_t main(){
	ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int k,n;
    cin>>k>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++){
    	cin>>v[i];
    }
    cout<<mintimetopaint(k,n,v)<<endl;


	return 0;
}

