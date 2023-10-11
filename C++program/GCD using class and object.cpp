#include<iostream>
using namespace std;

class gcd
{
    public:
    int a,b;
    int display(int a, int b)
    {
        if(b==0) return a;
        else return (b,a%b);
    }
};

int main()
{
    gcd s;
    int x,y;
    cout <<"enter two numbers: "<<endl;
    cin >> x >> y;
    cout << "GCD = " << s.display(x,y);
}
