class Solution {
    public static int search(int[] nums, int target) {
        if (nums.length < 3) {
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] == target) {
                    return i;
                }
            }
            return -1;
        }

        int midIndex = nums.length / 2;

        if (target == nums[midIndex]) {
            return midIndex;
        }

        int lowestIndex = 0;
        int highestIndex = nums.length - 1;

        for (int i = 0; i < nums.length/2; i++) {
            if (nums[midIndex] < target) {
                lowestIndex = midIndex;
                midIndex = ((highestIndex + lowestIndex) / 2);
                if (midIndex == lowestIndex) {
                    midIndex = highestIndex;
                }
                if (nums[midIndex] == target) {
                    return midIndex;
                }
            }

            if (nums[midIndex] > target) {
                highestIndex = midIndex;
                midIndex = (highestIndex + lowestIndex) / 2;
                if (midIndex == highestIndex) {
                    midIndex = lowestIndex;
                }
                if (nums[midIndex] == target) {
                    return midIndex;
                }
            }
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] nums = {-1,0,3,5,9,12};

        System.out.println(search(nums, -1));
    }
}