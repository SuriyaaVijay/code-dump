
#include<bits/stdc++.h>

class LRUCache {
public:
    class Node{
    public:
        int key;
        int val;
        Node *next;
        Node *prev;
        Node(int _key,int _value)
        {
            key=_key;
            val=_value;
            next=NULL;
            prev=NULL;
        }
    };
    Node *head=new Node(-1,-1);
    Node *tail=new Node(0,-1);
    int n;
    
    unordered_map<int,Node*> mp; 

    LRUCache(int capacity) {
        tail->prev=head;
        head->next=tail;
        n=capacity;
    }
    void makeRecent(int key)
    {
        Node *oldNode=mp[key];     ////Find and delete old node
        oldNode->prev->next=oldNode->next;
        oldNode->next->prev=oldNode->prev;

        Node *newNode=new Node(key,oldNode->val);
        newNode->next=head->next;
        delete oldNode;
        head->next->prev=newNode;//////Insert new node with same value in the front
        newNode->prev=head;
        head->next=newNode;
        mp[key]=newNode;
    }
    int get(int key) {
        if(mp.find(key)==mp.end())
        return -1;
        makeRecent(key);
        return mp[key]->val;
    }
    
    void put(int key, int value) { //////If key is there then update the value and make recent
        if(mp.find(key)!=mp.end())
        {
            mp[key]->val=value;
            makeRecent(key);
        }
        else
        {
            Node *newNode=new Node(key,value);////Else create the a new node
            mp[key]=newNode;
            newNode->next=head->next;
            head->next->prev=newNode;
            head->next=newNode;
            newNode->prev=head;
            n--;
            if(n<0)   ///////If capacity exceeded delete least recently used node that is last node
            {
                Node *nodeDelete=tail->prev;
                mp.erase(nodeDelete->key);
                tail->prev=nodeDelete->prev;
                nodeDelete->prev->next=tail;
                delete nodeDelete;
                n++;
            }
        }
    }
};