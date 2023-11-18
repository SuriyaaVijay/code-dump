import java.util.*;
 
class Solution{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] arr=new int[n];
        int sum=0;
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
            sum+=arr[i];
        }
        boolean[][] dp=new boolean[n+1][sum+1];
        for(int i=0;i<=n;i++){
            dp[i][0]=true;
        }
        for(int i=1;i<=n;i++){
            for(int j=1;j<=sum;j++){
                if(j-arr[i-1]>=0)dp[i][j]=dp[i-1][j-arr[i-1]] || dp[i-1][j];
                else {
                    dp[i][j]=dp[i-1][j];
                }
            }
        }
        int count=0;
        StringBuffer st=new StringBuffer();
        for(int i=1;i<=sum;i++){
            if(dp[n][i]){
                count++;
                st.append(i).append(" ");
            }
        }
        System.out.println(count);
        System.out.println(st);
    }
}
