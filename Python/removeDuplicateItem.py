# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
# Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
# Return k after placing the final result in the first k slots of nums.
# Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

# Input: nums = [0,0,1,1,1,2,2,3,3,4]
# Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
# Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

nums = [0,0,1,1,1,2,2,3,3,4]
count = 0
for i in range(len(nums)):
    for j in range(len(nums)):
        if i == j:
            continue
        else:
            if nums[i] == nums[j]:
                nums[j] = '_'
# print(nums)
# print(count)

for i in range(1,len(nums)):
    if (nums[i] == '_'):
        for j in range(i+1,len(nums)):
            # print(nums[j])
            if (isinstance(nums[j], int)):
                nums[i],nums[j] = nums[j],nums[i]
                break
        # print("**************")

    # for j in range(j, len(nums)):
    #     if (nums[i] == 'X' and isinstance(nums[j], int)):
    #         nums[j],nums[i]=nums[i],nums[j]
for item in nums:
    if isinstance(item, int):
        count +=1
print(nums)
print(count)

