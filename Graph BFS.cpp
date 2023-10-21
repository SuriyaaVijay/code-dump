#include <bits./stdc++.h>
using namespace std;

vector<int> bfsOfGraph(int V, vector<int> adj[]) {
        int vis[V] = {0};
        vector<int> ans;
        vis[0] = 1;
        queue<int> q;
        q.push(0);
        
        while(!q.empty())
        {
            int front = q.front();
            q.pop();
            ans.push_back(front);
            
            for(auto it: adj[front])
            {
                if(!vis[it])
                {
                    vis[it] = 1;
                    q.push(it);
                }
            }
        }
        return ans;
    }