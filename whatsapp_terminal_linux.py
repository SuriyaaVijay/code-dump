import sys
import os
while True:
    usr = int(input("Enter phone number of the receiver: "))

    while True:
        message = str(input('TYPE MSG: '))
        if message == "exit":
            break
        else:
            os.system(f"npx mudslide send {usr} '{message}'")