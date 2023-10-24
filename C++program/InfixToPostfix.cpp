#include <iostream>
#include <string>
using namespace std;

class stack
{
    int top = -1;
    int arr[100];

public:
    bool isEmpty()
    {
        return (top == -1);
    }
    bool isFull()
    {
        return (top == sizeof(arr) / sizeof(arr[0]) - 1);
    }
    void push(int data)
    {
        if (isFull())
        {
            cout << "Stack overflow " << endl;
            return;
        }
        arr[++top] = data;
    }
    int getSize()
    {
        return top + 1;
    }
    int pop()
    {
        if (isEmpty())
        {
            cout << "Stack underflow" << endl;
            return -1;
        }
        return arr[top--];
    }
    int peek()
    {
        if (isEmpty())
        {
            cout << "Stack underflow" << endl;
            return -1;
        }
        return arr[top];
    }
};

int priority(char op)
{
    if (op == '^')
    {
        return 3;
    }
    else if (op == '/' || op == '*')
    {
        return 2;
    }
    else if (op == '+' || op == '-')
    {
        return 1;
    }
    return -1;
}

string Infix(string s)
{
    stack st;
    string str = "";

    for (int i = 0; i < s.size(); i++)
    {
        if ((s[i] >= '0' && s[i] <= '9') || (s[i] >= 'a' && s[i] <= 'z'))
        {
            str += s[i];
        }
        else if (s[i] == '(')
        {
            st.push(s[i]);
        }
        else if (s[i] == ')')
        {
            while (!st.isEmpty() && st.peek() != '(')
            {
                str += st.peek();
                st.pop();
            }
            if (!st.isEmpty())
            {
                st.pop();
            }
        }
        else
        {
            while (!st.isEmpty() && (priority(s[i]) < priority(st.peek())))
            {
                str += st.peek();
                st.pop();
            }
            st.push(s[i]);
        }
    }

    while(!st.isEmpty()){
        str+=st.peek();
        st.pop();
    }

    return str;
}

int main()
{
    string s = "a*(b+c/d)-e+f";
    cout << Infix(s) << endl;
}