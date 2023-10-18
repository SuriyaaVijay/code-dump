package sorting;
//incomplete
public class CountingSort {
    public static void main(String args[]){

        int array[] = new int[]{2,1,4,3,5};
        int countArray[] = new int[]{0,0,0,0,0,0};
    
        //count the frequency
        for(int i = 0;i<array.length ; i++){
           countArray[array[i]]++;
        }

       

        for(int i = 1 ; i<countArray.length;i++){
           countArray[i] += countArray[i-1];
        }
         //print the frequency
         for(int i = 0;i<array.length ; i++){
            
        }


    }

    
}
