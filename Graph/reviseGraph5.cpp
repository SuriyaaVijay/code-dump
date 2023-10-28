#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;
// Kahn's Algorithm for Topological Ordering
class Edge{
public:
	int from;
	int to;
	int cost;
};
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

// Adjacency List Implementation
vector<int> bellmanFord(int v,vector<pair<int,int>> adj[],int src){
	vector<int> dist(v,INT_MAX);
	dist[src] = 0;
	for(int i = 0;i < v;i++){
		for(auto edge : adj[i]){
			if(dist[i] + edge.second < dist[edge.first]){
				dist[edge.first] = dist[i] + edge.second;
			}
		}
	}
	for(int i = 0;i < v;i++){
		for(auto edge : adj[i]){
			if(dist[i] + edge.second < dist[edge.first]){
				dist[i] = INT_MIN;
				dist[edge.first] = INT_MIN;
			}
		}
	}
	return dist;
}

// Edge list Implementation
vector<int> bellmanFord(int v,vector<Edge>&edges,int src){
	vector<int> dist(v,INT_MAX);
	dist[src] = 0;
	for(int i = 0;i < v - 1;i++){
		for(Edge edge : edges){
			if(dist[edge.from] + edge.cost < dist[edge.to]){
				dist[edge.to] = dist[edge.from] + edge.cost;
			}
		}
	}
	for(int i = 0;i < v - 1;i++){
		for(Edge edge : edges){
			if(dist[edge.from] + edge.cost < dist[edge.to]){
				// We need to set edge.from dist
				// -inf as well
				dist[edge.from] = INT_MIN;
				dist[edge.to] = INT_MIN;
			}
		}
	}
	return dist;
}
int main(){
	int v,e;
	cin >> v >> e;

// Adjacency list implementation
	vector<pair<int,int>> adj[v];
	vector<bool> vis(v,false);
	for(int i = 0;i < e;i++){
		int a,b,w;
		cin >> a >> b >> w;
		adj[a].push_back({ b, w });
	}

// Edge List Implementation
	vector<Edge> edges(e);
	for(int i = 0;i < e;i++){
		cin >> edges[i].from >> edges[i].to >> edges[i].cost;
	}
	vector<int> dist(v,INT_MAX);
	auto ans = bellmanFord(v,adj,0);
	for(int i = 0;i < v;i++){
		int val = ans[i];
		cout << i << " -> ";
		if(val == INT_MIN) cout << "N\n";
		else cout << val << "\n";
	}
	// for(auto i : ans){
	// 	if(i == INT_MIN) cout << "N ";
	// 	else cout << i << " ";
	// }
	return 0;
}