import time
import random
import sys

def fake_type(words, multiplier = 1):
    words += "\n"
    for char in words:
        time.sleep(multiplier * random.choice([
            0.3, 0.11, 0.08, 0.07, 0.07,
            0.07, 0.06, 0.06, 0.05, 0.01
        ]))
        sys.stdout.write(char)
        sys.stdout.flush()
    time.sleep(1)

fake_type("This function simulates typing similar to humans. It will type with random intervals and it can even be changed with a multiplier!")