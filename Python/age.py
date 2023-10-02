# Python code to calculate age written by dread

from datetime import datetime

# Function to calculate age
def calculate_age(birth_date):
    today = datetime.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age

# Input birth date in YYYY-MM-DD format
while True:
    try:
        birth_date_str = input("Enter your birth date (YYYY-MM-DD): ")
        birth_date = datetime.strptime(birth_date_str, "%Y-%m-%d")
        age = calculate_age(birth_date)
        print(f"Your exact age is {age} years.")
        break
    except ValueError:
        print("Invalid date format. Please use YYYY-MM-DD format.")
