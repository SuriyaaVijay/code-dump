class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        list3 = nums1 + nums2
        list3.sort()  
        length = len(list3)
        if(length % 2 == 0):
            avg = list3[(length/2)-1]+list3[(length/2)]
            return avg * 0.5
        else:
            return list3[(length-1)/2]
        return 1
