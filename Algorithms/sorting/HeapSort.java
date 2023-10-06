

class Solution
{
    void buildHeap(int arr[], int n)
    {
        // Your code here
        for(int i = n / 2 - 1; i>=0; i--) {
            heapify(arr,n,i);
        }
    }
 
    void heapify(int arr[], int n, int i)
    {
        // Your code here
        int largest = i;
        int left = 2*i + 1;
        int right = 2*i + 2;
        if(left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if(right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if(largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            
            heapify(arr,n,largest);
        }
    }
    
    public void heapSort(int arr[], int n)
    {
        //code here
        buildHeap(arr,n);
        for(int i=n-1; i>0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            
            heapify(arr,i,0);
        }
    }
}
