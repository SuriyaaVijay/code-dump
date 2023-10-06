/*Given a number N. Find if it can be expressed as sum of two prime numbers.

Example 1:

Input: N = 34
Output: "Yes" 
Explanation: 34 can be expressed as 
sum of two prime numbers.*/
class Solution {
    static String isSumOfTwo(int N){
        // code here
        if(N%2==0) return"Yes";
        for(int i=2;i<N-2;i++)
        {
            if((N-2)%i==0)
            return "No";
        }
        return "Yes";
    }
}