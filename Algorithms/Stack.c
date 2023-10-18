#include <stdio.h>
struct stack
{
    int arr[5];
    int top;
} st;

void stack_push()
{
    int item;
    if (st.top == 4)
    {
        printf("Stack Overflow\n");
    }
    else
    {
        printf("Enter the item: ");
        scanf("%d", &item);
        printf("**************\n");
        st.top++;
        st.arr[st.top] = item;
    }
}
void stack_pop()
{
    if (st.top == -1)
    {
        printf("Stack underflow");
    }
    else
    {
        st.top--;
    }
}
void stack_display()
{
    if (st.top == -1)
    {
        printf("Stack underflow\n");
    }
    else
    {
        int temp = st.top;
        while (temp >= 0)
        {
            printf("Stack:");
            printf("%d", st.arr[temp]);
            printf("\n");
            temp--;
        }
    }
}
int main()
{
    st.top = -1;
    int choice;
    printf("\nANUBHAV JAIN 22BIT0210\n");
    do
    {
        printf("1.Insertion\n2.Deletion\n3.Display\n4.Exit\n");
        printf("Enter the choice\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            stack_push();
            break;
        case 2:
            stack_pop();
            break;
        case 3:
            stack_display();
            break;
        case 4:
            exit(0);
            break;
        }
    } while (choice < 4);
}
