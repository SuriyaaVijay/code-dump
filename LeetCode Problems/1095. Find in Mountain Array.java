/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface MountainArray {
 *     public int get(int index) {}
 *     public int length() {}
 * }
 */
 
 class Solution {
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int peak = findPeak(mountainArr);
        
        int index = binaryMountainArray(mountainArr, 0, peak, target, true);
        if(index!=-1)
            return index;
        index = binaryMountainArray(mountainArr, peak + 1, mountainArr.length() - 1, target, false);
        return index;
    }
    
    public int findPeak(MountainArray mountainArr) {
        int start = 0;
        int end = mountainArr.length() - 1;
        
        while(start<end) {
            int mid = start + ((end - start) / 2);
            if(mountainArr.get(mid) < mountainArr.get(mid + 1)) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }
    
    public int binaryMountainArray(MountainArray mountainArr, int start, int end, int target, boolean left) {
        while(start<=end) {
            int mid = start + (end - start) / 2; 
            if(mountainArr.get(mid) == target)
                return mid;
            if(left) {
                if(mountainArr.get(mid) > target)
                    end = mid - 1;
                else {
                    start = mid + 1;
                }
            } else {
                if(mountainArr.get(mid) > target)
                    start = mid + 1;
                else 
                    end = mid - 1;
            }
        }
        return -1;
    }
}