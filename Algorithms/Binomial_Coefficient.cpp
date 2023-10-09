#include<bits\stdc++.h>
using namespace std;
//Using recursion
int Cal_Binomial_Coefficient_Recursive(int n,int k){
    //cout<<n<<" "<<k<<endl;
    if(n<k){
        return 0;
    }
    else if(n == k || k == 0){
        return 1;
    }
    else{
        return Cal_Binomial_Coefficient_Recursive(n-1,k-1) + Cal_Binomial_Coefficient_Recursive(n-1,k); 
    }
}

//Using Dynamic Programming
int Cal_Binomial_Coefficient(int n,int k, int** dp)
{   
    //cout<<n<<" "<<k<<" "<<dp[n][k]<<endl;
	if (n < k)
		return 0;
	if (dp[n][k] != -1)
		return dp[n][k];

	dp[n][k] = Cal_Binomial_Coefficient(n-1,k-1,dp)+Cal_Binomial_Coefficient(n-1,k,dp);
	return dp[n][k];
}

void display( int** dp, int n,int k){
    cout<<endl;
    for (int i = 0; i < n; i++){
		for (int j = 0; j < k; j++){
			cout<<dp[i][j]<<"  ";
        }
        cout<<endl;
    }
    cout<<endl;
}
// Driver Code
int main(){
    int n = 5;
    int k = 3;
    
    cout<<"Binomial Coefficient By Recursive: "<<Cal_Binomial_Coefficient_Recursive(n,k)<<endl;
    int rows = n+1;
	int cols = k+1;
	int** dp;
	dp = new int*[rows];

	for (int i = 0; i < rows; i++)
		dp[i] = new int[cols];

	for (int i = 0; i < rows; i++)
		for (int j = 0; j < cols; j++)
		    if(i == j || j ==0){
		        dp[i][j] = 1;
		    }
		    else{
			    dp[i][j] = -1;
		    }
		    
    cout<<"Binomial Coefficient By Dynamic Programming: "<<Cal_Binomial_Coefficient(n,k,dp)<<endl;
    cout<<"Matrix Formed By Dynamic Programming: ";
    display(dp,n+1,k+1);
    return 0;
}