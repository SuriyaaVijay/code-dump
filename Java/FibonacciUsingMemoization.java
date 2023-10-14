public class FibonacciWithMemoization {

    public static long fibArray[]=new long[26];
   
    public static long fibonacci(long n){
     long fibValue=0;
     if(n==0 ){
      return 0;
     }else if(n==1){
      return 1;
     }else if(fibArray[(int)n]!=0){
      return fibArray[(int)n];
     }else{
      fibValue=fibonacci(n-1)+fibonacci(n-2);
      fibArray[(int) n]=fibValue;
      return fibValue;
     }
    }