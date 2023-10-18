#include <stdio.h>
#include <stdlib.h>

struct Node{
    int data;
    struct Node*next;
};

struct Node* createNode(int data){
    struct Node* temp=(struct Node*)malloc(sizeof(struct Node));
    temp->data=data;
    temp->next=NULL;
    return temp;
}
void oddInfo(struct Node **head){
    struct Node *temp=*head;
    while(temp!=NULL){
        if((temp->data)%2!=0){
            printf("%d ",temp->data);
            temp=temp->next;
        }
        else{
            temp=temp->next;
        }
    }
}
void display(struct Node *head){
    struct Node *temp=head;
    while(temp!=NULL){
        printf("%d ",temp->data);
        temp=temp->next;
    }
    printf("\n");
}
int main(){
    
    struct Node *head=NULL;
    struct Node *first=createNode(1);
    struct Node *second=createNode(20);
    struct Node *third=createNode(3);
    struct Node *fourth=createNode(40);
    struct Node *fifth=createNode(5);
    struct Node *sixth=createNode(60);
    struct Node *seven=createNode(7);

    head=first;
    first->next=second;
    second->next=third;
    third->next=fourth;
    fourth->next=fifth;
    fifth->next=sixth;
    sixth->next=seven;
    seven->next=NULL;
    display(head);
    oddInfo(&head);
    return 0;
}