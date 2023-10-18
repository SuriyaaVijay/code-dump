package Sorting;

import java.util.Arrays;

public class CyclicSort {
    public static void main(String[] args) {
        //When given numbers from range 1 to n use cyclic sort..
        //Example when you have given question from range 1 to n.
        //Like if we have given a sorted array we use binary search likewise if we have given range like 0 to n then we use cyclic sort.
        //Index value in every sorted array == index = value-1..
        // checkk with first element and then swap it by its correct index
        //The time complexity for this is O(n)
        //Check swap move.
        //not work for negative numbers.


        int[] arr = {6,2,1,3,4,5};

        Sort(arr);
        System.out.println(Arrays.toString(arr));

    }
    static  void Sort(int[] arr){
        int indexValue=0;


        while (indexValue<arr.length){
            int correctIndex = arr[indexValue]-1;

            if(arr[indexValue]!=arr[correctIndex]){

         swap(arr,indexValue,correctIndex);

            } //have to do question missing number in leetcode  today.
            else {
             indexValue++;

            }

        }

    }
    static void swap(int[] arr, int first,int second){
        int temp= arr[first];
        arr[first] = arr[second];
        arr[second]=temp;
    }
}
