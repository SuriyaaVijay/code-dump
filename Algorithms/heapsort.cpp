#include <iostream>

using namespace std;

void heapstep(int arr[], int N, int i)
{
    int largest = i;
 
    int l = 2 * i + 1;
 
    int r = 2 * i + 2;
 
    if (l < N && arr[l] > arr[largest])
        largest = l;
 
    if (r < N && arr[r] > arr[largest])
        largest = r;
 
    if (largest != i) {
        swap(arr[i], arr[largest]);
 
        heapstep(arr, N, largest);
    }
}

void HeapSort(int arr[], int N)
{
    for (int i = N / 2 - 1; i >= 0; i--)
        heapstep(arr, N, i);
 
    for (int i = N - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapstep(arr, i, 0);
    }
    cout<<"The Sorted Array is: ";
    for(int i=0; i< N; i++)
    {
        cout<<arr[i]<<" ";
    }
    
}

int main()
{
    int arr[6] = {82, 17, 68, 33, 5, 97};
    HeapSort(arr, 6);
    return 0;
}

// Output

// 5 17 33 68 82 97
