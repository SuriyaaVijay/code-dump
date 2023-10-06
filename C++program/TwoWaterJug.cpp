#include <iostream>
using namespace std;

// Function to find the greatest common divisor (GCD) using Euclidean algorithm
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to check if the Two Water Jug problem has a solution
bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {
    // Ensure the target capacity is achievable
    if (targetCapacity > jug1Capacity + jug2Capacity) {
        return false;
    }

    // Ensure that the target capacity is divisible by the greatest common divisor of jug1Capacity and jug2Capacity
    return targetCapacity % gcd(jug1Capacity, jug2Capacity) == 0;
}

int main() {
    int jug1Capacity, jug2Capacity, targetCapacity;

    // Input jug capacities and target capacity
    cout << "Enter the capacity of Jug 1: ";
    cin >> jug1Capacity;
    cout << "Enter the capacity of Jug 2: ";
    cin >> jug2Capacity;
    cout << "Enter the target capacity: ";
    cin >> targetCapacity;

    // Check if a solution exists
    if (canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity)) {
        cout << "Solution exists. You can measure " << targetCapacity << " liters of water." << endl;
    } else {
        cout << "No solution exists to measure " << targetCapacity << " liters of water." << endl;
    }

    return 0;
}
