#include<bits/stdc++.h>
using namespace std;

class Stack{
    public:
        queue<int> q;

        void push(int x){
            q.push(x);
            for(int i=0; i<q.size()-1; i++){
                q.push(q.front());
                q.pop();
            }
        }

        void pop(){
            q.pop();
        }

        void top(){
            cout<<q.front()<<endl;
        }

        void isEmpty(){
            if(q.empty())
                cout<<"Stack is Empty"<<endl;
            else
                cout<<"Stack is not Empty"<<endl;

        }
};

int main()
{
    Stack s;
    s.isEmpty();
    s.push(5);
    s.top();

    s.push(4);
    s.top();

    s.push(3);
    s.top();

    s.push(2);
    s.top();

    s.isEmpty();
    s.push(1);
    s.top();

    return 0;
}
