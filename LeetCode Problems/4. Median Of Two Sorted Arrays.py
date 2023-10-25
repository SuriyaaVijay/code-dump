# class Solution(object):
def findMedianSortedArrays(nums1, nums2): #Function to find median of two sorted arrays
    list3 = nums1 + nums2
    list3.sort()  
    l = len(list3)
    if(l % 2 == 0):
        median=(list3[int(l/2)-1]+list3[int(l/2)])/2
        return median
    else:
        return list3[int(l/2)]

