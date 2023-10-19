public class FactorialFncn {

	public static void main(String[] args) {
    System.out.println("Enter the number");
    java.util.Scanner sc=new java.util.Scanner(System.in);
    int num=sc.nextInt();
    Factorial(num);
    System.out.println("The factorial is "+Factorial(num));
    sc.close();
	}
	static int Factorial(int num) {
		int i=1,factorial=1;
//		if(num<1) {
//			System.out.println("Factorial of"+num+"is not possible");
//		}
//		else if(i==0) {
//			System.out.println("The factoiral of 0 is 1");
//		}
//		else{
			while(i<=num) {
				factorial=i*factorial;
				i++;
		}
			
//	}
		return factorial;
	}
	

}
