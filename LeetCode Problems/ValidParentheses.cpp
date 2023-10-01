// LeetCode Link:- https://leetcode.com/submissions/detail/760806403/
class Solution {
public:
    bool isValid(string s) {
        stack<char>st;
        int i=0;
        st.push(s[i]);
        i++;
        while(i<s.size())
        {
            if(st.empty()){st.push(s[i]),i++;continue;}
            char up=st.top();
            if((up=='(' && s[i]==')') || (up=='{' && s[i]=='}')|| (up=='[' && s[i]==']'))st.pop();
            else 
            {
                st.push(s[i]);
            }
            i++;
        }
        if(st.empty() && i==s.size())return true;
        return false ;
    }
};
