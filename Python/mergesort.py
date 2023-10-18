import sys

"""
This program is an implementation of the Merge Sort in Python
Merge Sort is a sorting algorithm with a time complexity of nlogn
It uses divide and conquer approach and keeps down breaking the array
into halves until there is one element per a piece of array left.
Afterwards the small pieces of the array are merged together in an ascending order fashion.
"""

# The merge function merges two pieces of array such that the resulting array is sorted in an ascending order
def merge(arr, l, m, r):
    n1 = m-l+1
    n2 = r-m
    a = []
    b = []
    for i in range(n1):
        a.append(arr[l+i])
    for i in range(n2):
        b.append(arr[m+i+1])
    a.append(sys.maxsize)
    b.append(sys.maxsize)
    i = 0
    j = 0
    for k in range(l, r+1):
        if a[i] <= b[j]:
            arr[k] = a[i]
            i += 1
        else:
            arr[k] = b[j]
            j += 1

# This function divides the array into two halves, then keeps calling itself recursively till there is one element per each half left.
def mergeSort(arr, l, r):
    if l<r:
        mid = (l+r)//2
        mergeSort(arr, l, mid)
        mergeSort(arr, mid+1, r)
        merge(arr, l, mid, r)

n = int(input("Enter Length of the List: "))
list_to_sort = []
for i in range(n):
    list_to_sort.append(int(input(f"Enter Element {str(i+1)}: ")))
print("Input List:")
print(list_to_sort)
mergeSort(list_to_sort, 0, n-1)
print("Output List:")
print(list_to_sort)

