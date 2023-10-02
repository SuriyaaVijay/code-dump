#include <stdio.h>
#include <stdlib.h>
// ANUBHAV JAIN
// 22BIT0210

struct Queue
{
    int items[5];
    int front;
    int rear;
};

struct Queue q;

void enqueue(int value)
{
    if (q.rear == 5 - 1)
    {
        printf("Queue is full\n");
    }
    else
    {
        if (q.front == -1)
        {
            q.front = 0;
        }
        q.rear++;
        q.items[q.rear] = value;
        printf("Inserted: %d\n", value);
    }
}

void dequeue()
{
    if (q.front == -1)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Deleted: %d\n", q.items[q.front]);
        q.front++;
        if (q.front > q.rear)
        {
            q.front = q.rear = -1;
        }
    }
}

void display()
{
    if (q.front == -1)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Linear Queue: ");
        for (int i = q.front; i <= q.rear; i++)
        {
            printf("%d ", q.items[i]);
        }
        printf("\n");
    }
}

int main()
{
    q.front = -1;
    q.rear = -1;

    int choice, value;

    do
    {
        printf("\nQueue Operations:\n");
        printf("1.Insertion\n");
        printf("2.Deletion\n");
        printf("3.Display\n");
        printf("4.Quit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter value to enqueue: ");
            scanf("%d", &value);
            enqueue(value);
            break;
        case 2:
            dequeue();
            break;
        case 3:
            display();
            break;
        case 4:
            printf("Exiting program\n");
            exit(0);
        default:
            printf("Invalid choice\n");
        }
    } while (1);

    return 0;
}
