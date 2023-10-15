using System;
using System.Collections.Generic;
using System.Linq;

namespace TreeTerminologies {
class Program {
	// Function to add an edge between vertices x and y
	static void AddEdge(int x, int y, List<List<int> > adj)
	{
		adj[x].Add(y);
		adj[y].Add(x);
	}

	// Function to print the parent of each node
	static void PrintParents(int node, List<List<int> > adj,
							int parent)
	{
		// current node is Root, thus, has no parent
		if (parent == 0)
			Console.WriteLine(node + "->Root");
		else
			Console.WriteLine(node + "->" + parent);
		// Using DFS
		foreach(var cur in adj[node]) if (cur != parent)
			PrintParents(cur, adj, node);
	}

	// Function to print the children of each node
	static void PrintChildren(int root,
							List<List<int> > adj)
	{
		// Queue for the BFS
		var q = new Queue<int>();
		// pushing the root
		q.Enqueue(root);
		// visit array to keep track of nodes that have been
		// visited
		var vis = new int[adj.Count];
		// BFS
		while (q.Any()) {
			int node = q.Dequeue();
			vis[node] = 1;
			Console.Write(node + "-> ");
			foreach(var cur in adj[node]) if (vis[cur] == 0)
			{
				Console.Write(cur + " ");
				q.Enqueue(cur);
			}
			Console.WriteLine();
		}
	}

	// Function to print the leaf nodes
	static void PrintLeafNodes(int root,
							List<List<int> > adj)
	{
		// Leaf nodes have only one edge and are not the
		// root
		for (int i = 1; i < adj.Count; i++)
			if (adj[i].Count == 1 && i != root)
				Console.Write(i + " ");
		Console.WriteLine();
	}

	// Function to print the degrees of each node
	static void PrintDegrees(int root, List<List<int> > adj)
	{
		for (int i = 1; i < adj.Count; i++) {
			Console.Write(i + ": ");
			// Root has no parent, thus, its degree is equal
			// to the edges it is connected to
			if (i == root)
				Console.WriteLine(adj[i].Count);
			else
				Console.WriteLine(adj[i].Count - 1);
		}
	}

	static void Main(string[] args)
	{
		// Number of nodes
		int n = 7, root = 1;
		// Adjacency list to store the tree
		var adj = new List<List<int> >();
		for (int i = 0; i <= n; i++)
			adj.Add(new List<int>());
		// Creating the tree
