function insertion_sort(arr):
    for i in range(1, length(arr)):
        key = arr[i]
        j = i - 1
 
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j = j - 1
 
        arr[j + 1] = key
