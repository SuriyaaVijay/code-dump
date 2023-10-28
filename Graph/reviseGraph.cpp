#include <bits/stdc++.h>
using namespace std;
void dfs(int source,vector<int> adj[],vector<bool>& visited){
	cout << source << " ";
	visited[source] = true;
	for(auto it = adj[source].begin();it != adj[source].end();it++){
		if(!visited[*it]){
			dfs(*it,adj,visited);
		}
	}
}
void bfs(int source,vector<int> adj[],vector<bool>& visited){
	queue<int> q;
	q.push(source);
	while(!q.empty()){
		int temp = q.front();
	    cout << temp << " ";
		q.pop();
	    for(auto it = adj[temp].begin();it != adj[temp].end(); it++){
	    	if(!visited[*it]){
	    		visited[*it] = true;
	    		q.push(*it);
	    	}
	    }
	}
}

int main(){
	int v,e;
	cin >> v >> e;
	// 1-based indexing
	vector<int> adj[v + 1];
	for(int i = 0;i < e;i++){
		// Undirected graph
		int a,b;
		cin >> a >> b;
		adj[a].push_back(b);
		adj[b].push_back(a);
	}
	// for(int i = 0;i < v + 1;i++){
	// 	cout << i << " - ";
	// 	for(auto it = adj[i].begin();it != adj[i].end();it++){
	// 		cout << *it << " ";
	// 	}
	// 	cout << "\n";
	// }
	vector<bool> visited(v + 1,false);
	int source = 1;
	// dfs(source,adj,visited);
	// bfs(source,adj,visited);

	// Number of Components
	// The number of times dfs is called the number of components
	int count = 0;
	for(int i = 1;i <= v;i++){
		if(!visited[1]) {
			dfs(i,adj,visited);
			count++;
		};
	}
	cout << endl << count << endl;
	return 0;
}