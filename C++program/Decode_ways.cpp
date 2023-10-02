class Solution {
public:
    
    int f(string s, int ind, int n, vector<int>& dp)
    {
        if(s[ind] == '0')
         return 0;

        if(ind >= n-1)
         return 1;

        if(dp[ind] != -1)
         return dp[ind];
         
        int ans = f(s, ind+1, n, dp);

        if(ind < n-1 && (s[ind] == '1' || (s[ind] == '2' && s[ind+1] >= 48 && s[ind+1] <= 54)))
        {
            ans += f(s, ind+2, n, dp);
        }

        return dp[ind] = ans;
    }
    int numDecodings(string s) {
        int n = s.length();
        vector<int> dp(n, -1);

        return f(s, 0, n, dp);
    }
};
