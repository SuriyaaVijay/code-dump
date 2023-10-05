import java.util.ArrayList;
import java.util.List;

public class FindAllDublicateInArray {
    public static void main(String[] args) {
        int[] arr = {4,3,2,7,8,2,3,1};
        List <Integer> ans=new ArrayList<>();
        ans=findDuplicates(arr);
        System.out.println(ans);
        
    }

    public static List<Integer> findDuplicates(int[] arr) {

        int i = 0;
        while (i < arr.length) {
            int correct = arr[i]-1;
            if (arr[i] != arr[correct]) {
                swap(arr, i , correct);
            } else {
                i++;
            }
        }


         // search for first missing number
         List <Integer> ans=new ArrayList<>();
         for (int index = 0; index < arr.length; index++) {
            if (arr[index] != index) {
                 ans.add(index+1);
            }
        }
        
        return ans;

    }


    static void swap(int[] arr, int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }




}
