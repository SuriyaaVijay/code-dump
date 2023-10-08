import keyring as kr

kr.set_password("GeeksforGeeks","Dwaipayan","Geeks@123")

# print("Before deleting password ",kr.get_password("GeeksforGeeks","Dwaipayan"))

# kr.delete_password("GeeksforGeeks","Dwaipayan")

# print("After deleting Password", kr.get_password("GeeksforGeeks","Dwaipayan"))

cred = kr.get_credential("GeeksforGeeks","")

print("Username : ",cred.username)
print("Password : ",cred.password)

def save_cred():
    service_name = input("Enter Service Name.")
    username = input("Enter username")
    password = input("Enter Password")


    kr.set_password(service_name,"username",username)
    kr.set_password(service_name,username,password)

    print("Saved")

def get_cred(service_name):
    username = kr.get_password(service_name,'username')
    password = kr.get_password(service_name,username)

    return username,password

# save_cred()
# print(get_cred("GeeksforGeeks"))






