# Regular Expression Matching

## Intuition

The problem requires implementing regular expression matching with support for '.' and '', where '.' matches any single character and '' matches zero or more of the preceding element. The goal is to determine if the given pattern matches the entire input string. To solve this problem, we can use dynamic programming to build a 2D table and fill it based on the matching conditions.

## Approach

Create a 2D table dp to store the matching results. Initialize all elements to false.
Set the base case: when both the input string and pattern are empty, they match `(dp[0][0] = true)`.
Fill the first row of the table:
If the pattern contains '', check if the previous character in the pattern matches the current character in the string. If so, the current position in the table matches the position two steps before `(dp[0][j] = dp[0][j - 2])`.
Fill the remaining positions of the table:
If the current characters match or the pattern contains '.', the current position in the table matches the previous position `(dp[i][j] = dp[i - 1][j - 1])`.
If the pattern contains '', we have two cases:

### Case 1:

The '' matches zero preceding element. In this case, check if the pattern without '' matches the current string `(dp[i][j] = dp[i][j - 2])`.

### Case 2:

The '\*' matches one or more preceding elements. In this case, check if the current character in the string matches the preceding character in the pattern and if the current position in the table matches the previous position or the position before the preceding character in the pattern `(dp[i][j] = dp[i][j] || dp[i - 1][j])`.
The final result is stored in `dp[m][n]` , where m and n are the lengths of the input string and pattern, respectively. If `dp[m][n]` is true, the pattern matches the entire input string; otherwise, it does not.

## Complexity

### Time complexity:

**O(m \* n)**, where m is the length of the input string and n is the length of the pattern. We need to fill the m x n table.

### Space complexity:

**O(m \* n)** , as we use a 2D table of size m x n to store the intermediate results.

## Code

```c++
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        int m = s.length();
        int n = p.length();

        // Create a 2D table to store the matching results
        vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));

        // Base case: an empty string and an empty pattern match
        dp[0][0] = true;

        // Fill the first row of the table
        // If the pattern contains '*' and the previous character in the pattern matches the current character in the string,
        // then the current position in the table matches.
        for (int j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        // Fill the remaining positions of the table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If the current characters match or the pattern contains '.',
                // then the current position in the table matches the previous position.
                if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
                    dp[i][j] = dp[i - 1][j - 1];
                }
                // If the pattern contains '*', we have two cases:
                // 1. The '*' matches zero preceding element, then check if the pattern without '*' matches the current string.
                // 2. The '*' matches one or more preceding elements, then check if the current character in the string matches the preceding character in the pattern,
                //    and the current position in the table matches the previous position or the current position matches the position before the preceding character in the pattern.
                else if (p[j - 1] == '*') {
                    dp[i][j] = dp[i][j - 2]; // case 1

                    if (p[j - 2] == '.' || p[j - 2] == s[i - 1]) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j]; // case 2
                    }
                }
            }
        }

        return dp[m][n];
    }
};
```
