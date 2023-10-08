#include <stdio.h>
#include <stdlib.h>

int main()
{
    char ch[100];

    printf("coordinate of chess\nHorizontal a - h\nVertically 1 - 8\n");
    gets(ch);

    printf("%s\n", ch);

    for (int i = 0; ch[i] != '\0'; i++)
    {
        for (int j = i + 1; ch[j] != '\0'; j++)
        {
            if (ch[i] == 'a' || ch[i] == 'c' || ch[i] == 'e' || ch[i] == 'g')
            {
                if (ch[j] == '1' || ch[j] == '3' || ch[j] == '5' || ch[j] == '7')
                {
                    printf("Black\n");
                }
                else
                {
                    printf("White\n");
                }
            }

            if (ch[i] == 'b' || ch[i] == 'd' || ch[i] == 'f' || ch[i] == 'h')
            {
                if (ch[j] == '1' || ch[j] == '3' || ch[j] == '5' || ch[j] == '7')
                {
                    printf("White\n");
                }
                else
                {
                    printf("Black\n");
                }
            }
        }
    }

    return 0;
}
