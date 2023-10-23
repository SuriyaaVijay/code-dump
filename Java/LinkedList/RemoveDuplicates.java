import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {0,0,1,1,1,2,2,3,3,4};
        System.out.println(removeDuplicates(arr));
        System.out.println(Arrays.toString(arr));
    }
    public static int removeDuplicates(int[] nums) {
        int i = 1 , j = 1 , count  =1 ;
        while(j<nums.length)
        {
            if(nums[j] == nums[j-1])
            {
                j++;
            }
            else
            {
                nums[i] = nums[j];
                i++;
                j++;
                count++;
            }
        }
        return count;
    }
}
