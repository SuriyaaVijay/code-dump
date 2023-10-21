// C program to find second largest element in an array 
#include <stdio.h> 
#include<stdlib.h> 

// Compare function for qsort 
int cmpfunc(const void* a, const void* b) 
{ 
	return (*(int*)a - *(int*)b); 
} 

/* Function to print the second largest elements */
void print2largest(int arr[], int arr_size) 
{ 
	int i, first, second; 
	/* There should be atleast two elements */
	if (arr_size < 2) { 
		printf(" Invalid Input "); 
		return; 
	} 
	// sort the array 
	qsort(arr, arr_size, sizeof(int), cmpfunc); 
	// start from second last element as the largest element 
	// is at last 
	for (i = arr_size - 2; i >= 0; i--) { 
		// if the element is not 
		// equal to largest element 
		if (arr[i] != arr[arr_size - 1]) { 
			printf("The second largest element is %d\n",arr[i]); 
			return; 
		} 
	} 
	printf("There is no second largest element\n"); 
} 

/* Driver program to test above function */
int main() 
{ 
	int arr[] = { 12, 35, 1, 10, 34, 1 }; 
	int n = sizeof(arr) / sizeof(arr[0]); 
	print2largest(arr, n); 
	return 0; 
} 

// This code is contributed by Aditya Kumar (adityakumar129)
