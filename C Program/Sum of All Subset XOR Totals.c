#include <stdio.h>
int helper(int *nums, int numsSize, int xor_total, int *sum)
{
    if (numsSize == -1)
    {
        return xor_total;
    }

    for (int i = 0; i <= numsSize; ++i)
    {
        if (i < numsSize)
        {
            xor_total ^= nums[i];
        }

        *sum += helper(nums + i + 1, numsSize - i - 1, xor_total, sum);

        if (i < numsSize)
        {
            xor_total ^= nums[i];
        }
    }
    return 0;
}

int subsetXORSum(int *nums, int numsSize)
{
    int sum = 0;
    helper(nums, numsSize, 0, &sum);
    return sum;
}

int main()
{
    int num[100], size;
    printf("Enter the size of array : ");
    scanf("%d", &size);

    printf("Enter the Element of array : ");
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &num[i]);
    }

    int sum = subsetXORSum(num, size);
    printf("sum = %d", sum);

    return 0;
}