/*Given a number N.Find the maximum possible LCM that can be attained by any three numbers less than or equal to N.
Note- LCM stands for Lowest Common Multiple. Also, Numbers can be repeated.

Example 1:

Input:
N=9
Output:
504
Explanation:
504 is the maximum LCM that can be attained
by any triplet of numbers less than or equal 9.
The triplet which has this LCM is {7,8,9}.*/

class Solution {
    long lcmTriplets(long N) {
        // code here
        if(N < 3) {
            return N;
        }
        if(N % 2!=0) {
            return (N*(N-1)*(N-2));
        }
        if(N%2==0 && N % 3!=0) {
            return (N*(N-1)*(N-3));
        }
        return ((N-1)*(N-2)*(N-3));
    }
}