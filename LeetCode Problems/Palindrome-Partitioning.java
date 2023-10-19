class Solution 
{
    public List<List<String>> partition(String s) 
    {
        List<List<String>> ans=new ArrayList<>();
        List<String> ds=new ArrayList<>();
        solve(0,ds,s,ans);
        return ans;    
    }
    private static void solve(int start, List<String> ds, String s, List<List<String>> ans)
    {
        if(start==s.length())
        {
            ans.add(new ArrayList<>(ds));
            return;
        }
        for(int i=start;i<s.length();i+=1)
        {
            if(isPalindrome(s,start,i))
            {
                ds.add(s.substring(start,i+1));
                solve(i+1,ds,s,ans);
                ds.remove(ds.size()-1);
            }
        }
    }
    private static boolean isPalindrome(String s, int i, int j)
    {
        while(i<j)
        {
            if(s.charAt(i++)!=s.charAt(j--))return false;
        }
        return true;
    }
}
