#include <iostream>
using namespace std;

class Node
{
public:
    // define the structure of the node
    int data;
    Node *next;

    // contructor to assign the vale
    Node(int val)
    {
        data = val;
        next = NULL;
    }
};


//insert at head 
void insertAtHead(Node* &head, int val){
   Node* newnode = new Node(val);

   //base if list is empty thn newnode = head
   if(head==NULL){
     newnode->next = newnode;
     head= newnode;
     return;
   }
   Node* temp =head;

   while(temp->next!=head){
    temp= temp -> next;
   }
   temp->next=newnode;
   newnode->next=head;
   head=newnode;
}

void insertAtTail(Node* &head, int val){
    Node* newnode = new Node(val);
    Node* temp=head;

    if(head==NULL){
        newnode->next = newnode;
        head=newnode;
        return;
    }

    while(temp->next!=head){
        temp=temp->next;
    }
    temp->next = newnode;
    newnode->next = head;
}

//delete head node 

void deleteHead(Node* &head){

    Node* temp= head;
    while(temp->next!=head){
        temp=temp->next;
    }
    Node* todelete = temp->next;
    temp->next = head->next;
    head= head->next;
    delete todelete;
}

// delete at last or position 
void deleteByPos(Node* &head, int pos){
    int index=pos-1;
    Node* temp=head;

    if(index==0){
        deleteHead(head);
        return ;
    }
    for(int i=0; i<index-1; i++){
        temp=temp->next;
    }
    Node* todelete = temp->next;
    temp->next = temp->next->next;
    delete todelete;
}


void print(Node* head){
    Node* temp = head;

    do{
        cout<<temp->data<<" -> ";
        temp=temp->next;

    }while(temp!=head);
    cout<<endl;
}



int main()
{
    Node *head = NULL;
  
    // insertAtHead(head,10);
    //  insertAtHead(head,20);
    //   insertAtHead(head,30);

    insertAtTail(head,10);
    insertAtTail(head,15);
     insertAtTail(head,20);
      insertAtTail(head,25);
      print(head);
      deleteByPos(head,4 );
      print(head);
  

    return 0;
}
