#include<stdio.h>

int main()
{
    int num,a;
    int len, ret;
    char str[50];
    printf("Enter the two number : ");
    scanf("%d",&num);

    sprintf(str, "%d", num);// convert integer to string
    len = strlen(str);
    for (int i= 0 ;i<len;i++)
    {
        printf("%d ",str[i]);
    }
    return 0;
}
