// https://leetcode.com/problems/find-the-difference/solutions/?envType=daily-question&envId=2023-10-01
class Solution {
public:
    char findTheDifference(string s, string t) {
        sort(s.begin(),s.end());
        sort(t.begin(),t.end());
        for(int i=0;i<s.length();i++)if(t[i]!=s[i])return t[i];
        return t[t.length()-1];
    }
};
