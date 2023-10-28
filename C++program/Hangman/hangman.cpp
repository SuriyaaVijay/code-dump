// Code by Purna Shrestha https://github.com/purnasth

#include <iostream>
#include <vector>
#include <string>
#include <set>
#include <ctime>
#include <cstdlib>

using namespace std;

struct Word
{
    string word;
    string hint;
};

vector<Word> wordList = {
    {"python", "A popular programming language"},
    {"javascript", "Another widely used programming language"},
    {"programming", "The act of writing code"},
    {"hangman", "The name of this game"},
    {"computer", "An electronic device for processing data"},
    {"keyboard", "Input device for computers"},
    {"developer", "Someone who writes software"}};

vector<string> stages = {
    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n========",
    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n========",
    "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========"};

Word chooseWord()
{
    srand(time(0));
    int randomIndex = rand() % wordList.size();
    return wordList[randomIndex];
}

void playHangman(const string &word, const string &hint)
{
    string lowerWord = word;
    for (char &c : lowerWord)
    {
        c = tolower(c);
    }

    set<char> guessedLetters;
    int attempts = 5;

    cout << "Welcome to Hangman!" << endl;
    cout << "Hint: " << hint << endl;
    cout << "Try to guess the word. You have 5 attempts." << endl;

    while (attempts > 0)
    {
        string displayWord;
        for (char letter : lowerWord)
        {
            if (guessedLetters.find(letter) != guessedLetters.end())
            {
                displayWord += letter;
            }
            else
            {
                displayWord += "_";
            }
        }

        cout << stages[5 - attempts] << endl;
        cout << "Word: " << displayWord << endl;
        cout << "Guessed letters: ";
        for (char letter : guessedLetters)
        {
            cout << letter << " ";
        }
        cout << endl;
        cout << "Attempts left: " << attempts << endl;

        if (set<char>(lowerWord.begin(), lowerWord.end()) == guessedLetters)
        {
            cout << "Congratulations! You guessed the word: " << word << endl;
            return;
        }

        char guess;
        cout << "Guess a letter: ";
        cin >> guess;
        guess = tolower(guess);

        if (guessedLetters.find(guess) != guessedLetters.end())
        {
            cout << "You've already guessed that letter." << endl;
        }
        else
        {
            guessedLetters.insert(guess);
            if (lowerWord.find(guess) == string::npos)
            {
                attempts--;
            }
        }
    }

    if (attempts == 0)
    {
        cout << "Out of attempts! The word was '" << word << "'." << endl;
        cout << stages[5] << endl;
    }
}

int main()
{
    Word chosenWord = chooseWord();
    playHangman(chosenWord.word, chosenWord.hint);
    return 0;
}
