#include <iostream>

using namespace std;

void ascending ()
{
    int a[50],i,j,size,temp;
    cout<<"ENTER THE SIZE OF THE ARRAY:";
    cin>>size;
    cout<<"ENTER THE ELEMENTS OF ARRAY: ";
    for(i=0;i<size;i++)
    {
        cin>>a[i];
    }
    for(i=0;i<size;i++)
    {
        for(j=0;j<size;j++)
        {
            if(a[j]>a[i])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    cout<<"\nAscending: ";
    for(i=0;i<size;i++)
    {
        cout<<a[i]<<' ';
    }
}
void descending ()
{
    int a[50],i,j,size,temp;
    cout<<"ENTER THE SIZE OF THE ARRAY:";
    cin>>size;
    cout<<"ENTER THE ELEMENTS OF ARRAY: ";
    for(i=0;i<size;i++)
    {
        cin>>a[i];
    }
    for(i=0;i<size;i++)
    {
        for(j=0;j<size;j++)
        {
            if(a[j]<a[i])
            {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    cout<<"\nDescending: ";
    for(i=0;i<size;i++)
    {
        cout<<a[i]<<' ';
    }
}

int main()
{
    int choice,flag=0;
    cout<<"Enter\n1 for Ascending\n2 for Descending\n3 to Exit \n";
    cin>>choice;
    if(choice==1)
    {
        ascending();
    }
    else if(choice==2)
    {
        descending();
    }
    else if(choice==3)
    {
        flag=1;
    }
    else
    {
        cout<<"Invalid Input!";
    }
    if (flag==0)
    {
        cout<<"\n";
        main();
    }
}