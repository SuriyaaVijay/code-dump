#include <bits/stdc++.h>
using namespace std;
#define ll long long
#define vi vector<int>
#define pb push_back
#define f(i, s, e) for (int i = s; i < e; i++)
#define mii map<int, int>



void bfs(int i, int j, vector<vector<char>>&grid, vector<vector<char>>&visited){

    vector<int> delrow = {0,-1,0,1};
    vector<int> delcol = {-1,0,1,0};

    int n =grid.size();
    int m = grid[0].size();

    queue<pair<int,int>>q;
    visited[i][j] = 1;
    q.push({i,j});

    while(!q.empty()){
        int r = q.front().first;
        int c = q.front().second;
        q.pop();

        for(int delrow = -1; delrow<=1;delrow++){
            for(int delcol = -1; delcol <=1; delcol++){
                int newrow = r + delrow;
                int newcol = c + delcol;
                if(newrow >=0 && newrow <n && newcol >=0 && newcol <m && !visited[newrow][newcol] && grid[newrow][newcol] =='#'){
                    visited[newrow][newcol] = 1;
                    q.push({newrow,newcol});
                }
            }
        }
    }

}
int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int h, w;
    cin >> h >> w;

    vector<vector<char>> grid(h, vector<char>(w));
    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < w; j++)
        {
            cin >> grid[i][j];
        }
    }

    vector<vector<char>> visited(h, vector<char>(w, 0));
    int ct = 0;
    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < w; j++)
        {
            if (!visited[i][j] && grid[i][j] == '#')
            {
                bfs(i, j, grid, visited);
                ct++;
            }
        }
    }
    cout<<ct<<endl;
}