import random

def coin_flip():
    return random.choice(['heads', 'tails'])

def die_roll():
    return random.randint(1, 6)

def mood():
    return random.choice(['Happy', 'Sad', 'Angry', 'Shameful'])
