#include <iostream>
#include <vector>
#include <queue>
using namespace std;
// Kahn's Algorithm for Topological Ordering

void topsort(int v,vector<int> adj[],vector<bool> &vis){
	vector<int> inDegree(v + 1,0);
	for(int i = 0;i < v; i++){
		for(auto j : adj[i]){
			inDegree[j]++;
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
			inDegree[node]--;
			if(inDegree[node] == 0) nodes.push(node);
		}
	}
	if(i != v){
		cout << "Cycle Found\n";
		return;
	}
	for(auto i : ans) cout << i << " ";
}
int main(){
	int v,e;
	cin >> v >> e;
	vector<int> adj[v];
	vector<bool> vis(v,false);
	for(int i = 0;i < e;i++){
		int a,b;
		cin >> a >> b;
		adj[a].push_back(b);
	}
	topsort(v,adj,vis);
	return 0;
}