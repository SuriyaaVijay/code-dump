class Solution {
    public String reverseWords(String s) {
        int n = s.length();
        if(n==1) return s;
        StringBuilder str = new StringBuilder();
        for(int i=0; i<n; i++){
            StringBuilder ss = new StringBuilder();
            while(i<n && s.charAt(i)!=' '){
                ss.append(s.charAt(i));
                i++;
            }
            str.append(ss.reverse());
            if(i!=n) str.append(' ');
        }
        return str.toString();
    }
}