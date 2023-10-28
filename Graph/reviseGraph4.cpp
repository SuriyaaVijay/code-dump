#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;
// Kahn's Algorithm for Topological Ordering

vector<int> topsort(int v,vector<pair<int,int>> adj[],vector<bool> &vis){
	vector<int> inDegree(v,0);
	for(int i = 0;i < v; i++){
		for(auto j : adj[i]){
			inDegree[j.first]++;
		}
	}
	queue<int> nodes;
	for(int i = 0;i < v;i++){
		if(inDegree[i] == 0) nodes.push(i);
	}
	vector<int> ans(v);
	int i = 0;
	while(!nodes.empty()){
		int temp = nodes.front();nodes.pop();
		ans[i++] = temp;
		for(auto node : adj[temp]){
			inDegree[node.first]--;
			if(inDegree[node.first] == 0) nodes.push(node.first);
		}
	}
	return ans;
}

// Shortest/Longest Path on a DAG
// for longest path we just need to multiply all the edge values with
// negative one and then find the minimum distanve that way
// and return the ans after multiplying with negative one

void sssp_dag(int src,int v,vector<pair<int,int>> adj[],vector<int>&ts,vector<int> &dist){
	dist[src] = 0;
	for(int i = 0;i < v;i++){
		int currNode = ts[i];
		int d = dist[currNode];
		for(auto node : adj[currNode]){
			dist[node.first] = min(dist[node.first],d + node.second);
		}
	}
}
int main(){
	int v,e;
	cin >> v >> e;
	vector<pair<int,int>> adj[v];
	vector<bool> vis(v,false);
	for(int i = 0;i < e;i++){
		int a,b,w;
		cin >> a >> b >> w;
		adj[a].push_back({ b, w });
	}
	auto ans = topsort(v,adj,vis);
	vector<int> dist(v,INT_MAX);
	for(auto i : ans) cout << char('A' + i) << " ";
	sssp_dag(0,v,adj,ans,dist);
	cout << "\n"; 
	for(auto i : ans) cout << dist[i] << " ";
	return 0;
}