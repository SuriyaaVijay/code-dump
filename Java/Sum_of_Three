import java.util.*;
public class SumOfThree{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            boolean flag = false;
            for (int x = 1; x <= n / 3 + 1; x++) {
                for (int y = x + 1; y < n / 2 + 1; y++) {
                    int z = n - x - y;
                    if (x != y && y != z && z != x && y % 3 != 0 && x % 3 != 0 && z % 3 != 0) {
                        System.out.println("YES");
                        System.out.println(x + " " + y + " " + z);
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    break;
                }
            }
            if (!flag) {
                System.out.println("NO");
            }
        }
    }
}
