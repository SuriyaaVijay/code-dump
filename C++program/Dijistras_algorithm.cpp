// Time Complexity -> O(E * log(V))
// Space Complexity -> O(v^2)

#include <bits/stdc++.h>
vector<int> dijkstra(vector<vector<int>> &vec, int vertices, int edges,
                     int source) {
  // Write your code here.

  vector<pair<int, int>> adj[vertices + 1];

  for (auto itr : vec) {
    int u = itr[0];
    int v = itr[1];
    int dist = itr[2];

    adj[u].push_back({v, dist});
    adj[v].push_back({u, dist});
  }

  priority_queue<pair<int, int>, vector<pair<int, int>>,
                 greater<pair<int, int>>>
      pq;

  vector<int> nodeDist(vertices, INT_MAX);

  nodeDist[source] = 0;

  pq.push({0, source});

  while (!pq.empty()) {

    auto cur = pq.top();
    pq.pop();

    int dist = cur.first;
    int node = cur.second;

    for (auto itr : adj[node]) {

      int curDist = itr.second;
      int child = itr.first;

      if (nodeDist[node] + curDist < nodeDist[child]) {
        nodeDist[child] = nodeDist[node] + curDist;
        pq.push({nodeDist[child], child});
      }
    }
  }

  return nodeDist;
}
