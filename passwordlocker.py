import sys
import pyperclip
import getpass

PASSWORDS = {
    'email': 'P@ssw0rd123',
    'blog': 'MyB10gP@ss',
    'bank': 'S3cur3B@nkP@ss'
}

def copy_password(account):
    if account in PASSWORDS:
        pyperclip.copy(PASSWORDS[account])
        print(f"Password for {account} copied to clipboard.")
    else:
        print(f"There is no account named {account}")

def add_password(account, password):
    PASSWORDS[account] = password
    print(f"Password for {account} added/updated.")

def main():
    if len(sys.argv) < 2:
        print("Usage: python password_locker.py [account] - copy account password")
        sys.exit()

    command = sys.argv[1]

    if command == 'copy':
        account = sys.argv[2]
        copy_password(account)
    elif command == 'add':
        account = sys.argv[2]
        password = getpass.getpass(f"Enter the password for {account}: ")
        add_password(account, password)
    else:
        print("Usage: python password_locker.py [copy/add] [account]")
        sys.exit()

if __name__ == "__main__":
    main()
