class Solution {
    public String decodeAtIndex(String s, int k) {
        long len = 0;
        for(char ch:s.toCharArray()){
            if(Character.isDigit(ch)){
                len*=(ch-'0');
            }else{
                len++;
            }
        }
        int l=s.length();
        for(int i=l-1;i>=0;i--){
            char c=s.charAt(i);
            if(Character.isDigit(c)){
                len/=(c-'0');
                k %= len;
            }else{
                if(k==0 || len==k){
                    return String.valueOf(c);
                }
                len--;
            }
        }
        return "";
    }
}