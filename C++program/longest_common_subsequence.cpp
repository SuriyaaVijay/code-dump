
    int longestCommonSubsequence(string s, string t) {
        int n = s.size();
        int m = t.size();
        // vector<vector<int>>dp(n,vector<int>(m,-1));
        // vector<vector<int>>dp(n+1,vector<int>(m+1,0));
        vector<int>prev(m+1,0), curr(m+1,0);
        for(int i=1; i<=n; i++)
        {
            for(int j=1; j<=m; j++)
            {
                if(s[i-1]==t[j-1])
                {
                    curr[j] =  1 + prev[j-1];
                }
                else
                {
                    curr[j] = max(prev[j],curr[j-1]);
                }  
            }
            prev=curr;
        }
        // return solve(text1,text2,n-1,m-1,dp);
        return prev[m];
