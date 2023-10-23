#include <iostream>

using namespace std;

int main() {
    char operation;
    double num1, num2, result;

    cout << "Enter operator (+, -, *, /): ";
    cin >> operation;

    cout << "Enter two numbers: ";
    cin >> num1 >> num2;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                cout << "Error: Division by zero!" << endl;
                return 1; // Exit the program with an error code
            }
            break;
        default:
            cout << "Error: Invalid operator!" << endl;
            return 1; // Exit the program with an error code
    }

    cout << "Result: " << result << endl;

    return 0; // Exit the program successfully
}
