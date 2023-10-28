#include <iostream>
#include <vector>
using namespace std;
int dfs(int n,int src,vector<int> adj[],vector<bool>&vis,vector<int>&ans){
	vis[src] = true;
	for(auto i : adj[src]){
		if(!vis[i]) n = dfs(n,i,adj,vis,ans);
	}
	ans[n] = src;
	return n-1;
}
void topsort(int v,vector<int> adj[],vector<bool> &vis){
	vector<int> ans(v);
	int n = v - 1;
	// Unoptimized version
	// for(int i = 1;i <= v;i++){
	// 	if(!vis[i]){
	// 		vector<int> visited;
	// 		dfs(i,adj,vis,visited);
	// 		for(auto visi : visited){
	// 			ans[n] = visi;
	// 			n--;
	// 		}
	// 	}
	// }
	// Optimized Version
	for(int i = 1;i <= v;i++){
		if(!vis[i]){
			n = dfs(n,i,adj,vis,ans);
		}
	}
	for(auto i : ans) cout << i << " ";
}
int main(){
	int v,e;
	cin >> v >> e;
	vector<int> adj[v + 1];
	vector<bool> vis(v + 1,false);
	for(int i = 0;i < e;i++){
		int a,b;
		cin >> a >> b;
		adj[a].push_back(b);
	}
	topsort(v,adj,vis);
	return 0;
}