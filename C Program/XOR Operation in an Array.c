#include <stdio.h>
int xorOperation(int n, int start)
{
    int nums = 0;
    for (int i = 0; i < n; i++)
    {
        nums ^= (start + 2 * i);
    }
    printf("Bitwise XOR = %d ", nums);
}

int main()
{
    int n, start;
    printf("Enter the 'n' and 'start' = ");
    scanf("%d%d", &n, &start);

    xorOperation(n, start);

    return 0;
}
