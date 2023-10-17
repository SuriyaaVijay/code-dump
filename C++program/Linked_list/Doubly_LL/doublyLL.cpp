#include <iostream>
using namespace std;

class Node
{
public:
    // define the structure of the node
    int data;
    Node *prev;
    Node *next;

    // contructor to assign the vale
    Node(int val)
    {
        data = val;
        prev = NULL;
        next = NULL;
    }
};

// to insert node at head
void insertAthead(Node *&head, int val)
{

    Node *temp = new Node(val);
    // if list is empty
    if (head == NULL)
    {
        head = temp;
        return;
    }

    temp->next = head;
    head->prev = temp;
    head = temp;
}

// to insert at the end tail of the list 
void insertAtTail(Node* &head, int val){
    Node* newnode = new Node(val);
    Node* temp = head;
    if(head==NULL){
        head=newnode;
        return;
    }

    while(temp->next!=NULL){
        temp=temp->next;
    }
     temp->next=newnode;
     newnode->prev=temp;
}

// insert at any given position
void insertAtPosition(Node* &head, int val, int pos){

    Node* newnode = new Node(val);
    Node* temp =head;
    int index = pos-1;

    if(index==0){
        head->prev = newnode;
        newnode->next = head;
        head=newnode;
        return;
    }

    for(int i=0; i<index-1; i++){
        temp=temp->next;
    }
    newnode->next=temp->next;
    temp->next->prev=newnode;
    temp->next=newnode;
    newnode->prev=temp;
}

// Delete node from first 
Node* deleteFirst(Node* &head){
    Node* temp = head;

    if(head==NULL){
        return NULL;
    }

    temp->next->prev = NULL;
    head= temp->next;
    temp->next = NULL;

    delete temp ;
    // temp = NULL;

    return head;

}

// delete at last 
Node* deleteLast(Node* &head){
    if(head->next == NULL){
        head=NULL;
        return head;
    }
    Node* slast = head;
    Node* last = head->next;
    
    while(last->next!=NULL){
        slast=slast->next;
        last=last->next;
    }
    slast->next = NULL; 
    // slast->next = last->next;
    last->prev = NULL;

    delete last;

    return head;

}

//delete by position 
void deleteByPosition(Node* &head, int pos){
     int index= pos-1;
     Node* temp = head;
       
    // head node to delete 
     if(index==0){
        temp->next->prev = NULL;
        head= temp->next;
        temp->next = NULL;
        delete temp;
     }

     else{ 
        // when the position is given or have to delete the last node 
        Node* slast = head;
        Node* last = head->next;

        for(int i=0; i<index-1; i++){
            slast = slast->next;
            last = last->next;
        }

        last->prev = NULL;
        slast->next =  last->next;
        last->next->prev = slast;
        last->next=NULL;
        delete last;
     }

}

// to find the lenght of the list
int getLength(Node *head)
{
    Node *temp = head;
    int len = 0;

    while (temp != NULL)
    {
        len++;
        temp = temp->next;
    }
    return len;
}

void print(Node *head)
{

    Node *temp = head;

    if (head == NULL)
    {
        cout << "list is empty" << endl;
        return;
    }
    while (temp != NULL)
    {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;
}

int main()
{

    // Node* node1 = new Node(10);
    Node *head = NULL;
    insertAthead(head, 1);
    insertAtTail(head, 2);
    insertAtTail(head, 5);
    insertAtTail(head, 8);
    // print(head);
    insertAtPosition(head,3,3); 
    print(head); 
    // deleteFirst(head);
    // deleteLast(head);
    deleteByPosition(head, 4);
    print(head);
    cout << getLength(head);

    return 0;
}
