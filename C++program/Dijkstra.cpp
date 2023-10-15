//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution
{
	public:
	//Function to find the shortest distance of all the vertices
    //from the source vertex S.
    vector <int> dijkstra(int V, vector<vector<int>> adj[], int S)
    {
        // Code here
        // priority_queue<pair<int,int> , vector<pair<int,int>>, greater<pair<int,int>>> pq;
        set<pair<int,int>> pq;
        vector<int> dis(V);
        for(int i=0;i<V;i++){
            dis[i]=1e9;
        }
        dis[S]=0;
        pq.insert({0,S});
        while(!pq.empty()){
            auto it=*(pq.begin());
            int dist=it.first;
            int node=it.second;
            pq.erase(it);
            
            for(auto v:adj[node]){
                int weight=v[1];
                int adjNode=v[0];
                if(dist + weight< dis[adjNode]){
                    if(dis[adjNode]!=1e9)
                        pq.erase({dis[adjNode],adjNode});
                    dis[adjNode]=dist+weight;
                    pq.insert({dis[adjNode],adjNode});
                }
            }
        }
        return dis;
    }
};


//{ Driver Code Starts.


int main()
{
    int t;
    cin >> t;
    while (t--) {
        int V, E;
        cin >> V >> E;
        vector<vector<int>> adj[V];
        int i=0;
        while (i++<E) {
            int u, v, w;
            cin >> u >> v >> w;
            vector<int> t1,t2;
            t1.push_back(v);
            t1.push_back(w);
            adj[u].push_back(t1);
            t2.push_back(u);
            t2.push_back(w);
            adj[v].push_back(t2);
        }
        int S;
        cin>>S;
        
        Solution obj;
    	vector<int> res = obj.dijkstra(V, adj, S);
    	
    	for(int i=0; i<V; i++)
    	    cout<<res[i]<<" ";
    	cout<<endl;
    }

    return 0;
}
