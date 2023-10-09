class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        up = down = True
        for i in range(1,len(nums)):
            if nums[i] > nums[i-1]:
                up = False
            elif nums[i] < nums[i-1]:
                down = False

        return up or down
