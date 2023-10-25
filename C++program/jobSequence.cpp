#include <iostream>
#include <algorithm>
#include <vector>

struct Job {
    char id;      // Job ID
    int deadline; // Deadline of the job
    int profit;   // Profit associated with the job
};

// Function to compare jobs based on their profit
bool compareJobs(Job a, Job b) {
    return (a.profit > b.profit);
}

// Function to find the maximum profit job sequence
void jobSequencing(std::vector<Job>& jobs) {
    // Sort the jobs based on their profit in non-decreasing order
    std::sort(jobs.begin(), jobs.end(), compareJobs);

    int n = jobs.size(); // Number of jobs
    std::vector<char> result(n); // To store the result (job sequence)
    std::vector<bool> slot(n, false); // To keep track of available slots

    // Iterate through all the jobs and find a slot for each job
    for (int i = 0; i < n; ++i) {
        for (int j = std::min(n, jobs[i].deadline) - 1; j >= 0; --j) {
            // Find the first available slot, starting from the deadline
            if (!slot[j]) {
                result[j] = jobs[i].id;
                slot[j] = true; // Mark the slot as occupied
                break;
            }
        }
    }

    // Print the job sequence
    std::cout << "Job sequence for maximum profit: ";
    for (int i = 0; i < n; ++i) {
        if (slot[i]) {
            std::cout << result[i] << " ";
        }
    }
    std::cout << std::endl;
}

int main() {
    std::vector<Job> jobs = {{'a', 2, 100}, {'b', 1, 19}, {'c', 2, 27}, {'d', 1, 25}, {'e', 3, 15}};
    
    std::cout << "Original jobs:" << std::endl;
    for (const auto& job : jobs) {
        std::cout << "Job ID: " << job.id << ", Deadline: " << job.deadline << ", Profit: " << job.profit << std::endl;
    }
    
    jobSequencing(jobs);
    
    return 0;
}
