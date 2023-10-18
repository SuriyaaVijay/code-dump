#include<iostream>
using namespace std;

// void display(int** dp, int n, int sum){
//     for(int i=0; i<n+1; i++){
//         cout<<i<<" ";
//         for(int j=0; j<sum+1; j++){
//             cout<<dp[i][j]<<"  ";
//         }
//         cout<<endl;
//     }
//     cout<<endl;
// }

int makeChange(int** dp, int coins[], int sum, int index){
    if(dp[index][sum] != -1){
        return dp[index][sum];
    }
    if(index == 1){
        dp[index][sum] = 1 + makeChange(dp,coins,sum-coins[index-1],index);
        return dp[index][sum];
    }
    if(sum < coins[index-1]){
        dp[index][sum] = makeChange(dp,coins,sum,index-1);
        return dp[index][sum];
    }
    else{
        dp[index][sum] = min(1 + makeChange(dp,coins,sum-coins[index-1],index), makeChange(dp,coins,sum,index-1));
        return dp[index][sum];
    }
}

int main(){
    int coins[] = {1,3,5,10};
    int sum = 15;
     int n = sizeof(coins)/sizeof(coins[0]);
    
    int** dp;
    
    dp = new int* [n+1];
    for(int i=0; i<n+1; i++){
         dp[i] = new int[sum+1];
    }
    
    for(int i=0; i<n+1; i++){
        for(int j=0; j<sum+1; j++){
            if(i == 0){
                dp[i][j] = j;
            }
            else if(j == 0){
                dp[i][j] = 0;
            }
            else{
                dp[i][j] = -1;   
            }
        }
    }
    cout<<"Minimum Number Of Coins: "<<makeChange(dp,coins,sum,n)<<endl;
    //display(dp,n,sum);
    return 0;
}
