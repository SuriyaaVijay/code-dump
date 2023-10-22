#include<iostream>
using namespace std;
class User{
	private:
		string name;
		string username;
		string is_admin;
		int password;
		float balance;
		string user_type;
	public:
		User(string name1,string username1,string is_admin1,int password1,float balance1,string user_type1)
		{
			username=username1;
			name=name1;
			is_admin=is_admin1;
			password=password1;
			balance=balance1;
			user_type=user_type1;
			cout<<"\nUser login successful\n";
		}
		void deposit_cash()
		{
			int amount;
			cout<<"Enter amount you want to  deposit (in multiple of 500) : "<<endl;
			cin>>amount;
			if(amount%500==0)
			{
				balance=balance+amount;
			}
			else
			{
				cout<<"\nPlease enter multiple of 500\n";
			}
		}
		void withdraw_cash()
		{
			int amount;
			cout<<"Enter amount you want to withdraw (multiple of 500) : ";
			cin>>amount;
			if(amount%500==0&&amount>=500&&amount<=balance)
			{
				if(user_type=="classic")
				{
					if(amount<=5000)
					{
						balance=balance-amount;
						cout<<"\nTransaction successfl\n";
					}
					else
					{
						cout<<"\nMaximum withdraw limit is 5000.\n";
					cout<<"\nPlease enter valid amount\n";
					
				}
				}
				if(user_type=="gold")
				{
					
					if(amount<=7000)
					{
						balance=balance-amount;
						cout<<"\nTransaction successful.\n";
					}
					else
					{
						cout<<"\nMaximum withdraw cash limit is 7000.\n";
					cout<<"\nPlease enter valid amount.\n";
					
				}
				}
				if(user_type=="premium")
				{
					
					if(amount<=10000)
					{
						balance=balance-amount;
						cout<<"\nTransaction successful\n";
					}
					else
					{
						cout<<"\nMaximum withdraw cash limit is 10000.\n";
					cout<<"\nPlease enter valid amount.\n";
					
				}
				}
				
			}
			else
			{
				cout<<"\nPlease enter valid amount\n";
			}
		}
		void check_balance();
		
		
};
void User::check_balance()
		{
			cout<<"\n Current balance in your account is : "<<balance<<endl;
		}
int main()
{
	string name1,user_type1,username1;
	int balance1,password1;
	string is_admin1;

	cout<<"Enter name of user: ";
	cin>>name1;
	cout<<"Enter username of user: ";
	cin>>username1;
	cout<<"Enter admin state : ";
	cin>>is_admin1;
	cout<<"Enter current balance: ";
	cin>>balance1;
	cout<<"Enter password : ";
	cin>>password1;
	cout<<"Enter user type : ";
	cin>>user_type1;
	User user1(name1,username1,is_admin1,password1,balance1,user_type1);
	while(1)
	{
	cout<<"\nMENU\n";
	cout<<"1.Deposit cash\n";
	cout<<"2.Withdraw balance\n";
	cout<<"3.Check balance\n";
	int n,m;
	cout<<"\nChoose preference: ";
	cin>>n;
	switch(n)
	{
		case 1:
			deposit:
			user1.deposit_cash();
			
			cout<<"\nPress 1 to return to main menu\n";
			cin>>m;
			if(m==1)
			break;
			else 
			goto deposit;
		case 2:
			withdraw:
			user1.withdraw_cash();
			
			cout<<"\nPress 1 to return to main menu\n";
			cin>>m;
			if(m==1)
			break;
			else
			goto withdraw;
			
		case 3:
			balance:
			user1.check_balance();
			
			cout<<"\nPress 1 to return to main menu\n";
			cin>>m;
			
			if(m==1)
			break;
		    else
		    goto balance;
		default:
			cout<<"\nChoose correct option\n";
	}
}
return 0;

}
