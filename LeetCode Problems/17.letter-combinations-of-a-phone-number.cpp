class Solution {
public:
    void solve(int id,string &digits,string output,string mp[],vector<string> &ans ){
        // Base Case
        if(id>=digits.length()){
            ans.push_back(output); return;
        }

        
        int num = digits[id]-'0';
        string mapp = mp[num];
      
        for(int i=0;i<mapp.size();++i){
            output.push_back(mapp[i]);
            solve(id+1,digits,output,mp,ans);
            output.pop_back();
        }
    }

    vector<string> letterCombinations(string digits) {
        vector<string> ans;
        if(digits.length()==0) return ans;
      
        string output = "";

        string mp[10] = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        solve(0,digits,output,mp,ans);
        return ans;
    }
};
