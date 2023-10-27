#include <iostream>
#include <list>
#include <stack>
#include <vector>

using namespace std;

class Graph {
    int V;
    list<int>* adj;
    void DFSUtil(int v, bool visited[]);
public:
    Graph(int V);
    void addEdge(int v, int w);
    Graph getTranspose();
    void printSCCs();
};

Graph::Graph(int V) {
    this->V = V;
    adj = new list<int>[V];
}

void Graph::addEdge(int v, int w) {
    adj[v].push_back(w);
}

Graph Graph::getTranspose() {
    Graph g(V);
    for (int v = 0; v < V; v++) {
        for (auto it = adj[v].begin(); it != adj[v].end(); it++) {
            g.adj[*it].push_back(v);
        }
    }
    return g;
}

void Graph::DFSUtil(int v, bool visited[]) {
    visited[v] = true;
    cout << v << " ";
    for (auto it = adj[v].begin(); it != adj[v].end(); it++) {
        if (!visited[*it]) {
            DFSUtil(*it, visited);
        }
    }
}

void Graph::printSCCs() {
    stack<int> st;
    bool* visited = new bool[V];
    for (int i = 0; i < V; i++) {
        visited[i] = false;
    }

    for (int i = 0; i < V; i++) {
        if (!visited[i]) {
            DFSUtil(i, visited);
        }
    }

    Graph gr = getTranspose();

    for (int i = 0; i < V; i++) {
        visited[i] = false;
    }

    cout << "\nStrongly Connected Components:\n";
    while (!st.empty()) {
        int v = st.top();
        st.pop();
        if (!visited[v]) {
            gr.DFSUtil(v, visited);
            cout << endl;
        }
    }
}

int main() {
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(3, 0);
    g.addEdge(2, 4);

    cout << "Strongly Connected Components:\n";
    g.printSCCs();

    return 0;
}
