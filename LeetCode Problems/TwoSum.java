import java.util.*;

class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        int n= nums.length;
        for(int i=0; i<n-1; i++){
            for(int j=i+1;j<n; j++){
            
                if(nums[i]+nums[j]==target)
                
                return new int[] {i , j};
            }
        }
         return new int[]{};  
         
    }

    public static void main(String args[]) {
    int arr[] = { 1, 2, 6, 7, 3, 4, 8 };
    TwoSum twoSumObj = new TwoSum(); // Create an instance of the class
    int ans[] = twoSumObj.twoSum(arr, 9); // Call the method on the instance
    for (int i = 0; i < ans.length; i++) {
        System.out.print(ans[i]+" ");
    }
}

   
}