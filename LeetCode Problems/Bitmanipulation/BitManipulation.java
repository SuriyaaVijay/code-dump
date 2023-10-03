package Bitmanipulation;


public class BitManipulation {
    public static void OddEven(int n){
        int bitMask=1;
        if((n & bitMask)==0){
            System.out.println("even");
        }else{
            System.out.println("odd");
        }
    }
    public static int getIthBit(int n,int i){
        int bitMask=1<<i;
        if((n & bitMask)==0){
            return 0;
        }else{
            return 1;
        }
    }
    public static int setIthBit(int n,int i){
        int bitMask=1<<i;

            return n|bitMask;

    }
    public static int clearIthBit(int n,int i){
        int bitMask=~(1<<i);

            return n & bitMask;

    }
    public static int updateIthBit(int n,int i,int newbit){
//        if(newbit==0){
//            return clearIthBit(n,i);
//        }else{
//            return setIthBit(n,i);
//        }

        n=clearIthBit(n,i);
        int Bitmask=newbit<<i;
        return n|Bitmask;



    }

    public static int clearIBits(int n,int i){
        int Bitmask=(~0)<<i;
        return n&Bitmask;

    }
//    range wise clear bits (i--->j);
    public static int clearIBitsInRange(int n,int i,int j){
        int a=((~0)<<(j+1));
        int b=(1<<i)-1;
        int bitmask=a|b;
        return n&bitmask;
    }
    public static boolean isPowerof2(int n){
        return (n&(n-1))==0;
    }
//    Google
    public static void countSetNoofBits(int n){
        int counter=0;
        int bitMask=1;
        while (n>0){
            if((n&bitMask)!=0){
                counter++;
            }
            n=n>>1;
        }
        System.out.println(counter);
    }

    public static int fastExpo(int a,int n){
        int ans=1;
        while (n>0){
            if((n&1)!=0){
                ans=ans*a;
            }
            a=a*a;
            n=n>>1;
        }
        return ans;
    }
    public static void SwapWithoutTemp(int x,int y){
        System.out.println("before swap");
        System.out.println("x="+x+", y="+y);

        x=x^y;
        y=x^y;
        x=x^y;

        System.out.println("After swap");
        System.out.println("x="+x+", y="+y);
    }

    public static  void incrementNum(){
        int x=6;
        System.out.println(x+" + "+1+" = "+(-~x));
        x=-4;
        System.out.println(x+" + "+1+" = "+(-~x));
        x=-0;
        System.out.println(x+" + "+1+" = "+(-~x));


    }
    public static void UppercasetoLowercase(String s){
        for (char ch= 'A'; ch <='Z' ; ch++) {
            System.out.println((char)(ch|' '));
        }
    }



        public static void main(String[] args) {
//        OddEven(4);
//        OddEven(3);
//        System.out.println(getIthBit(15,2));
//        System.out.println(setIthBit(10,2));

//        System.out.println(clearIthBit(10,1));
//        System.out.println(updateIthBit(10,2,1));

//            System.out.println(clearIBits( 15,2));

//            System.out.println(clearIBitsInRange(10,2,4));
//            System.out.println(isPowerof2(4));
//            System.out.println(isPowerof2(5));
//            countSetNoofBits(10);
//            System.out.println(fastExpo(2,3));
//            SwapWithoutTemp(3,4);
//            incrementNum();

            UppercasetoLowercase("BHAViK");



    }


}
