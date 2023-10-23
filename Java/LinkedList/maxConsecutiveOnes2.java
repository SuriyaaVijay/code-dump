import java.util.ArrayList;

public class maxConsecutiveOnes2 {
    public static void main(String[] args) {
        int[] arri = {1 , 0, 0, 1, 0, 1, 0, 1, 0, 1};
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i : arri)
        arr.add(i);
        int res = longestSubSeg(arr, arr.size(), 2);
        System.out.println(res);
    }
    public static int longestSubSeg(ArrayList<Integer> arr, int n, int k) {
		int i = 0, j = 0;
		int maxi = 0;
		int flip = 0;

		while (j < n) {
			if (arr.get(j) == 0) {
				flip++;
			}

			while (flip > k) {
				if (arr.get(i) == 0) {
					flip--;
				}
				i++;
			}
			maxi = Math.max(maxi, j - i + 1);
			j++;
		}
		return maxi;
	}
}
