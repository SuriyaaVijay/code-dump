// Intuition ✔
// The problem requires converting a given string into a zigzag pattern with a specified number of rows and then reading the characters row by row to form a resulting string. 
// The zigzag pattern involves characters moving diagonally up and down.

// Approach ✔
// 1. Special Cases:
//    If the number of rows (numRows) is 1 or greater than or equal to the length of the input string (s.length()), return the input string as it is, as there is no zigzag pattern to form.
// 2. Initialize variables:
//    Create an empty string result to store the resulting zigzag pattern.
//    Find the length of the input string n.
//    Calculate the cycle length cycleLen as 2 * numRows - 2. This represents the number of characters in each complete cycle of the zigzag pattern.
// 3. Iterate through each row (from 0 to numRows - 1):
//    Inside the outer loop, iterate through the characters of the input string with a step size of cycleLen.
//    In each iteration, append the character at index j + i to the result, where j is the current position within the cycle and i is the current row.
//    If the current row is not the first row (i.e., i != 0) and not the last row (i.e., i != numRows - 1), and there is a valid character at the index j + cycleLen - i, append that character as well. This accounts for the diagonal movement in the zigzag pattern.
// 4. After completing both loops, the result string will contain the zigzag pattern.

// 5. Return the result string as the final output.

// Complexity ✔
// 1. Time complexity:
//    The code iterates through the input string s once, performing constant-time operations within the loops.
//    Therefore, the time complexity of this solution is O(n), where n is the length of the input string s.
// 1. Space complexity:
//    The space complexity mainly depends on the additional space used to store the result string.
//    In the worst case, the result string can have the same length as the input string, so the space complexity is O(n), where n is the length of the input string s.
//    The space used for other variables is constant and does not significantly impact the space complexity.

string convert(string s, int numRows) {
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }
        
        string result;
        int n = s.length();
        int cycleLen = 2 * numRows - 2;
        
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j + i < n; j += cycleLen) {
                result.push_back(s[j + i]);
                if (i != 0 && i != numRows - 1 && j + cycleLen - i < n) {
                    result.push_back(s[j + cycleLen - i]);
                }
            }
        }
        
        return result;
    }
