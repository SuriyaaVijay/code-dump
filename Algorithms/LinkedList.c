#include <stdio.h>
#include <stdlib.h>

// Structure for a linked list node
struct Node {
    int data;
    struct Node* next;
};

// Function to create a new linked list node
struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a value at the beginning of the linked list
struct Node* insertAtBeginning(struct Node* head, int value) {
    struct Node* newNode = createNode(value);
    newNode->next = head;
    return newNode;
}

// Function to search for a value in the linked list
int search(struct Node* head, int value) {
    struct Node* current = head;
    while (current != NULL) {
        if (current->data == value) {
            return 1; // Value found
        }
        current = current->next;
    }
    return 0; // Value not found
}

// Function to delete a value from the linked list
struct Node* deleteNode(struct Node* head, int value) {
    struct Node* current = head;
    struct Node* prev = NULL;

    // If the value is at the head of the list
    if (current != NULL && current->data == value) {
        head = current->next;
        free(current);
        return head;
    }

    // Search for the value to be deleted
    while (current != NULL && current->data != value) {
        prev = current;
        current = current->next;
    }

    // If the value was not found
    if (current == NULL) {
        return head;
    }

    // Unlink the node from the list
    prev->next = current->next;
    free(current);
    return head;
}

// Function to display the linked list
void display(struct Node* head) {
    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

int main() {
    struct Node* head = NULL;
    int choice, value;

    while (1) {
        printf("\nLinked List Operations:\n");
        printf("1. Insert at Beginning\n");
        printf("2. Search\n");
        printf("3. Delete\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to insert at the beginning: ");
                scanf("%d", &value);
                head = insertAtBeginning(head, value);
                break;
            case 2:
                printf("Enter value to search: ");
                scanf("%d", &value);
                if (search(head, value)) {
                    printf("%d is present in the linked list.\n", value);
                } else {
                    printf("%d is not found in the linked list.\n", value);
                }
                break;
            case 3:
                printf("Enter value to delete: ");
                scanf("%d", &value);
                head = deleteNode(head, value);
                break;
            case 4:
                printf("Linked List: ");
                display(head);
                break;
            case 5:
                exit(0);
            default:
                printf("Invalid choice! Please enter a valid option.\n");
        }
    }

    return 0;
}
