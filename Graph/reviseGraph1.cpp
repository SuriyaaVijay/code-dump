#include <iostream>
#include <queue>
#include <vector>
using namespace std;
class Solution{
public:
	bool detectCycleBfs(vector<int> adj[],int src,vector<bool>&vis){
		queue<pair<int,int>> q;
		q.push({src,-1});
		vis[src] = true;
		while(!q.empty()){
			int dest = q.front().first;
			int par = q.front().second;
			q.pop();
			for(auto i : adj[dest]){
				if(!vis[i]){
					vis[i] = true;
					q.push({i,dest});
				}
				else{
					if(par != i) return true;
				}
			}
		}
		return false;
	}
	bool detectCycleDfs(vector<int>adj[],int src,int par,vector<bool>&vis){
		vis[src] = true;
		for(auto i : adj[src]){
			if(!vis[i]){
				if(detectCycleDfs(adj,i,src,vis)) return true;
			}
			else if(par != i) return true;
		}
		return false;
	}
	bool isCycle(vector<int> adj[],int v){
		vector<bool> vis(v + 1,false);
		for(int i = 0;i <= v;i++){
			if(!vis[i] && detectCycleBfs(adj,i,vis)) return true;
		}
		return false;
	}
};


int main(){
	int v,e;
	cin >> v >> e;
	vector<int> adj[v + 1];
	for(int i = 0;i < e;i++){
		int a,b;
		cin >> a >> b;
		adj[a].push_back(b);
		adj[b].push_back(a);
	}
	Solution s;
	cout << (s.isCycle(adj,v) ? "true" : "false");
	return 0;
}

