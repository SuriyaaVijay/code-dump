#include <iostream>
#include <queue>
#include <set>
using namespace std;

// Structure to represent a state of the jugs
struct State {
    int jug1;
    int jug2;

    State(int x, int y) : jug1(x), jug2(y) {}
};

// Function to perform BFS to solve the Two Water Jug Problem
bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {
    if (targetCapacity > jug1Capacity + jug2Capacity) {
        return false;
    }

    queue<State> q;
    set<pair<int, int>> visited;

    State initialState(0, 0);
    q.push(initialState);
    visited.insert({0, 0});

    while (!q.empty()) {
        State currentState = q.front();
        q.pop();

        int jug1 = currentState.jug1;
        int jug2 = currentState.jug2;

        // Check if the target capacity is reached
        if (jug1 == targetCapacity || jug2 == targetCapacity || jug1 + jug2 == targetCapacity) {
            return true;
        }

        // Fill jug1
        if (jug1 < jug1Capacity && visited.find({jug1Capacity, jug2}) == visited.end()) {
            q.push(State(jug1Capacity, jug2));
            visited.insert({jug1Capacity, jug2});
        }

        // Fill jug2
        if (jug2 < jug2Capacity && visited.find({jug1, jug2Capacity}) == visited.end()) {
            q.push(State(jug1, jug2Capacity));
            visited.insert({jug1, jug2Capacity});
        }

        // Pour from jug1 to jug2
        int pour = min(jug1, jug2Capacity - jug2);
        if (pour > 0 && visited.find({jug1 - pour, jug2 + pour}) == visited.end()) {
            q.push(State(jug1 - pour, jug2 + pour));
            visited.insert({jug1 - pour, jug2 + pour});
        }

        // Pour from jug2 to jug1
        pour = min(jug2, jug1Capacity - jug1);
        if (pour > 0 && visited.find({jug1 + pour, jug2 - pour}) == visited.end()) {
            q.push(State(jug1 + pour, jug2 - pour));
            visited.insert({jug1 + pour, jug2 - pour});
        }

        // Empty jug1
        if (jug1 > 0 && visited.find({0, jug2}) == visited.end()) {
            q.push(State(0, jug2));
            visited.insert({0, jug2});
        }

        // Empty jug2
        if (jug2 > 0 && visited.find({jug1, 0}) == visited.end()) {
            q.push(State(jug1, 0));
            visited.insert({jug1, 0});
        }
    }

    return false;
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
