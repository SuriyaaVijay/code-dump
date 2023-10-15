import java.util.Scanner;

public class Pattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();
        //Outer loop
        for(int i=1; i<=n ;i++){
            //Inner loop
            for(int j=0; j<2*(n-i); j++){
                System.out.print("  ");
            }
            for(int j=i; j>0; j--){
                System.out.print(j + " ");
            }
            if(i > 1){
                for(int j=0; j<(2*i-3); j++){
                    System.out.print("  ");
                }
                for(int j=1; j<=i; j++){
                    System.out.print(j + " ");
                }
            }
            System.out.println();
        }


        //Outer loop
        for(int i=n; i>=1; i--){
            //Inner loop
            for(int j=0; j<2*(n-i); j++){
                System.out.print("  ");
            }
            for(int j=i; j>0; j--){
                System.out.print(j + " ");
            }
            if(i>1){
                for(int j=0; j<(2*i-3); j++){
                    System.out.print("  ");
                }
                for(int j=1; j<=i; j++){
                    System.out.print(j + " ");
                }
            }
            System.out.println();
        }
    }
}
