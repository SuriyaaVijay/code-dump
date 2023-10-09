# libraries
import random
import sys

# cool startup screen
def startup():
    print("\nCoin Flip")
    with open('ascii_coin.txt', 'r') as file:
        ascii_coin = file.read()
        print(ascii_coin)

# user input here
def choose():
    print("\nChoose heads or tails.")
    side = input("\nChoose: ")
    side = side.lower()
    return side
    if side == "heads":
        print("\nYou chose heads!")
    if side == "head":
        print("\nur dirty minded.")
        sys.exit()
    if side == "tails":
        print("\nYou chose tails!")
    if side == "tail":
        print("\nI don't think this is an animal...")
        sys.exit()


# flips coin and prints results
def flip(side):
    print("\nFlipping the coin...")
    result = random.choice(["heads", "tails"])
    print(f"\nThe side is {result}. ")
    if result == "heads":
        with open('heads.txt', 'r') as file:
            heads = file.read()
            print(heads)
    else:
        with open('tails.txt', 'r') as file:
            tails = file.read()
            print(tails)
    if side == result.lower():
        print("\nNice job! You are correct!")
    else:
        print("\nBetter luck next time!")

# running functions
startup()
side = choose()
flip(side)
