# Hangman Game in C++

Welcome to the Hangman game in C++! This console-based game challenges you to guess a word one letter at a time. You have 5 attempts to guess the word, and if you run out of attempts, you lose.

## How to Play

1. Clone or download this repository to your computer.

2. Compile the C++ code using a C++ compiler.

3. Run the compiled program.

4. You will be presented with a hint and a partially hidden word. Your task is to guess the hidden word by entering one letter at a time.

5. You can continue to guess one letter at a time until you either successfully guess the word or run out of attempts.

6. If you successfully guess the word, you win! If you run out of attempts, the game will reveal the hidden word, and you lose.

## Rules

- You have 5 attempts to guess the word.
- You can only guess one letter at a time.
- If you guess a letter that is in the word, it will be revealed in the hidden word.
- If you guess a letter that is not in the word, you will lose an attempt.
- The game ends when you either guess the entire word or run out of attempts.

## Customize the Word List

You can customize the list of words and hints in the C++ code by editing the `wordList` vector in the source code. Add or remove words and hints to make the game more interesting.

## Hangman Stages

Here are the stages of the Hangman ASCII art used in the game:

```
  +---+
  |   |
      |
      |
      |
      |
========
  +---+
  |   |
  O   |
      |
      |
      |
========
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
```

## Acknowledgments

This Hangman game in C++ is provided by [Purna Shrestha](https://www.purnashrestha.com.np)

Enjoy the game, and happy guessing!
