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

void Reverse(Node* &head){
    Node*temp = NULL;
    Node* cur = head;

    while(cur!=NULL){
        temp = cur->prev;
        cur->prev = cur->next;
        cur->next =  temp;
        cur=cur->prev;
    }

    if(temp!=NULL){
        head=temp->prev;
    }

}

void print(Node *head)
{

    Node *temp = head ;

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
  
    insertAtTail(head, 10);
    insertAtTail(head, 20);
    insertAtTail(head, 30);
    insertAtTail(head, 40);
    print(head); 
    Reverse(head);
    print(head);
  

    return 0;
}
