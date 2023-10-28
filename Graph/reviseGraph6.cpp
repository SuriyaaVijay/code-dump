#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <limits>
#include <climits>
#include <cstring>
#define inf std::numeric_limits<double>::infinity()
#define ninf -1*inf
using namespace std;

vector<vector<double>> createGraph(int n,int e){
	vector<vector<double>> graph(n,vector<double>(n,inf));
	for(int i = 0;i < n;i++){
		int a,b,c;
		cin >> a >> b >> c;
		graph[a][b] = c;
		graph[i][i] = 0;
	}
	return graph;
}

class FloydWarshallSolver{
	int n;
	bool solved;
	vector<vector<double>> dp;
	vector<vector<int>> next;
	#define REACHES_NEGATIVE_CYCLE -1

public:
	FloydWarshallSolver(vector<vector<double>>&graph){
		n = graph.size();
		solved = false;
		dp.resize(n,vector<double>(n));
		next.resize(n,vector<int>(n)); 
		for(int i = 0;i < n;i++){
			for(int j = 0;j < n;j++){
				if(graph[i][j] != inf) next[i][j] = j;
				dp[i][j] = graph[i][j];
			}
		}
	}
	vector<vector<double>> getAPSPMatrix(){
		if(!solved) solve();
		return dp;
	}
	void solve(){
		for(int k = 0;k < n;k++){
			for(int i = 0;i < n;i++){
				for(int j = 0;j < n;j++){
					if(dp[i][k] + dp[k][j] < dp[i][j]){
						dp[i][j] = dp[i][k] + dp[k][j];
						next[i][j] = next[i][k];
					}
				}
			}
		}
		// For propogating the negative cycle
		for(int k = 0;k < n;k++){
			for(int i = 0;i < n;i++){
				for(int j = 0;j < n;j++){
					if(dp[i][k] + dp[k][j] < dp[i][j]){
						dp[i][j] = ninf;
						next[i][j] = REACHES_NEGATIVE_CYCLE;
					}
				}
			}
		}
		solved = true;
	}

	vector<int> constructShortestPath(int start,int end){
		vector<int> path;
		if(dp[start][end] == inf) return path;
		int curr = start;
		for(;curr != end;curr = next[curr][end]){
			if(curr == REACHES_NEGATIVE_CYCLE) vector<int>(1,-1);
			path.push_back(curr);
		}
		if(next[curr][end] == REACHES_NEGATIVE_CYCLE) vector<int>(1,-1);
		path.push_back(end);
		return path;
	}
};

int main(){
	int n,e;
	cin >> n >> e;
	vector<vector<double>> graph = createGraph(n,e);
	FloydWarshallSolver* solver = new FloydWarshallSolver(graph);
	auto dist = solver->getAPSPMatrix();
	for(int i = 0;i < n;i++){
		for(int j = 0;j < n;j++){
			printf("Shortest Path from %d to %d is %.2f\n",i,j,dist[i][j]);
		}
	}
	cout << endl;
	for(int i = 0;i < n;i++){
		for(int j = 0;j < n;j++){
			vector<int> path = solver->constructShortestPath(i,j);
			string str = "";
			if(path.size() == 1 && path[0] == -1){
				str = "has an infinite number of solution! (negative cycle case)";
			}
			else if(path.size() == 0){
				str = "does not exist, node "+to_string(i)+" doesn't reach node "+to_string(j); 
			}
			else{
				int k;
				for(k = 0;k < path.size() - 1;k++){
					str += to_string(path[k]);
					str += " ";
					// str += "->";
				}
				string end = "";
				if(k < path.size()) end = to_string(path[k]);
				str = "[" + str + end + "]";
			}
			cout << "The shortest path from node " << i << " to node " << j << " " << str << "\n";
		}
	}
	return 0;
}