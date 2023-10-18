package sorting;

public class BubbleSort {

    public static void main(String args[]){
        //initialize array
        int array[] = new int[]{2,1,4,3,5};
        System.out.println("Before");
        for(int i = 0; i<array.length;i++){
            System.out.print(array[i]+" ");
        }

        for(int i = 0; i<array.length;i++){

            for(int j = i+1; j<array.length;j++){
                if(array[i]>array[j]){
                    array[i] = array[i]+array[j];
                    array[j]= array[i]-array[j];
                    array[i]= array[i]-array[j];
                }
            }
        }
        System.out.println("");
        System.out.println("After");
        for(int i = 0; i<array.length;i++){
            System.out.print(array[i]+" ");
        }
    }
    
}
