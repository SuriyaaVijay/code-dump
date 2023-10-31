#include<iostream>
using namespace std;

void towerOfHanoi(int n, char source, char auxiliary, char destination) {
    if (n == 1) {
        std::cout << "Move disk 1 from peg " << source << " to peg " << destination << std::endl;
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);
    std::cout << "Move disk " << n << " from peg " << source << " to peg " << destination << std::endl;
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

int main() {
    int n;  // Number of disks
    cout << "Enter the number of disks: ";
    cin >> n;
    towerOfHanoi(n, 'A', 'B', 'C'); // A, B, and C are the names of the pegs.
    return 0;
}
